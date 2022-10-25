import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'

const MySingleCoursePlay = () => {
    const play = useSelector(state => state.play.value)
    console.log(play) 
    // useEffect(() => {
    // }, [])
    return (
        <div>aaaa

        </div>
    );
};

export default MySingleCoursePlay;