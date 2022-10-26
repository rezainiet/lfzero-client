import React, { useEffect, useState } from "react";
import AddReview from "./AddReview";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  // console.log(reviews);
  return (
    <div className="my-28 mx-5 lg:mx-20">
      <div className="text-center ">
        <h2
          className="text-xl font-bold uppercase pb-5"
          style={{ color: "#5D10E3" }}
        >
          Learner Reviews & Feedback
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((review) => (
            <Review review={review}></Review>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
