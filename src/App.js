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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyCourses from "./components/Pages/StudentDashboard/MyCourses";
import Instructor from "./components/Pages/Instructor/Instructor";


function App() {
  useEffect(() => {
    fetch('Course.json')
      .then(res => res.json())
      .then(data => console.log("data", data))
  }, [])
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/details/:id" element={<CourseDetails />} />
        <Route path="/course/:id" element={<SingleCourse />} />
        <Route path="/mycourses" element={<MyCourses />} />
        <Route path="/instructor" element={<Instructor />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;

// hello sir