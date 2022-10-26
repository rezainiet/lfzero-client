import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import CourseDetails from "./components/Pages/Courses/CourseDetails/CourseDetails";
import Homepage from "./components/Pages/Homepage/Homepage";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/Login/SignUp";
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
import MyCourses from "./components/Pages/Dashboard/StudentDashboard/MyCourses";
import PrivacyAndPolicy from "./components/Pages/PrivacyAndPolicy/PrivacyAndPolicy";
import TermsAndCondition from "./components/Pages/TermsAndCondition/TermsAndCondition";
import NotFound from "./components/Pages/NotFound/NotFound";

//import Instructor from "./components/Pages/Dashboard/Instructor/Instructor";

import AdminDashboard from "./components/Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllUsers from "./components/Pages/Dashboard/AdminDashboard/AllUsers";
import AllInstructor from "./components/Pages/Dashboard/AdminDashboard/AllInstructor";
import AllAdmin from "./components/Pages/Dashboard/AdminDashboard/AllAdmin";
import AllStudents from "./components/Pages/Dashboard/AdminDashboard/AllStudents";
import MyProfile from "./components/Pages/Dashboard/StudentDashboard/MyProfile";
// import JobPost from "./components/Pages/Dashboard/AdminDashboard/JobPost/JobPost";
import RequiredAuth from "./components/Pages/Login/RequiredAuth";
import InstructorDashboard from "./components/Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import Overview from "./components/Pages/Dashboard/InstructorDashboard/Overview/Overview";
import InstructorProfile from "./components/Pages/Dashboard/InstructorDashboard/IntructorProfile";
import ShowAllStudent from "./components/Pages/Dashboard/InstructorDashboard/ShowAllStudent/ShowAllStudent";
import Reviews from "./components/Pages/Reviews/Reviews";
import AddReview from "./components/Pages/Reviews/AddReview";

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
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/addReview" element={<AddReview></AddReview>}></Route>
        <Route path="/details/:id" element={<CourseDetails />} />
        <Route path="/course/:id" element={<SingleCourse />} />

        <Route
          path="/mycourses"
          element={
            <RequiredAuth>
              <MyCourses />
            </RequiredAuth>
          }
        />
        <Route
          path="/myprofile"
          element={
            <RequiredAuth>
              <MyProfile />
            </RequiredAuth>
          }
        />

        <Route
          path="admin-dashboard"
          element={
            // <RequireAuth>
            <AdminDashboard />
            // </RequireAuth>
          }
        >
          <Route index element={<AllUsers />}></Route>
          <Route path="all-Instructor" element={<AllInstructor />}></Route>
          <Route path="all-Admin" element={<AllAdmin />}></Route>
          <Route path="all-Student" element={<AllStudents />}></Route>
        </Route>

        {/* Instructor dashboard Routes */}

        <Route
          path="instructor-dashboard"
          element={
            // <RequireAuth>
            <InstructorDashboard />
            // </RequireAuth>
          }
        >
          <Route index element={<Overview />}></Route>
          <Route path="Profile" element={<InstructorProfile />}></Route>
          <Route path="all-Student" element={<ShowAllStudent />}></Route>
        </Route>

        {/* <Route path="/jobPost" element={<JobPost />}></Route> */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
