import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const handleClickSubscribe = (event) => {
    event.preventDefault();
    toast.success("Thanks for subscribing!");
    event.target.field.value = "";
  };

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
            <Link className="text-white text-[14px] my-1" to="/privacyAndPolicy">
              Privacy & Policy
            </Link>
            <Link className="text-white text-[14px] my-1" to="/RefundPolicy">
              Refund Policy
            </Link>
          </div>
          <div className="flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-0">
              Resources
            </h4>
            <Link to="/blog" className="text-white text-[14px] my-1">
              Blog
            </Link>
            <Link to="/career" className="text-white text-[14px] my-1">
              Career
            </Link>
            <Link to="/support" className="text-white text-[14px] my-1">
              Support
            </Link>
            <Link to="/complain-box" className="text-white text-[14px] my-1">
              Complain Box
            </Link>
            <Link to="/success-story" className="text-white text-[14px] my-1">
              Success Story
            </Link>
            <Link to="/reviews" className="text-white text-[14px] my-1">
              Learner Feedback & Reviews
            </Link>
          </div>
          <div className="col-span-full lg:col-start-4 lg:col-end-6 flex flex-col">
            <h4 className="text-[#F53289] font-bold text-[22px] mb-1.5 lg:mb-[27px] mt-4 sm:mt-[28px] lg:mt-0">
              Subscribe
            </h4>
            <p className="text-white text-base mb-4">
              Subscribe to stay tuned for latest updates. Lets do it!
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2.5"
              onSubmit={handleClickSubscribe}
            >
              <input
                name="field"
                className="placeholder-gray-400 font-normal text-base py-2.5 sm:py-[18px] px-5 rounded-lg max-w-sm sm:min-w-[290px] lg:w-[290px] outline-white "
                type="email"
                placeholder="Enter your email Address"
              ></input>
              <button
                className="text-white bg-[#F53289] font-normal rounded-lg w-[132px] px-[18px] py-2.5 sm:py-[18px] cursor-pointer"
                type="submit"
                value="Subscribe"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <h1 className="text-white text-[16px] mt-5 lg:mt-[60px]">
          &#169; 2022 Learn From Zero, All Rights Reserved
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
