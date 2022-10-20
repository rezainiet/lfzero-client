import React, { useEffect, useState } from "react";
import MySingleCourse from "./MySingleCourse";
import RecommendCourse from "./RecommendCourse";

const MyCourses = () => {
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
        <div className="flex">
          <div className=" flex-1 grid sm:grid-cols-1 lg:grid-cols-1  gap-5">
            {courses.map((singleCourse) => (
              <MySingleCourse singleCourse={singleCourse}></MySingleCourse>
            ))}
          </div>
          <div className="flex-2">
            <h2
              className="text-xl font-bold uppercase m-10 p-5"
              style={{ color: "#F53289" }}
            >
              Recommendations for other courses
            </h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-1  gap-5">
              {courses.map((recommendCourse) => (
                <RecommendCourse
                  recommendCourse={recommendCourse}
                ></RecommendCourse>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
