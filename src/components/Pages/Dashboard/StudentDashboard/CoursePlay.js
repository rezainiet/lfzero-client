import React, { useEffect, useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import auth from '../../../../firebase.init';
import BigSpinner from '../../../shared/Spinner/BigSpinner';

const CoursePlay = () => {
    const [user] = useAuthState(auth);
    const play = useSelector(state => state.play.value);
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [isLoading, setLoading] = useState(false);
    const videoRef = useRef();
    const [videoSRC, setVideoSRC] = useState(null);
    const [videoTitle, setVideoTitle] = useState(null);
    // const [enrolledCourse, setEnrolledCourses] = useState([]);

    useEffect(() => {
        setLoading(true);
        const url = `https://api-lfzero.vercel.app/api/courses/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                // setVideoSRC(course?.videos?.contents[0]?.videoURL)
                console.log(data);
                setLoading(false);
            })
    }, [id]);

    // useEffect(() => {
    //     const url = `https://api-lfzero.vercel.app/api/enroll/${user?.email}`
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setEnrolledCourses(data));
    // }, [user, user?.email]);

    // console.log(id)
    // console.log(play);
    // console.log(videoRef);

    // const { videos } = course;


    if (isLoading) {
        return <BigSpinner />
    };
    return (
        <div className='max-w-7xl mx-auto '>
            <div className='md:grid gap-5 grid-cols-10 pb-2 mx-2'>
                <div className='col-start-1 lg:col-start-1 col-end-7 lg:col-end-8'>
                    <h3 className='text-xl font-medium py-4'>Complete interesting course with LFZero.</h3>

                    {
                        videoSRC === null && <div className='w-full h-2/3 my-12 flex items-center justify-center'>
                            <p className='text-2xl font-semibold text-pink-400'>Please select a video to play!</p>
                        </div>
                    }
                    {
                        videoSRC !== null && <iframe className='w-full min-h-[450px] lg:min-h-[515px]' ref={videoRef} height="515" src={`${videoSRC}?autoply=0&controls=1&modestbranding=0&disablekb=1&rel=0`} rel="0" title="Test Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }
                    {/* <iframe className='w-full min-h-[450px] lg:min-h-[515px]' height="" src="https://www.youtube.com/embed/rrj9yiHrKc4?autoply=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    <p className='flex justify-between items-center py-2 text-xl'>
                        {
                            videoTitle === null && 'Title of the video'
                        }
                        {
                            videoTitle !== null && videoTitle.length > 60 ? `${videoTitle.slice(0, 60)} ...` : videoTitle
                        }
                        <div>
                            <button className='border-2 px-5 py-2 rounded-full text-sm mr-2 text-gray-500'>Previous</button>
                            <button className='border-2 px-5 py-2 rounded-full text-sm text-white bg-[#f53289]'>Next</button>
                        </div>
                    </p>
                </div>
                <div className='col-start-7 lg:col-start-8 col-end-11 lg:col-end-11'>
                    <h3 className='text-md font-medium py-4 flex justify-between items-center gap-3 lg:gap-5'>Course Content <div className='flex items-center justify-center gap-1 lg:gap-3'><input type='range' min='0' max='100' defaultValue='30'></input> <span className='text-sm'>30%</span></div></h3>
                    <div>
                        <input className='my-1 bg-gray-200 py-2 px-2 w-full rounded ' type='text' placeholder='Search Lesson'></input>
                        <div className='flex flex-col items-start justify-center max-h-[450px] lg:max-h-[515px] overflow-auto'>
                            {/* <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 1 </button> */}
                            {
                                course?.videos?.contents?.map((video, index) => <React.Fragment>
                                    <button onClick={() => {
                                        setVideoSRC(video?.videoURL)
                                        setVideoTitle(video?.title)
                                    }} className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded hover:bg-gradient-to-tl from-green-200 to-green-300 transition-all duration-300 hover:text-purple-500'>{video?.title}</button>
                                </React.Fragment>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePlay;