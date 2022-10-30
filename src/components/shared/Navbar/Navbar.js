import React, { useEffect, useInsertionEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const [check, setCheck] = useState(false)
    console.log(user);


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
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearchClick();
        }
    };

    const handleClickSupport = () => {
        toast.success("You are in now Live Support session!");
    };

    return (
        <div className="bg-[#5D10E3] sm:px-20">
            <div className="flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto ">
                {/* Logo */}
                <div className="flex justify-between w-full lg:w-[80px]">
                    <div
                        className="text-lg font-bold uppercase text-white cursor-pointer"
                        onClick={() => navigate("/")}>
                        <img className='min-w-[60px]' src={logo} alt="logo" width={75} />
                    </div>

                    {/* Hamburger */}
                    <input
                        className="peer hidden"
                        type="checkbox"
                        name="hamburger"
                        id="hamburger"
                        onChange={(e) => setCheck(e.target.checked)}
                    />
                    <label htmlFor="hamburger"
                        className="peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2
                 peer-checked:border-white p-1 rounded-md transition-all">
                        {check ? <i className="fa-solid fa-x text-white font-bold px-1 text-xl"></i>
                            :
                            <>
                                {/* <div className="m-auto w-4 sm:w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div>
                <div className="m-auto mt-2 w-4 sm:w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div> */}
                                <i className="fa-solid fa-bars text-white font-bold px-1 text-xl"></i>
                            </>}
                    </label>
                </div>

                {/* Menu navbar */}
                <div className={`${check ? "top-[80px]" : "top-[-310px]"} flex-1 flex absolute lg:static z-50 lg:z-0 bg-gradient-to-b from-[#5119CD] to-blue-600 lg:bg-gradient-to-b lg:from-[#5d10e3] lg:to-[#5d10e3] w-full left-0 lg:justify-between lg:items-center flex-col lg:flex-row justify-center items-center text-center duration-700`}>
                    <div
                        className="">
                        <div
                            className="text-white lg:bg-transparent flex flex-col lg:items-center lg:flex-row lg:px-4 xl:px-6 space-y-2 pt-3 lg:pt-0 lg:space-y-0 lg:space-x-3">
                            <a className='lg:text-sm xl:text-md' href="#">Category</a>
                            <a className='lg:text-sm xl:text-md' href="#">Organization</a>
                            <Link className="lg:text-sm xl:text-md" to="/allcourses">Courses</Link>
                            <a className='lg:text-sm xl:text-md' href="https://meet.google.com/izn-mjkc-mdc" rel="noopener noreferrer" target='_blank' onClick={handleClickSupport}>Support</a>
                        </div>
                    </div>
                    <div
                        className="">
                        <div
                            className="lg:bg-transparent py-2 lg:py-0 flex flex-col lg:items-center lg:flex-row pl-1 pr-1 xl:px-6 space-y-2 
                    lg:space-y-0 lg:space-x-3">
                            <input
                                onChange={(e) => setSearchInput(e.target.value)}
                                type="text"
                                className="outline-none py-1 px-5 w-72 sm:w-96 lg:w-60 xl:w-96 rounded-xl focus:ring-1 focus:ring-pink-500"
                                placeholder="Search"
                                onKeyDown={handleKeyDown}
                            />
                            <button onClick={handleSearchClick} className='text-white'>Search</button>
                        </div>
                    </div>
                    <div
                        className="">
                        <div
                            className="lg:bg-transparent pt-2 pb-5 lg:py-0 flex flex-col lg:items-center lg:flex-row xl:px-6 space-y-4 
                    lg:space-y-0 lg:space-x-1 xl:space-x-2">
                            {
                                !user && <>
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
                            }
                        </div>
                    </div>
                </div>
                {/* user login */}
                {user ? (
                    <>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn ml-2 border-none p-0">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
                                    className='w-[44px] lg:min-w-[40px] lg:w-[40px] rounded'
                                    alt=""
                                ></img>
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-5 bg-slate-50 drop-shadow-xl rounded-box min-w-[200px] max-w-[400px]"
                            >
                                <li className="flex">
                                    <div className="flex-auto border-solid border-2 border-sky-500 ">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
                                            width="40px"
                                            alt=""
                                        ></img>
                                        <p className='min-w-[200px]'>{user?.displayName ? user?.displayName : (user?.email.split('@')[0])}</p>
                                    </div>
                                </li>
                                <li>
                                    <button onClick={() => navigate("/myprofile")}>
                                        My Profile
                                    </button>
                                </li>
                                <li>
                                    <a onClick={() => navigate("/mycourses")}>My Learning</a>
                                </li>
                                <li>
                                    <a>My Cart</a>
                                </li>
                                <li>
                                    <a>My Wishlist</a>
                                </li>
                                <li>
                                    {
                                        user && < button
                                            onClick={() => signOut(auth)}
                                            className="bg-gray-300 text-[#F53289] px-7 py-2 rounded-full"
                                        >
                                            Logout
                                        </button>
                                    }

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