import React from "react";
import { toast } from "react-toastify";

const StudentRow = ({ user }) => {
  const { name, email, phone, date, role } = user;
  console.log("studentrow", user);
  const removeStudent = (email) => {
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
  if (role === "student") {
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
                removeStudent(email);
              }}
            >
              Remove Student
            </button>
          )}
        </td>
      </tr>
    );
  }
};
export default StudentRow;
