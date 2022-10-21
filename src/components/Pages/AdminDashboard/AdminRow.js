import React from "react";

const AdminRow = ({ user }) => {
  const { name, email, phone, date, role } = user;

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
          >
            Remove Admin
          </button>
        </td>
      </tr>
    );
  }
};

export default AdminRow;
