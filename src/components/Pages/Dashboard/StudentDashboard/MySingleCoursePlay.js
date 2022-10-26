import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import BigSpinner from '../../../shared/Spinner/BigSpinner';

const MySingleCoursePlay = () => {
    const play = useSelector(state => state.play.value)
    const { id } = useParams();
    const [course, setCourse] = useState({});
    const [isLoading, setLoading] = useState(false);

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

    console.log(id)
    console.log(play);

    if (isLoading) {
        return <BigSpinner />
    };

    return (
        <div className='max-w-7xl mx-auto '>
            <div className='md:grid gap-5 grid-cols-10 pb-2 mx-2'>
                <div className='col-start-1 lg:col-start-1 col-end-7 lg:col-end-8'>
                    <h3 className='text-xl font-medium py-4'>Complete interesting course with LFZero.</h3>
                    <iframe className='w-full' height="515" src="https://www.youtube.com/embed/rrj9yiHrKc4?autoply=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p className='flex justify-between items-center py-2 text-xl'>
                        Video Name
                        <div>
                            <button className='border-2 px-5 py-2 rounded-full text-sm mr-2 text-gray-500'>Previous</button>
                            <button className='border-2 px-5 py-2 rounded-full text-sm text-white bg-[#f53289]'>Next</button>
                        </div>
                    </p>
                </div>
                <div className='col-start-7 lg:col-start-8 col-end-11 lg:col-end-11'>
                    <h3 className='text-md font-medium py-4 flex justify-between items-center gap-3 lg:gap-5'>Course Content <div className='flex items-center justify-center gap-1 lg:gap-3'><input type='range' min='0' max='100' defaultValue='30'></input> <span className='text-sm'>30%</span></div></h3>
                    <div className='flex flex-col items-start justify-center'>
                        <input className='my-1 bg-gray-200 py-2 px-2 w-full rounded ' type='text' placeholder='Search Lesson'></input>
                        <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 1 </button>
                        <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 2 </button>
                        <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 3 </button>
                        <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 4 </button>
                        <button className='my-1 bg-gray-200 py-2 px-2 w-full text-start rounded'>Video 5 </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySingleCoursePlay;