import React from "react";

const RecommendCourse = ({ recommendCourse }) => {
  const { _id, name, img } = recommendCourse;
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl pb-5 rounded">
      <div className="flex">
        <figure className=" flex-1 p-5 ">
          <img src={img} alt="Course" width="100px" height="70px" />
        </figure>
        <div className=" flex-2 text-start p-5">
          <h2 className="text-start">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default RecommendCourse;
