import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import BigSpinner from '../../../shared/Spinner/BigSpinner';

const MySIngleCoursePlay2 = () => {
    const play = useSelector(state => state.play.value)
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [isLoading, setLoading] = useState(false);
    const videoRef = useRef();
    const [videoSRC, setVideoSRC] = useState(null);
    const [videoTitle, setVideoTitle] = useState(null);

    useEffect(() => {
        setLoading(true);
        const url = `http://localhost:4000/api/courses/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCourse(data);
                console.log(data);
                setLoading(false);
            })
    }, [id]);

    // console.log(id)
    // console.log(play);
    // console.log(videoRef);

    const videos =
    {
        "id": 1,
        "courseTitle": "Python Full Course",
        "contents": [
            {
                "title": "P_00 Introduction to Python Course | Python for beginners",
                "videoURL": "https://www.youtube.com/embed/6i3EGqOBRiU"
            },
            {
                "title": "P_01: Introduction to Python Programming | Python for Beginners",
                "videoURL": "https://www.youtube.com/embed/DInMru2Eq6E"
            },
            {
                "title": "P_02: History of Python | Python Tutorials for Beginners",
                "videoURL": "https://www.youtube.com/embed/1UzSDMJRh8c"
            },
            {
                "title": "P_03 Download and Install Python (3.10.6) and Pycharm | Python Tutorials for Beginners",
                "videoURL": "https://www.youtube.com/embed/La1BdF_sunw"
            },
            {
                "title": "P_03 Download and Install Python (3.10.6) and Pycharm | Python Tutorials for Beginners",
                "videoURL": "https://www.youtube.com/embed/La1BdF_sunw"
            }
        ]
    }


    if (isLoading) {
        return <BigSpinner />
    };

    return (
        <div className='max-w-7xl mx-auto '>
            <div className='md:grid gap-5 grid-cols-10 pb-2 mx-2'>
                <div className='col-start-1 lg:col-start-1 col-end-7 lg:col-end-8'>
                    <h3 className='text-xl font-medium py-4'>Complete interesting course with LFZero.</h3>
                    {
                        videoSRC === null && <div className='w-full h-2/3 flex items-center justify-center'>
                            <p className='text-2xl font-semibold text-pink-400'>Please select a video to play!</p>
                        </div>
                    }
                    {
                        videoSRC !== null && <iframe className='w-full' ref={videoRef} height="515" src={`${videoSRC}?autoply=0&controls=1&modestbranding=0&disablekb=1&rel=0`} rel="0" title="Test Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }
                    {/* <video src="https://www.youtube.com/embed/rrj9yiHrKc4?autoply=1">
                    </video> */}
                    <p className='flex justify-between items-center py-2 text-xl'>
                        {
                            videoTitle === null && 'Video title'
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
                    <h3 className='text-md font-medium py-4 flex justify-between items-center gap-3 lg:gap-5'>Progress<div className='flex items-center justify-center gap-1 lg:gap-3'><input type='range' min='0' max='100' defaultValue='30'></input> <span className='text-sm'>30%</span></div></h3>
                    <div className='flex flex-col items-start justify-center'>
                        <input className='my-1 bg-gray-200 py-2 px-2 w-full rounded ' type='text' placeholder='Search Lesson'></input>
                        {
                            videos.contents.map((video, index) => <React.Fragment>
                                <button onClick={() => {
                                    setVideoSRC(video.videoURL)
                                    setVideoTitle(video.title)
                                }} className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>{video.title}</button>
                            </React.Fragment>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySIngleCoursePlay2;