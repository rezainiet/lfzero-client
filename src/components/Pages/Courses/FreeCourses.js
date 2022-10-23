import React, { useEffect, useState } from "react";
import Course from "./Course";

const FreeCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://api-lfzero.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="my-28 mx-28">
      <div className="text-center ">
        <h2
          className="text-xl font-bold uppercase pb-5"
          style={{ color: "#5D10E3" }}
        >
          Start your Learning with our Free Courses
        </h2>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.slice(0, 3).map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FreeCourses;
