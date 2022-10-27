import React from "react";

const StudentRow = ({ user }) => {
  const { name, email, phone, date, role } = user;

  if (user.role === "student") {
    //   let count = 0;
    return (
      <tr>
        {/* <th>{count++}</th> */}
        <td>{name}</td>
        <td>Information about UI/UX design</td>
        <td>{email}</td>
        <td>{phone}</td>
      </tr>
    );
  }
};

export default StudentRow;
