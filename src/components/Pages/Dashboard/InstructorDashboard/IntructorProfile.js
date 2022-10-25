import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IntructorProfile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const url = `http://localhost:4000/api/users${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return (
    <div className="card lg:max-w-2/3 mx-28 my-28  px-28 py-28 bg-base-100 shadow-xl">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 pb-4">
        <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt-F5GQg8qB2fWquF1ltQvAT2Z8Dv5pJLb9w&usqp=CAU"
            width="200px"
            alt=""
          ></img>
        </div>
        <div>
          <p className="text-purple-500 text-md font-bold normal-case">
            User Name :
          </p>
          {/* <p>{user.name}</p> */}
          <p> Maisha Maliha Chowa</p>
          <p className="text-purple-500 text-md font-bold normal-case">
            {" "}
            User Email
          </p>
          {/* <p>{user.email}</p> */}
          <p>maisha.chowa@gmail.com</p>
          <p className="text-purple-500 text-md font-bold normal-case">
            User Phone
          </p>
          {/* <p>{user.phone}</p> */}
          <p>017000000</p>
        </div>
      </div>

      <div className="card-body">
        <div className="card-actions justify-end">
          <button
            className="btn bg-purple-500 border-none text-white"
            onClick={() => navigate("/editProfile")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntructorProfile;
