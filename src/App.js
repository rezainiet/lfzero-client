import { Route, Routes } from "react-router-dom";
import About from "./components/Pages/About/About";
import Homepage from "./components/Pages/Homepage/Homepage";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import Footer from "./components/shared/Footer/Footer";
import Navbar from "./components/shared/Navbar/Navbar";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "./components/Pages/Contact/Contact";
// import Blog from "./components/Pages/Blog/Blog";
import Blogs from "./components/Pages/Blog/Blogs";
import AddBlog from "./components/Pages/Blog/AddBlog";


function App() {
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
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/addblog" element={<AddBlog></AddBlog>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
