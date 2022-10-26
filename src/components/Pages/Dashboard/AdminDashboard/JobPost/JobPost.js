import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../../../firebase.init';
const JobPost = () => {
    const [user] = useAuthState(auth);


    const handleAddReview = event => {
        event.preventDefault();
        const jobDetails = {
            email: user?.email,
            title: event.target.title.value,
            description: event.target.description.value,
            img: event.target.img.value,
            salaryRange: event.target.salaryRange.value,
            skillRequirement: event.target.skillRequirement.value,
        }
        // console.log(jobDetails);
    }

    return (
        <div>

            <form onSubmit={handleAddReview}>
                <div className="hero my-16 bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold">Post a Job!</h1>
                            <p className="py-6 text-2xl font-semibold text-gray-600">Post a Job to hire new talent!</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300 bg-opacity-30">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Title</span>
                                    </label>
                                    <input name='title' type="text" placeholder="Job title" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary Range</span>
                                    </label>
                                    <input name='salaryRange' type="text" placeholder="Salary Range" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Skill Requirement</span>
                                    </label>
                                    <label className="label -mt-3">
                                        <span className="label-text text-xs text-gray-500">Every requirement will be separated by a comma.</span>
                                    </label>
                                    <input name='skillRequirement' type="text" placeholder="Skill Requirement" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Image URL</span>
                                    </label>
                                    <input name='img' type="text" placeholder="Image URL" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Description</span>
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

export default JobPost;