import React, { useEffect, useState } from "react";
import InstructorRow from "./InstructorRow";

const AllInstructor = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://lfzero.herokuapp.com/api/users`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, [users]);
  return (
    <div>
      <h2
        className=" text-center  p-10 pb-10 text-2xl font-bold text-purple-500"
        // style={{ color: "#5D10E3" }}
      >
        Instructor List
      </h2>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              {/* <th></th> */}
              <th className="text-purple-500 text-base normal-case">Name</th>
              <th className="text-purple-500 text-base normal-case">Email</th>
              <th className="text-purple-500 text-base normal-case">Phone</th>
              <th className="text-purple-500 text-base normal-case">Join</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <InstructorRow
                key={user._id}
                user={user}
                //    refetch={refetch}
              ></InstructorRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInstructor;
