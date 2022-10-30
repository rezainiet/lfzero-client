import React from "react";

const Review = ({ review }) => {
  const { _id, name, img, text, info } = review;
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl pb-5 rounded">
      <div className="grid grid-cols-6 gap-4 p-4">

        <div className="avatar">
          <div className="w-24 rounded-full">
            <img src={img} />
          </div>
        </div>

        {/* <img src={img}></img> */}
        <p
          className="col-end-8 col-span-6 text-xs text-start"
          style={{ color: "#F48C08" }}
        >
          {name} <br />
          {info}
        </p>
      </div>
      <p className="px-5 pb-2 text-xs text-start">{text}</p>
    </div>
  );
};

export default Review;
