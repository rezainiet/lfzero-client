import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleCourse = () => {
    const { id } = useParams()
    const [active, setActive] = useState(-1)
    const [getSingleCourse, setSingleCourse] = useState({});
    const [getInstructor, setGetInstructor] = useState({});


    useEffect(() => {
        const url = `https://api-lfzero.vercel.app/api/courses/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleCourse(data));
    }, [id]);


    useEffect(() => {
        const url = `https://api-lfzero.vercel.app/api/users/getUserByEmail/${getSingleCourse?.instructorEmail}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setGetInstructor(data));

    }, [getSingleCourse, getSingleCourse?.instructorEmail]);


    const syllabus = [
        {
            title: 'Join Our Facebook Group',
            content: "You will search our group name in facebook and then join our group."
        },
        {
            title: 'ইংরেজি বলা শুরু করুন',
            content: "Avoid the bad behave of english spoken."
        }
    ]
    // useEffect(() => {
    //     fetch('Course.json')
    //     .then(res => res.json())
    //     .then(data => console.log("data",data))
    //     .catch(err => console.log(err))
    //   }, [])
    return (
        <section className=''>
            <div className='max-w-7xl mx-auto flex flex-col-reverse md:grid grid-cols-10 gap-4 mb-20'>
                <div className='col-start-1 col-end-7 mt-3'>
                    <h2 className='text-3xl font-semibold my-2'>{getSingleCourse?.name}</h2>
                    <p>{getSingleCourse?.description}</p>
                    <div className='mt-3'>
                        <h3 className='text-xl font-medium mb-2'>Instructor</h3>
                        <div className='flex items-center border-2 p-5 rounded-xl'>
                            <img className='w-16 h-16 mr-5 rounded-full' src={getInstructor?.image} alt=''></img>
                            <div>
                                <h4 className='text-lg font-medium'>{getSingleCourse?.instructor}</h4>
                                <p className='text-sm'>
                                    <span className='font-semibold'>Educational Qualification:</span>
                                    {
                                        getInstructor?.eduQualification ? getInstructor.eduQualification : ' Not provided!'
                                    }
                                    <p className='text-sm'><span className='font-semibold'>Contact email:</span> {getInstructor?.contactEmail ? getInstructor.contactEmail : 'Not provided!'}</p>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h3 className='text-xl font-medium mt-6 mb-2'>Why you learn this course?</h3>
                            <div className='border-2 p-5 rounded-xl'>
                                {
                                    getSingleCourse?.keyPoints && getSingleCourse.keyPoints.map((item, index) => <React.Fragment key={index + 1}>
                                        <p className='my-1'> <span className='bg-green-300 rounded-full px-1 pt-1 bg-opacity-40'><i className="fa-solid fa-check text-xl text-green-500"></i></span>
                                            <span className='ml-2'>{item}</span>
                                        </p>
                                    </React.Fragment>)
                                }
                            </div>
                        </div>

                        {/* Course syllabus */}
                        {/* <div>
                            <h3 className='text-xl font-medium mt-4 mb-2'>Course Syllabus</h3>
                            <div className='px-5 pb-5 pt-3 border-2 rounded-xl'>
                                {syllabus.map((s, i) => <div onClick={() => setActive((i === active ? '-1' : i))} className='border-b-2 px-3 pt-2'>
                                    <div className='flex items-center justify-between font-medium mb-2 cursor-pointer'>
                                        <p className=''>{s.title}</p>
                                        <button>{active === i ? '-' : '+'}</button>
                                    </div>
                                    {active === i && <p className='text-sm'>{s.content}</p>}
                                </div>)}
                            </div>
                        </div> */}
                        <div>
                            <h3 className='text-xl font-medium mt-4 mb-1'>Course Details</h3>
                            <p className='font-medium'>Whose for this course?</p>
                            <p>{getSingleCourse?.targetedPeoples}</p>
                            <p className='font-medium mt-1'>Why you need this course?</p>
                            <p>{getSingleCourse?.whyNeed}</p>
                        </div>
                    </div>
                </div>
                <div className='col-start-7 col-end-11 mt-5'>
                    <div className='border-2 rounded-xl pb-5'>
                        {/* https://cdn.10minuteschool.com/lg/images/Thumbnails/Ghore-boshe-Spoken-English-Course-Thumbnail.jpg */}
                        <img className='w-full rounded-t-xl' src={getSingleCourse?.photoURL} alt='Thumbnail'></img>
                        <div className='px-5'>
                            <div className='mt-3'>
                                <div className='grid grid-cols-2 border-b-2 border-gray-300'>
                                    <div className='flex items-center mb-3'>
                                        <i className="fa-solid fa-users mr-2 text-xl"></i>
                                        <div>
                                            <p className='text-gray-500'>Course Enrolled</p>
                                            <p>Not updated yet! </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center mb-3'>
                                        <i className="fa-solid fa-clock mr-2 text-xl"></i>
                                        <div>
                                            <p className='text-gray-500'>Total Need Time</p>
                                            <p>1+ Hour </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2'>
                                    <div className='flex items-center mt-3'>
                                        <i className="fa-solid fa-check mr-2 text-xl"></i>
                                        <p>83 videos</p>
                                    </div>
                                    <div className='flex items-center mt-3'>
                                        <i className="fa-solid fa-check mr-2 text-xl"></i>
                                        <p>83 quizzes</p>
                                    </div>
                                </div>
                            </div>
                            <p className='text-right text-2xl font-semibold mb-2'>$ {getSingleCourse?.price}</p>
                            <button className='p-3 bg-[#643CF4] text-white rounded-lg w-full flex justify-center items-center hover:bg-[#5D10E3] duration-200'><span className='flex-1'>Course Enroll </span><i className="fa-solid fa-arrow-right-long"></i></button>
                        </div>
                    </div>
                    <p className='my-2 text-center'>Do you want to <a className='border-b-2 border-[#643CF4]' href="/contact" rel='noopener noreferrer' target='_blank'>contact us</a> about the course.</p>
                </div>
            </div>
        </section>
    );
};

export default SingleCourse;