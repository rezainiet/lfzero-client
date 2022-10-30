import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../../firebase.init";

const UserRow = ({ user, refetch }) => {
  const { name, email, phone, role, date } = user;

  const makeAdmin = () => {
    fetch(`http://localhost:4000/api/users/${email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "React PUT Request Example" }),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to Make an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          // refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };

  const removeUser = (email) => {
    fetch(`http://localhost:4000/api/users/${email}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success(`User: ${name} is deleted.`);
        }
      });
  };
  return (
    <tr>
      {/* <th>1</th> */}
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
      <td>{role}</td>
      <td>{date}</td>
      <td>
        {role === "admin" && (
          <button
            className="btn btn-primary px-1 rounded text-white "
            onClick={makeAdmin}
            style={{ backgroundColor: "#F53289" }}
          >
            Make Admin
          </button>
        )}
      </td>
      <td>
        {role === "admin" && (
          <button
            className="btn btn-primary px-1 rounded text-white"
            style={{ backgroundColor: "#F53289" }}
            onClick={() => {
              removeUser(email);
            }}
          >
            Remove User
          </button>
        )}
      </td>
    </tr>
  );
};

export default UserRow;
