import React, { useEffect, useState } from "react";
import Course from "./Course";

const ShowAllCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-28 mx-28">
      <div className="text-center ">
        <h2
          className="text-2xl font-bold uppercase mb-5 pb-5"
          style={{ color: "#5D10E3" }}
        >
          My Courses
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-1 place-items-center   gap-5">
          {courses.map((singleCourse) => (
            <Course singleCourse={singleCourse}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowAllCourses;
