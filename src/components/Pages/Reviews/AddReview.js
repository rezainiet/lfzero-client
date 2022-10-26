import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);


    const handleAddReview = event => {
        event.preventDefault();
        const addBlog = {
            email: user?.email,
            title: event.target.title.value,
            description: event.target.description.value,
            img: event.target.img.value,
        }
        console.log(addBlog);
    }

    return (
        <div>

            <form onSubmit={handleAddReview}>
                <div className="hero my-16 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Add Review</h1>
                            <p className="py-6">Add a Review & share your Experience!</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300 bg-opacity-30">
                            <div className="card-body">

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Share your Experience</span>
                                    </label>
                                    <textarea name="description" id="" cols="30" rows="30" placeholder="Write about Course" className="input input-bordered py-2"></textarea>
                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Feedback Rating</span>
                                    </label>
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>



                                <div className=" mt-6">
                                    <button type='submit' className="btn bg-pink-500 text-white hover:bg-pink-600">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default AddReview;