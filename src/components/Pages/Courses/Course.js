import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, photoURL, description, ratings, price } = course;
  const navigate = useNavigate();

  // const handleNavigate = (id) => {
  //   navigate(`/details/${id}`)
  // }

  // const Course = ({ course }) => {
  //   const navigate = useNavigate()
  //   const { _id, name, img, des, rating, price } = course;
  return (
    <>
      {/* <div className="card  lg:max-w-lg  bg-base-100 shadow-xl pb-5 rounded">
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
            onClick={() => navigate(`/course/${id}`)}
            className="btn btn-primary p-2 px-5 rounded text-white"
            style={{ backgroundColor: "#F53289" }}
          // onClick={() => handleNavigate(_id)}
          >
            Details
          </button>
          <button
            onClick={() => navigate(`/course/${id}`)}
            className="btn btn-primary p-2 px-5 rounded text-white"
            // style={{ backgroundColor: "#00ff00" }}
            style={{ backgroundColor: "#5D10E3" }}
          // onClick={() => handleNavigate(_id)}
          >
            Enroll Now
          </button>
        </div>
      </div> */}

      <div className="flex text-start flex-col h-full bg-white shadow-lg rounded-lg overflow-hidden hover:-mt-2 transition-all duration-300 ease-linear">
        <a className="block focus:outline-none focus-visible:ring-2" href="#0">
          <figure className="relative h-0 pb-[56.25%] overflow-hidden">
            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={photoURL} width="320" height="180" alt="Course" />
          </figure>
        </a>
        <div className="flex-grow flex flex-col p-5">
          <div className="flex-grow">
            <header className="mb-3">
              <a className="block focus:outline-none focus-visible:ring-2" href="#0">
                <h3 className="text-[22px] text-gray-900 font-extrabold leading-snug">{name}</h3>
              </a>
            </header>
            <div className="mb-8">
              <p>{description}</p>
              <div className="flex items-center justify-between mt-2">
                <p className="hover:cursor-pointer font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-pink-500 focus:outline-none focus-visible:ring-2 hover:bg-pink-600 text-white">Price: ${price}</p>
                <p className="text-end text-sm text-pink-400">{course?.ratings}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            {/* <a className="font-medium text-sm inline-flex items-center justify-center px-3 py-1.5 rounded leading-5 text-gray-500 hover:underline focus:outline-none focus-visible:ring-2" href="#0">Cancel</a> */}
            <p className="hover:cursor-pointer font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-50 focus:outline-none focus-visible:ring-2 hover:bg-indigo-100 text-indigo-500"
              onClick={() => navigate(`/course/${id}`)}
            >Preview</p>
            <p className="hover:cursor-pointer font-semibold text-sm inline-flex items-center justify-center px-3 py-1.5 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out bg-indigo-500 focus:outline-none focus-visible:ring-2 hover:bg-indigo-600 text-white"
              onClick={() => navigate(`/course/${id}`)}
            >Enroll Now</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
