import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const AddBlog = () => {
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
                            <h1 className="text-5xl font-bold">Add Blog!</h1>
                            <p className="py-6">Add a blog from here for reading new articles for everyone!</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300 bg-opacity-30">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Title</span>
                                    </label>
                                    <input name='title' type="text" placeholder="Blog title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input name='img' type="text" placeholder="Image URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Blog Description</span>
                                    </label>
                                    <textarea name="description" id="" cols="30" rows="30" placeholder="Description" className="input input-bordered py-2"></textarea>
                                </div>
                                <div className=" mt-6">
                                    <button type='submit' className="btn bg-pink-500 text-white hover:bg-pink-600">Submit Blog</button>
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

export default AddBlog;