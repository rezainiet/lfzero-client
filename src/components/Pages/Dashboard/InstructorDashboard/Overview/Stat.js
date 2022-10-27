import React from "react";
import studentIcon from "../../../../../assets/images/StatIcon/students.png";
import reveniewIcon from "../../../../../assets/images/StatIcon/business-and-finance.png";
import ratingIcon from "../../../../../assets/images/StatIcon/rating.png";
import courseIcon from "../../../../../assets/images/StatIcon/online-course.png";
const Stat = () => {
  return (
    <div className="my-28 mx-28">
      <div className="text-center ">
        <h2
          className="text-2xl font-bold uppercase mb-5 pb-5"
          style={{ color: "#5D10E3" }}
        >
          Instructor Overview
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-5">
          {/* Card - 1 */}
          <div className="card w-60 bg-base-100 shadow-xl">
            <figure className="pt-2">
              <img src={studentIcon} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Total Students</h2>
              <h2
                className="text-5xl font-semibold"
                style={{ color: "#5D10E3" }}
              >
                110
              </h2>
            </div>
          </div>

          {/* Card - 2
           */}

          <div className="card w-60  bg-base-100 shadow-xl">
            <figure className="pt-2">
              <img src={reveniewIcon} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Total Revnenue</h2>
              <h2
                className="text-5xl font-semibold"
                style={{ color: "#5D10E3" }}
              >
                $ 450
              </h2>
            </div>
          </div>

          {/* Card - 3 */}

          <div className="card  w-60 bg-base-100 shadow-xl">
            <figure className="pt-2">
              <img src={ratingIcon} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Average Rating</h2>
              <h2
                className="text-5xl font-semibold"
                style={{ color: "#5D10E3" }}
              >
                4.1
              </h2>
            </div>
          </div>

          {/* Card - 4 */}

          <div className="card w-60  bg-base-100 shadow-xl">
            <figure className="pt-2">
              <img src={courseIcon} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Total Course</h2>
              <h2
                className="text-5xl font-semibold"
                style={{ color: "#5D10E3" }}
              >
                3
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stat;
