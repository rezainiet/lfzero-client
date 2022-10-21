import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import bg from "../../../assets/images/unknown1.png";

// const Contact = () => {
//     return (
//     <div>
//             <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//         <div className='hidden sm:block'>
//             <img className='w-8/12 ml-48 object-cover' src={contUs} alt="" />
//         </div>
//         <div className=' flex flex-col justify-center'>
//             <form className='ml-12 max-w-[800px] w-full mx-auto rounded-lg bg-gradient-to-r from-indigo-500 via-purple-700 to-purple-900 bg-gradient-to-r hover:bg-gradient-to-l p-8 px-8'>
//                 <h2 className='text-4xl dark:text-white font-bold text-center'>Contact Us</h2>
//                 <div className='flex flex-col text-black py-2'>
//                     <label className='text-white'>Name</label>
//                     <input className='rounded-lg bg-gray-700 mt-2 p-2  focus:bg-white focus:outline-none' type="text" />
//                 </div>
//                 <div className='flex flex-col text-gray-800 py-2'>
//                     <label className='text-white'>Email</label>
//                     <input className='p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-white focus:outline-none' type="text" />
//                 </div>
//                 <div className='flex justify-between text-gray-400 py-4 p-2'>
//                     <p className='flex items-center'> <input className='placeholder-black font-normal text-base py-2.5 sm:py-[18px] px-[10px] rounded-lg max-w-[350px] sm:min-w-[290px] lg:w-[290px] outline-white' type='text' placeholder='Enter your message'></input> </p>
//                     <p></p>
//                 </div>
//                 <button className='w-80 my-5 py-2 bg-white shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-whit font-semibold rounded-lg'>Submit</button>
//             </form>
//         </div>
//     </div>

//     <div>
//     <iframe class="map"  width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Dhaka%20Bangladesh.%20mirpur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//     </div>

//     <div class="icons-container">

// <div class="icons">
//     <i class="fas fa-phone"></i>
//     <h3>our number</h3>
//     <p>+880-18917-50682</p>
//     <p>+880-15863-93242</p>
// </div>

// <div class="icons">
//     <i class="fas fa-envelope"></i>
//     <h3>our email</h3>
//     <p>masumarifingmail.com</p>
//     <p>alvinarifin61@gmail.com</p>
// </div>

// <div class="icons">
//     <i class="fas fa-map-marker-alt"></i>
//     <h3>our address</h3>
//     <p>mirpur, Dhaka, Bangladesh - 1216</p>
// </div>
// </div>
//     </div>
//     );
// };

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      swal({
        title: "Massage Sent Successfully!",
        text: "We will get back to you as soon as Possiable!",
        icon: "success",
      });
      navigate("/");
    }
  };
  return (
    <div className="">
      {/* className='bg-[url(https://www.tune.com/wp-content/themes/tune.com/img/desktop/hero/hero-contact-us.jpg?ver=1.1)] w-full bg-cover bg-center' */}
      <div
        class="py-28"
        bg-image
        style={{
          background: `url(${bg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "96",
        }}
        className="py-5 text-white"
      >
        <div className="lg:ml-28 py-10 ml-8">
          <h1 className="font-libreBasker font-medium text-6xl">Contact Us</h1>
          <h5 className="font-openSans font-medium text-xl py-5">
            {" "}
            <span className="font-montserrat font-light  text-xl">
              Education is also how you learn to change <br /> with time, so
              that you don’t miss <br /> what time has best to offer.
            </span>
          </h5>
        </div>
      </div>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mx-5 lg:pr-20">
            <div className="">
              <h1 className="font-libreBasker font-light text-4xl pb-3">
                Contact Us Now
              </h1>
              <p className="font-openSans font-light text-lg">
                Please get in touch and our expert support <br />
                team will answer all your questions.
              </p>
            </div>
            <div className="py-10">
              <p className="font-libreBasker font-light text-4xl pb-3">
                Address
              </p>
              <p className="font-openSans font-light text-lg">
                375 E 58th St Brooklyn, NY 11203, United States
              </p>
            </div>
            <div className="">
              <p className="font-libreBasker font-light text-4xl pb-3">
                Phone Number & Email
              </p>
              <p className="font-openSans font-light text-lg pb-1">
                +1 010 582 5006
              </p>
              <p className="font-openSans font-light text-lg">
                support@lfzero.com
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:pl-20 lg:pt-0 pt-20">
            <div className="card w-fit bg-white drop-shadow-2xl">
              <div className="card-body bg-gray-200 bg-opacity-50">
                <h2 className="text-center font-montserrat font-medium text-4xl text-gray-600">
                  Send a Message!
                </h2>
                <form onSubmit={handleSubmit} className="">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text text-base	font-medium text-gray-600">
                        Name
                      </span>
                    </label>
                    <input
                      type="name"
                      name="name"
                      placeholder="Enter Your Name"
                      className="input input-bordered  bg--700 mt-2 p-2  focus:bg-white focus:outline-none w-full"
                    />

                    <label className="label">
                      <span className="label-text text-base font-medium text-gray-600">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter Your Email"
                      className="input input-bordered input-success w-full  mt-2 p-2  focus:bg-white focus:outline-none"
                    />
                    <label className="label">
                      <span className="label-text text-gray-600 text-base font-medium">
                        Massage
                      </span>
                    </label>
                    <textarea
                      type="text"
                      name="message"
                      className="textarea textarea-success  mt-2 p-2  focus:bg-white focus:outline-none"
                      placeholder="Enter Your Massage"
                    ></textarea>
                  </div>
                  <input
                    className="btn mt-8 w-full  text-gray-600"
                    type="submit"
                    value="Send"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          title="google map"
          className="w-full px-28 mb-8"
          id="map_canvas"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746984.282909507!2d88.10070926145421!3d23.490589485108543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2z4Kas4Ka-4KaC4Kay4Ka-4Kam4KeH4Ka2!5e0!3m2!1sbn!2sbd!4v1665913663758!5m2!1sbn!2sbd"
          width="600"
          height="450"
        ></iframe>

        {/* <iframe className="bg-cover w-96 h-96"  id="gmap_canvas" src="https://maps.google.com/maps?q=Dhaka%20Bangladesh.%20mirpur&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> */}
      </div>

      {/* <div className="w-full"><div className="w-full"><iframe class="gmap_iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=1000&amp;height=500&amp;hl=en&amp;q=dhka, bangladesh&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div></div> */}
    </div>
  );
};

export default Contact;
