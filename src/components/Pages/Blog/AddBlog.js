import React, { useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

const AddBlog = () => {

    // const { itemId } = useParams();
    // const [user] = useAuthState(auth);

    const handleAddReview = event => {
        event.preventDefault();
        const myreview = {
            email: event.target.email.value,
            // service: service.name,
            // serviceId: serviceId,
            title: event.target.title.value,
            description: event.target.description.value,
            ratings: event.target.ratings.value,
            img: event.target.img.value,
        }

        axios.post('https://infinite-refuge-16711.herokuapp.com/myreview', myreview)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Item Added Successfully!');

                    event.target.reset();
                }
            })
    }

    return (
        <div>
            <h2 className='text-center'>Write Article </h2>
            <form onSubmit={handleAddReview}>
                <br />
                <input className='w-full mb-2' type="email" name="email" placeholder='email' required readOnly disabled></input>
                <br />
                <input className='w-full mb-2' type="text" name="title" placeholder='title' autoComplete='off' required></input>
                <br />
                <input className='w-full mb-2' type="text" name="description" placeholder='Write Your Article' required></input>
                <br />
                {/* <input className='w-full mb-2' type="number" name="ratings" placeholder='Ratings' autoComplete='off' required></input> */}
                <br />
                <input className='w-full mb-2' type="text" name="img" placeholder='Img Url of Your Article' required></input>
                <br />
                <input className='btn btn-secondary' type='submit' value='Post'></input>
            </form>
            <ToastContainer></ToastContainer>
            
        </div>
    );
};

export default AddBlog;