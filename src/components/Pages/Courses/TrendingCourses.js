import React, { useEffect, useState } from "react";
import BigSpinner from "../../shared/Spinner/BigSpinner";
import Course from "./Course";

const TrendingCourses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoaing, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://api-lfzero.vercel.app/api/courses")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);


  if (isLoaing) {
    return <BigSpinner />
  }
  // console.log(courses);
  return (
    <div className="my-28 mx-5 lg:mx-20">
      <div className="text-center ">
        <h2
          className="text-xl font-bold uppercase pb-5"
          style={{ color: "#5D10E3" }}
        >
          Trending Courses
        </h2>
        <p className="text center">
          What’s going to be trending on learn from zero?
        </p>
        <p className="text center pb-5">
          Learn new things from trending courses
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {courses.slice(0, 4).map((course) => (
            <Course course={course}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
