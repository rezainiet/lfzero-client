import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import CourseDetails from "./components/Pages/Courses/CourseDetails/CourseDetails";
import Homepage from "./components/Pages/Homepage/Homepage";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import SingleCourse from "./components/Pages/SingleCourse/SingleCourse";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/Pages/Contact/Contact";
import Blogs from "./components/Pages/Blog/Blogs";
import AddBlog from "./components/Pages/Blog/AddBlog";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyCourses from "./components/Pages/StudentDashboard/MyCourses";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndCondition from "./components/Pages/TermsAndCondition/TermsAndCondition";
import NotFound from "./components/Pages/NotFound/NotFound";

import Instructor from "./components/Pages/Instructor/Instructor";

import AdminDashboard from "./components/Pages/AdminDashboard/AdminDashboard";
import AllUsers from "./components/Pages/AdminDashboard/AllUsers";
import AllInstructor from "./components/Pages/AdminDashboard/AllInstructor";
import AllAdmin from "./components/Pages/AdminDashboard/AllAdmin";
import AllStudents from "./components/Pages/AdminDashboard/AllStudents";
import MyProfile from "./components/Pages/StudentDashboard/MyProfile";
import JobPost from "./components/Pages/AdminDashboard/JobPost/JobPost";
import Complain from "./components/Pages/Complain/Complain";

function App() {
  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => console.log("data", data));
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />

        <Route path="/privacyAndPolicy" element={<PrivacyAndPolicy />} />
        <Route path="/termsAndCondition" element={<TermsAndCondition />} />
        <Route path="/about" element={<About />} />
        <Route path="/about" element={<About />} />



        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/addblog" element={<AddBlog></AddBlog>}></Route>
        <Route path="/details/:id" element={<CourseDetails />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/jobPost" element={<JobPost />} />
        <Route path="comlain" element={<Complain/>}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
