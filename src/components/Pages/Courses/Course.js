import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const navigate = useNavigate()
  const { _id, name, img, des, rating, price } = course;
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl pb-5 rounded">
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

        <div class="grid grid-cols-6 gap-4 pb-4">
          <p
            className="font-bold col-start-1 col-end-3"
            style={{ color: "#5D10E3" }}
          >
            {price}
          </p>
          <p
            className="col-end-8 col-span-3 text-xs"
            style={{ color: "#F48C08" }}
          >
            {rating}
          </p>
        </div>

        <button
        onClick={() => navigate(`/course/${_id}`)}
          className="btn btn-primary p-2 px-5 rounded text-white"
          style={{ backgroundColor: "#F53289" }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default Course;
