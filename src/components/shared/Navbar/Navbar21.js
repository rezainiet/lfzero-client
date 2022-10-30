import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "./../../../assets/images/icons/logo.png";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState('');
  const [searchedData, setSearchedData] = useState([]);
  console.log(user);
  // console.log(user);

  const handleSearchClick = async (event) => {

    const url = `https://api-lfzero.vercel.app/api/courses/searchCourse/${searchInput}`
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setSearchedData(data)
        if (data) {
          navigate('/search', { state: { input: searchInput } });
        }
      })
  }
  const handleClickSupport = () => {
    toast.error("There is no support session running right now!");
  };
  return (
    <div className="bg-[#5D10E3] px-20">
      <div className="flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto">
        {/* Logo */}
        <div
          className="text-lg font-bold uppercase text-white"
          onClick={() => navigate("/")}
        >
          <img src={logo} alt="logo" width={75} />
        </div>

        {/* Hamburger */}
        <input
          className="peer hidden"
          type="checkbox"
          name="hamburger"
          id="hamburger"
        />
        <label
          htmlFor="hamburger"
          className="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2
                 peer-checked:border-white p-3 rounded-md transition-all"
        >
          <div className="m-auto w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div>
          <div className="m-auto mt-2 w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div>
        </label>

        {/* Menu navbar */}
        <div
          className="-translate-y-full lg:-ml-20 peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out"
        >
          <div
            className="bg-white text-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 
                    lg:space-y-0 lg:space-x-3 "
          >
            <a href="#">Category</a>
            <a href="#">Organization</a>
            <a href="#">Courses</a>

            <a
              href="https://meet.google.com/izn-mjkc-mdc"
              rel="noopener noreferrer"
              target="_blank"
              onClick={handleClickSupport}
            >
              Support
            </a>
          </div>
        </div>
        <div
          className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out"
        >
          <div
            className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 lg:space-y-0 lg:space-x-3">
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              name="searchBox"
              className="outline-none py-1 px-5 w-96 rounded-xl focus:ring-1 focus:ring-pink-500"
              placeholder="Search"
            />
            <button onClick={handleSearchClick} className='text-white'>Search</button>
          </div>
        </div>
        <div
          className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out"
        >
          <div
            className="bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 
                    lg:space-y-0 lg:space-x-3"
          >
            {!user && (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-white text-[#F53289] px-7 py-2 rounded-full"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/signUp")}
                  className="bg-[#F53289] text-white px-7 py-2 rounded-full"
                >
                  Registration
                </button>
              </>
            )}
          </div>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1 border-none">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
                  width="40px"
                  alt=""
                ></img>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-5 shadow bg-slate-50 rounded-box w-52"
              >
                <li className="flex">
                  <div className="flex-auto border-solid border-2 border-sky-500 ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
                      width="40px"
                      alt=""
                    ></img>
                    <p>
                      {user?.displayName
                        ? user.displayName
                        : user?.email.split("@")[0]}
                    </p>
                  </div>
                </li>
                <li>
                  <button onClick={() => navigate("/myprofile")}>
                    My Profile
                  </button>
                </li>
                <li>
                  <a onClick={() => navigate("/mycourses")}>My Courses</a>
                </li>
                <li>
                  <a>My Cart</a>
                </li>
                <li>
                  <a>My Wishlist</a>
                </li>
                <li>
                  {user && (
                    <button
                      onClick={() => signOut(auth)}
                      className="bg-gray-300 text-[#F53289] px-7 py-2 rounded-full"
                    >
                      Logout
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Navbar;