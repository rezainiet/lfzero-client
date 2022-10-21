import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddBlog = () => {


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
                {/* <input className='w-full mb-2' type="number" name="reads" placeholder='Reads' autoComplete='off' required></input> */}
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