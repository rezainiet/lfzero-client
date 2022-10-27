import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { changePlay } from "../../../../Redux/Slice/MySingleCoursePlaySlice";

const MySingleCourse = ({ singleCourse }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const buttonClick = async (course) => {
        await dispatch(changePlay(course))
        await localStorage.setItem('playVideo', JSON.stringify(course))
        await navigate('/myCoursePlay')
    }
    const { _id, name, img, des, rating, price } = singleCourse;
    return (
        // <div className="col-span-3 ">
        <div className="card lg:max-w-3xl bg-base-100 shadow-xl pb-5 rounded">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Course"
                    height="150px"
                    width="300px"
                    className="rounded-xl"
                />
            </figure>
            <div className="card-body items-center text-start px-10 pt-5">
                <h2
                    className="card-title text-start font-bold"
                    style={{ color: "#5D10E3" }}
                >
                    {name}
                </h2>
                <p>{des}</p>

                <button
                    className="btn btn-primary p-2 px-5 rounded text-white"
                    style={{ backgroundColor: "#F53289" }}
                    // onClick={() => navigate(`/${name}`)}
                    onClick={() => buttonClick(singleCourse)}
                >
                    Start Course
                </button>
            </div>
        </div>
        // </div>
    );
};

export default MySingleCourse;