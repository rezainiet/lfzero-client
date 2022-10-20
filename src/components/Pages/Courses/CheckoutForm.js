import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useState, useEffect } from 'react';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState();
    const [success, setSuccess] = useState();
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState();
    const [clientSecret, setClientSecret] = useState('');
    const { _id, totalCost, userEmail, userName } = order;

    useEffect(() => {
        if (totalCost) {
            fetch('https://parts-producer.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ totalCost })

            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        };

    }, [totalCost])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        };

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '');
        setSuccess('');
        setProcessing(true);

        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: userName,
                        email: userEmail
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }



        else {
            setCardError('');
            setTransactionId(paymentIntent.id);
            // console.log(paymentIntent)
            setSuccess('Congrats! Your payment is completed');


            // store payment on database
            const payment = {
                order: _id,
                transactionId: paymentIntent.id,
            }
            fetch(`https://parts-producer.herokuapp.com/getPayment/${order._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                    // console.log(data)
                });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-sm mt-5' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-red-500'>{cardError}</p>}
            {success && <p className='text-green-500'>{success}</p>}
            {success && <p className='text-red-300'>Your transaction ID is: <span className='text-success'>{transactionId}</span></p>}
        </>
    );
};

export default CheckoutForm;