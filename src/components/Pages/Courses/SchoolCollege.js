import React, { useEffect, useState } from "react";
import Course from "./Course";

const SchoolCollege = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("https://lfzero.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <div className="my-28 mx-28">
      <div className="text-center ">
        <h2
          className="text-xl font-bold uppercase pb-5"
          style={{ color: "#5D10E3" }}
        >
          Courses for Class 1 to 12
        </h2>
        <p className="text center pb-5">
          starts from classs 1 and upto class 12 also admission...
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.slice(0, 3).map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolCollege;
