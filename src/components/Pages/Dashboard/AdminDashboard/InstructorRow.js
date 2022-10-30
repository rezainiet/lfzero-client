import React from "react";
import { toast } from "react-toastify";

const InstructorRow = ({ user }) => {
  const { name, email, phone, date, role } = user;
  const removeInstructor = (email) => {
    fetch(`http://localhost:4000/api/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Student: ${name} is deleted.`);
        }
      });
  };
  if (role === "instructor") {
    //   let count = 0;
    return (
      <tr>
        {/* <th>{count++}</th> */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{date}</td>
        <td>
          {role === "admin" && (
            <button
              className="btn btn-primary px-1 rounded text-white"
              style={{ backgroundColor: "#F53289" }}
              onClick={() => {
                removeInstructor(user.email);
              }}
            >
              Remove User
            </button>
          )}
        </td>
      </tr>
    );
  }
};

export default InstructorRow;
