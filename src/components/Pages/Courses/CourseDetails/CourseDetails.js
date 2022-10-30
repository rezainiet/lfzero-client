import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const url = `https://api-lfzero.vercel.app/api/courses/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [id]);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  if (message.length > 3) {
    return <p>{message}</p>;
  }

  const handleSubmitOrder = (price) => {
    const url = `https://api-lfzero.vercel.app/create-checkout-session`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({ PRICE_ID: "pr_", price }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
      });
  };
  return (
    <div>
      <div className="mx-5 my-20 flex">
        <div>
          <div className="inline-block w-5/6 items-center">
            {/* Content here */}

            <div className="bg-gray-500 bg-opacity-20 rounded-2xl py-3 px-3 flex items-center">
              <img
                src="https://img.icons8.com/fluency/48/000000/teacher.png"
                alt="tutor icon"
              />
              <div className="ml-2">
                <p className="text-gray-800 text-lg font-bold">
                  {course?.instructor}
                </p>
                <p className="text-sm text-gray-500 font-semibold -mt-2">
                  Course Tutor
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://img.icons8.com/fluency/48/000000/plus-2-math.png"
                  alt="plus"
                  className="ml-20"
                />
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold my-5">{course?.name}</h2>
              <p className="text-gray-400 my-5">{course?.description}</p>
            </div>

            <div>
              <p className="my-5 text-xl">
                <span className="font-semibold">Course</span> Details
              </p>
              <div className="bg-green-200 bg-opacity-30 px-3 py-2 rounded-xl mb-2">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="inline-block bg-green-500 rounded">
                      <p className="py-1 px-4 text-white">1</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">Course Content</p>
                      <p className="-mt-1 text-sm text-gray-500">
                        500 hours + Length
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-red-200 bg-opacity-30 px-3 py-2 rounded-xl mb-2">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="inline-block bg-red-500 rounded">
                      <p className="py-1 px-4 text-white">2</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">Total quiz</p>
                      <p className="-mt-1 text-sm text-gray-500">
                        120+ Quizzes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 bg-opacity-30 px-3 py-2 rounded-xl mb-2">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="inline-block bg-gray-500 rounded">
                      <p className="py-1 px-4 text-white">3</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">Total Assignment</p>
                      <p className="-mt-1 text-sm text-gray-500">
                        12 Assignment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          {/* Course image here */}
          <img
            src="https://cdn.dribbble.com/users/4678459/screenshots/15331994/media/23c45a26f0cadd83d316bb8333db8d9a.png"
            width={500}
            alt=""
          />

          <button
            className="bg-[#F53289] text-white px-7 py-2 rounded-full mt-5"
            onClick={() => handleSubmitOrder(course.price)}
          >
            Enroll Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
