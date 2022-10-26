import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import BigSpinner from '../../../shared/Spinner/BigSpinner';

const MySwal = withReactContent(Swal);

const EnrollCourse = () => {
    const [user] = useAuthState(auth);
    const [course, setCourse] = useState({});
    const [isLoading, setLoading] = useState(false);
    const publishableKey =
        'pk_test_51LxDmxGYjBwS3Vl2i90ALhv7OjyKefxuw1YoQ2thoroVbvimAmAXQ28PcVTpiRHQ02EKFG9CXIYVRZd7mG2PywZ000TZbdcAQ4';

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:4000/api/courses/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                setLoading(false);
            });
    }, [id]);

    const priceForStripe = course?.price * 100;

    const handleSuccess = () => {
        MySwal.fire({
            icon: 'success',
            title: 'Payment was successful',
            time: 4000,
        });
    };
    const handleFailure = () => {
        MySwal.fire({
            icon: 'error',
            title: 'Payment was not successful',
            time: 4000,
        });
    };

    const payNow = async token => {
        try {
            const response = await axios({
                url: 'http://localhost:4000/payment',
                method: 'post',
                data: {
                    amount: course?.price * 100,
                    token,
                },
            });
            if (response.status === 200) {
                console.log(response);
                const paymentResponse = {
                    email: user?.email,
                    courseName: course?.name,
                    courseID: course?.id,
                    transactionID: response?.data?.balance_transaction,
                    transactionAmount: response?.data?.amount / 100,
                    billingDetails: response?.data?.billing_details,
                }

                const url = 'http://localhost:4000/api/enroll'
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(paymentResponse)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            handleSuccess();
                        }
                    })
            }
        } catch (error) {
            handleFailure();
            console.log(error);
        }
    };

    if (isLoading) {
        return <BigSpinner />
    }

    return (
        <div>
            <html class="border-l" lang="en">
                <body className='max-h-full items-center grid place-items-center w-full justify-center'>
                    <div class="h-screen grid grid-cols-3  items-center ">
                        <div></div>
                        <div class="col-span-1 bg-gray-200 bg-opacity-30 lg:block hidden">
                            <h1 class="py-6 border-b-2 text-xl text-gray-600 px-8">Order Summary</h1>
                            <ul class="py-6 border-b space-y-6 px-8">
                                <li class="grid grid-cols-6 gap-2 border-b-1">
                                    <div class="col-span-1 self-center">
                                        <img src={course?.photoURL} alt="Product" class="rounded w-full" />
                                    </div>
                                    <div class="flex flex-col col-span-3 pt-2">
                                        <span class="text-gray-600 text-md font-semi-bold">{
                                            course?.name?.length > 25 ? `${course?.name?.slice(0, 20)}...` : course?.name
                                        }</span>
                                        <span class="text-gray-400 text-sm inline-block pt-2">{course?.instructor}</span>
                                    </div>
                                    <div class="col-span-2 pt-3">
                                        <div class="flex items-center space-x-2 text-sm justify-between">
                                            <span class="text-gray-400">1 x {course?.price}</span>
                                            <span class="text-pink-400 font-semibold inline-block">${course?.price}</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="px-8 border-b">
                                <div class="flex justify-between py-4 text-gray-600">
                                    <span>Subtotal</span>
                                    <span class="font-semibold text-pink-500">${course?.price}</span>
                                </div>
                                <div class="flex justify-between py-4 text-gray-600">
                                    <span>Shipping</span>
                                    <span class="font-semibold text-pink-500">Not valid</span>
                                </div>
                            </div>
                            <div class="font-semibold text-xl px-8 flex justify-between py-8 text-gray-600">
                                <span>Total</span>
                                <span>${course?.price}</span>
                            </div>
                            <div className='flex items-end justify-end mr-2 mb-2'>
                                <StripeCheckout
                                    stripeKey={publishableKey}
                                    label={'Pay Now $' + course?.price}
                                    name="Pay With Credit Card"
                                    billingAddress
                                    shippingAddress
                                    amount={priceForStripe}
                                    description={`Your total is $${course?.price}`}
                                    token={payNow}
                                />
                            </div>
                        </div>
                        <div></div>
                    </div>
                </body>
            </html>
        </div>
    );
};

export default EnrollCourse;