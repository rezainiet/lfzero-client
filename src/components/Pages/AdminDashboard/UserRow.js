import React from "react";

const UserRow = ({ user }) => {
  const { name, email, phone, role, date } = user;
  return (
    <tr>
      {/* <th>1</th> */}
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{role}</td>
      <td>{date}</td>
      <td>
        {/* { role !== "admin" && ( */}
        <button
          className="btn btn-primary px-1 rounded text-white "
          style={{ backgroundColor: "#F53289" }}
        >
          Make Admin
        </button>
        {/* )} */}
      </td>
      <td>
        <button
          className="btn btn-primary px-1 rounded text-white"
          style={{ backgroundColor: "#F53289" }}
        >
          Remove User
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
