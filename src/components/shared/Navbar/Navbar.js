import React from 'react';
import logo from './../../../assets/icons/logo.png'

const Navbar = () => {
    return (
        <div className='bg-[#5D10E3] px-20'>
            <div className='flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto'>
                {/* Logo */}
                <div className="text-lg font-bold uppercase text-white">
                    <img src={logo} alt="logo" width={75} />
                </div>

                {/* Hamburger */}
                <input className='peer hidden' type="checkbox" name="hamburger" id="hamburger" />
                <label htmlFor="hamburger" className='peer-checked:hamburger block relative cursor-pointer lg:hidden border-2 border-gray-300 peer-checked:border-2
                 peer-checked:border-white p-3 rounded-md transition-all'>
                    <div className="m-auto w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div>
                    <div className="m-auto mt-2 w-6 h-1 rounded bg-gray-300 transition-all duration-300"></div>
                </label>

                {/* Menu navbar */}
                <div className="-translate-y-full lg:-ml-20 peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out">

                    <div className='bg-white text-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 
                    lg:space-y-0 lg:space-x-3 '>

                        <a href="#">Category</a>
                        <a href="#">Organization</a>
                        <a href="#">Courses</a>
                    </div>
                </div>
                <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out">

                    <div className='bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 
                    lg:space-y-0 lg:space-x-3'>

                        <input type="text" className='outline-none py-1 px-5 w-96 rounded-xl focus:ring-1 focus:ring-pink-500' placeholder='Search' />
                    </div>
                </div>
                <div className="-translate-y-full peer-checked:translate-y-0 lg:translate-y-0 inset-0 fixed lg:static pt-20 lg:pt-0 bg-white lg:bg-transparent
                 -z-10 lg:z-10 lg:h-auto lg:w-auto transition-all duration-300 ease-in-out">

                    <div className='bg-white shadow-md lg:bg-transparent lg:shadow-none py-10 lg:py-0 flex flex-col lg:items-center lg:flex-row px-6 space-y-4 
                    lg:space-y-0 lg:space-x-3'>

                        <button className='bg-white text-[#F53289] px-7 py-2 rounded-full'>Login</button>
                        <button className='bg-[#F53289] text-white px-7 py-2 rounded-full'>Registration</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;