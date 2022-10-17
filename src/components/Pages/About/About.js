import React from "react";
import man from "../../../assets/images/unknown.png";
import gp from "../../../assets/images/Screenshot_1.jpg";
import baby from "../../../assets/images/header_image_2x.png";
// import man1 from "../../../assets/images/man-1.png";
import Slider from "../About/Slider";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-2 items-center px-10 pb-48  bg-gradient-to-r from-indigo-500 via-purple-700 to-purple-900 bg-gradient-to-r hover:bg-gradient-to-l">
        <div>
          <h1 className=" text-white  px-28 ml- mt-8">
            <span className="text-[#f9f8fa] text-4xl ">
              Enhancing human potential <br />
              <span className="font-bold text-4xl">one learner at a time</span>
            </span>
            <br /> <br />
            LFZERO, is an innovative global edtech leader at the intersection of
            content, media and technology. From our beginnings in one classroom
            in Bengaluru, India, BYJU'S today has grown its presence to 100+
            countries across the world. As the trusted learning partner of 150+
            million students, we bring the future of education to the present
            through technology-enabled, personalized and engaging learning
            journeys. The companies under the BYJU'S Group serve a wide range of
            learners - from children at the start of their education to adults
            looking to upgrade their professional skills!
          </h1>
        </div>
        <div className="flex items-center justify-center ml-12">
          <div>
            <img className="mt-12 h-full w-3/6 " src={baby} alt="" />
          </div>
        </div>
      </div>

      {/* <div className='bg-[#f53289] myClipPath pb-20 pt-5'>
            <div  >     
                <h1 className='text-[#f9f8fa] text-2xl font-bold'>
<span className='text-[#f9f8fa] text-4xl font-bold p-4 '>I will learn, I will win</span><br /> <br />
LFZERO, Established in 2022, the most modern educational technology institute of Bangladesh.  <br /> With the help of experienced mentors and state-of-the-art technology <br /> to ensure quality education for all across the country, <br /> we have built a new world of easy learning and easy winning!</h1>
            </div>
            <div >
            <img className='h-96 w-96  rounded-lg shadow-2xl' src={baby} alt="" />
            </div>
    </div> */}
      <div className="grid grid-cols-1  lg:grid-cols-2 items-center justify-center my-16 gap-12 ml-16">
        <div className="flex items-center justify-center">
          <div>
            <img className="mt-24 w-7/9 h-full rounded" src={man} alt="" />
          </div>
        </div>

        <div>
          <h1 className="mr-24  text-black">
            <span className="font-bold text-4xl text-[#681EA5] ">
              our story{" "}
            </span>{" "}
            <br /> <br /> Information and technology have become an important
            part of our daily lives, but education still <br /> remains
            traditional. Lfzero feels now is the right time to revolutionize
            technology in Bangladesh's <br /> education sector. Our main aim is
            not only to modernize traditional education, but also to make
            available new learning techniques using modern technology and using
            the Internet to deliver <br /> quality education to all across the
            country. Each course is designed to be user-friendly,
            easy-to-understand and enjoyable, with the idea of ​​doing something
            new. By combining experienced <br /> teachers and state-of-the-art
            technology, we have developed an experience that will play an
            important role in improving the quality of education.
          </h1>
        </div>
      </div>
      <div className="mx-8 p-48 flex-col lg:flex-row-reverse ">
        <h1 className="mb-12 text-5xl text-[#681EA5] font-bold text-center">
          Our Foundation
        </h1>
        <img className="rounded-lg shadow-2xl" src={gp} alt="" />
      </div>
      <Slider></Slider>

      {/* <div className="grid grid-cols-1  lg:grid-cols-2 items-center px-10 pb-48  bg-gray-100 ">
        <div className="ml-">
          <h1 className="   px-28 ml- mt-8">
          <span className=' text-4xl '>Enhancing human potential <br />
<span className="font-bold text-4xl">one learner at a time</span></span><br /> <br />
LFZERO,  is an innovative global edtech leader at the intersection of content, media and technology. From our beginnings in one classroom in Bengaluru, India, BYJU'S today has grown its presence to 100+ countries across the world. As the trusted learning partner of 150+ million students, we bring the future of education to the present through technology-enabled, personalized and engaging learning journeys. The companies under the BYJU'S Group serve a wide range of learners - from children at the start of their education to adults looking to upgrade their professional skills!
          </h1>
        </div>
        <div className="flex items-center justify-center ml-12">
          <div >
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
