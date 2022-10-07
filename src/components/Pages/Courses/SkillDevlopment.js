import React, { useEffect, useState } from "react";
import Course from "./Course";

const SkillDevlopment = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("Course.json")
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
          Courses for Professional Skill Development
        </h2>
        <p className="text center pb-5">
          Build your career with Professional certificate...
        </p>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillDevlopment;
