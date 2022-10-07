import React from "react";
import FreeCourses from "../Courses/FreeCourses";
import SkillDevlopment from "../Courses/SkillDevlopment";
import TrendingCourses from "../Courses/TrendingCourses";
import SchoolCollege from "../Courses/SchoolCollege";
import Reviews from "../Reviews.js/Reviews";
import Devices from "../Devices/Devices";
import HeroSlider from "./HeroSlider/HeroSlider";
import Statistics from "./Statistics/Statistics";
//import Courses from '../Courses/Courses';


const Homepage = () => {
  return (
    <div>
      {/* <p>
        {" "}
        (Homepage) Navigate to{" "}
        <span className="text-purple-500">
          ./components/Pages/Homepage/Homepage
        </span>{" "}
        directory to working on this file
      </p> */}
      <HeroSlider />
      <TrendingCourses />
      <Statistics />
      <SchoolCollege></SchoolCollege>
      <SkillDevlopment></SkillDevlopment>
      <Reviews />
      <FreeCourses></FreeCourses>
      <Devices></Devices>
    </div>
  );
};

export default Homepage;
