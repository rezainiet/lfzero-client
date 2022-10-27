import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../../firebase.init";
import MySingleCourse from "./MySingleCourse";
import RecommendCourse from "./RecommendCourse";

const MyCourses = () => {
  const [user] = useAuthState(auth);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  useEffect(() => {
    const url = `http://localhost:4000/api/enroll/${user?.email}`
    fetch(url)
      .then(res => res.json())
      .then(data => setEnrolledCourses(data));
  }, [user, user?.email]);

  const buttonClick = (id) => {
    navigate(`/myCourseplay/${id}`)
  };

  console.log(enrolledCourses)

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
            {/* {courses.map((singleCourse) => (
              <MySingleCourse singleCourse={singleCourse}></MySingleCourse>
            ))} */}
            {
              enrolledCourses.map((course) => <>
                <div className="card lg:max-w-3xl bg-base-100 shadow-xl pb-5 rounded">
                  <figure className="px-10 pt-10">
                    <img
                      src={course.courseImage}
                      alt="Course"
                      height="150px"
                      width="300px"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-start px-10">
                    <h2
                      className="card-title text-start font-bold"
                      style={{ color: "#5D10E3" }}
                    >
                      {course?.courseName}
                    </h2>
                    <p>{course?.courseDescription}</p>

                    <button
                      className="btn btn-primary p-2 px-5 rounded text-white"
                      style={{ backgroundColor: "#F53289" }}
                      // onClick={() => navigate(`/${name}`)}
                      onClick={() => buttonClick(course?.courseID)}
                    >
                      Start Course
                    </button>
                  </div>
                </div>
              </>)
            }
          </div>
          <div className="flex-2">
            <h2
              className="text-xl font-bold uppercase m-10 p-5"
              style={{ color: "#F53289" }}
            >
              Recommendations for other courses
            </h2>
            <div className="grid sm:grid-cols-1 lg:grid-cols-1 m-10 gap-5">
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
