import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BigSpinner from '../../../shared/Spinner/BigSpinner';

const AllCourses = () => {
    const [allCourse, setAllCourse] = useState([]);
    const navigate = useNavigate();
    const [isLoaing, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const url = `https://api-lfzero.vercel.app/api/courses`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllCourse(data);
                setLoading(false);
            });
    }, []);

    if (isLoaing) {
        return <BigSpinner />
    }

    return (
        <div className='mx-28'>
            <div className="">
                <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
                    <div className="h-full">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 ">
                            {
                                allCourse.map((singleCourse, index) => <React.Fragment>
                                    <div className="flex flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden">
                                        <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                            <figure className="relative h-0 pb-[56.25%] overflow-hidden">
                                                <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={singleCourse.photoURL} width="320" height="180" alt="Course" />
                                            </figure>
                                        </a>
                                        <div className="flex-grow flex flex-col p-5">
                                            <div className="flex-grow">
                                                <header className="mb-3">
                                                    <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                                                        <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">The Ultimate JavaScript Course</h3>
                                                    </a>
                                                </header>
                                                <div className="mb-8">
                                                    <p>The JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end space-x-2">
                                                {/* <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a> */}
                                                <p className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
                                                    onClick={() => navigate(`/course/${allCourse?.id}`)}
                                                >Preview</p>
                                                <p className="font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
                                                    onClick={() => navigate(`/course/${allCourse?.id}`)}
                                                >Enroll Now</p>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>)
                            }
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AllCourses;