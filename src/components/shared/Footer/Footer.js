import React from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-[#5D10E3]">
      <div className="pt-[51px] pb-[66px] px-5 2xl:px-0 max-w-7xl mx-auto">
        <div className="sm:grid grid-cols-3 lg:grid-cols-5">
          <div className="flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px]">
              <a href="/contact">Contact Us</a>
            </h4>

            <p className="text-white text-[14px] my-1" href="">
              Call:+880000000
            </p>
            <p className="text-white text-[14px] my-1" href="">
              Email: Support@LFZ.com{" "}
            </p>
            <p className="text-white text-[14px] my-1" href="">
              Address: 285, Dhanmondi-5,
              <br /> Dhaka , Bangladesh{" "}
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-0">
              Useful Links
            </h4>
            <a className="text-white text-[14px] my-1" href="/about">
              About Us
            </a>
            <a className="text-white text-[14px] my-1" href="/#">
              Mission & Vision{" "}
            </a>
            <a
              className="text-white text-[14px] my-1"
              href="/termsAndCondition"
            >
              Terms & Condition
            </a>
            <a className="text-white text-[14px] my-1" href="/privacyAndPolicy">
              Privacy & Policy
            </a>
            <a className="text-white text-[14px] my-1" href="/comlain">
              Your Complain
            </a>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-0">
              Resources
            </h4>
            <Link to="/blog" className="text-white font-[14px] my-1" href="">
              Blog
            </Link>
            <Link to="/career" className="text-white font-[14px] my-1" href="">
              Career
            </Link>
            <a className="text-white font-medium my-1" href="/support">
              Support
            </a>
          </div>
          <div className="col-span-full lg:col-start-4 lg:col-end-6 flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-[28px] lg:mt-0">
              Subscribe
            </h4>
            <p className="text-white text-base mb-4">
              Subscribe to stay tuned for latest updates. Lets do it!
            </p>
            <form className="flex flex-col sm:flex-row gap-2.5">
              <input
                className="placeholder-black font-normal text-base py-2.5 sm:py-[18px] px-[10px] rounded-lg max-w-[350px] sm:min-w-[290px] lg:w-[290px] outline-white"
                type="text"
                placeholder="Enter your email Address"
              ></input>
              <input
                className="text-white bg-[#F53289] font-normal rounded-lg w-[132px] px-[18px] py-2.5 sm:py-[18px] cursor-pointer"
                type="submit"
                value="Subscribe"
              ></input>
            </form>
          </div>
        </div>
        {/* social link */}
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between">
        <h1 className="text-white text-[16px] mt-5 lg:mt-[60px]">
          &#169; 2022 Learn From Zero, All Rights Reserved
        </h1>
        <div className="flex justify-center mt-5 lg:mt-[60px]">
          <a target="blank" className="text-white text-2xl px-4" href="https://www.facebook.com/">
            <FaInstagram/></a>
          <a target="blank" className="text-white text-2xl px-4" href="https://www.facebook.com/">
            <FaFacebook/></a>
          <a target="blank" className="text-white text-2xl px-4" href="https://www.facebook.com/">
            <FaTwitter/></a>
          <a target="blank" className="text-white text-2xl px-4" href="https://www.facebook.com/">
            <FaDiscord/></a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
