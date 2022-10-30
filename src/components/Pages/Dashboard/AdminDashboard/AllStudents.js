import React, { useEffect, useState } from "react";
import StudentRow from "./StudentRow";
const AllStudents = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = `https://api-lfzero.vercel.app/api/users`;
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
        Students List
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
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
              <StudentRow
                key={user._id}
                user={user}
              //    refetch={refetch}
              ></StudentRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllStudents;
