import React from "react";
import { toast } from "react-toastify";

const AdminRow = ({ user }) => {
  const { name, email, phone, date, role } = user;
  const removeAdmin = (email) => {
    fetch(`http://localhost:4000/api/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`Admin: ${name} is deleted.`);
        }
      });
  };
  if (user.role === "admin") {
    //   let count = 0;
    return (
      <tr>
        {/* <th>{count++}</th> */}
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{date}</td>
        <td>
          <button
            className="btn btn-primary p-2 px-5 rounded text-white"
            style={{ backgroundColor: "#F53289" }}
            onClick={() => {
              removeAdmin(email);
            }}
          >
            Remove Admin
          </button>
        </td>
      </tr>
    );
  }
};

export default AdminRow;
