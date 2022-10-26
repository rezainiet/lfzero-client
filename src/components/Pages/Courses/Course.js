import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { _id, name, photoURL, description, ratings, price } = course;
  const navigate = useNavigate();


  // const handleNavigate = (id) => {
  //   navigate(`/details/${id}`)
  // }

  // const Course = ({ course }) => {
  //   const navigate = useNavigate()
  //   const { _id, name, img, des, rating, price } = course;
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl pb-5 rounded">
      <figure className="px-10 pt-10">
        <img
          src={photoURL}
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
        <p>{description}</p>

        <div className="grid grid-cols-6 gap-4 pb-4">
          <p
            className="font-bold col-start-1 col-end-3"
            style={{ color: "#5D10E3" }}
          >
            ${price}
          </p>
          <p
            className="col-end-8 col-span-3 text-xs"
            style={{ color: "#F48C08" }}
          >
            {ratings}
          </p>
        </div>

        <button
          onClick={() => navigate(`/course/${_id}`)}
          className="btn btn-primary p-2 px-5 rounded text-white"
          style={{ backgroundColor: "#F53289" }}
        // onClick={() => handleNavigate(_id)}
        >
          Details
        </button>
        <button
          onClick={() => navigate(`/course/${_id}`)}
          className="btn btn-primary p-2 px-5 rounded text-white"
          style={{ backgroundColor: "#00ff00" }}
        // onClick={() => handleNavigate(_id)}
        >
          Enroll Now
        </button>

      </div>
    </div>
  );
};

export default Course;
