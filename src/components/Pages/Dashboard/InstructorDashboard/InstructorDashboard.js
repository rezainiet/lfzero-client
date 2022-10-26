import React from "react";
import { Link, Outlet } from "react-router-dom";

const InstructorDashboard = () => {
  return (
    <div class="drawer drawer-mobile">
      <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        {/* <h2 className="text-2xl font-bold text-purple-500">
      Welcome to your Dashboard
    </h2> */}
        <Outlet></Outlet>
      </div>
      <div class="drawer-side">
        <label for="dashboard-sidebar" class="drawer-overlay"></label>
        <ul class="menu p-5 overflow-y-auto w-48 bg-purple-500 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li className="text-white text-lg normal-case">
            <Link to="/instructor-dashboard">Overview</Link>
          </li>
          <li className="text-white text-lg normal-case">
            <Link to="/instructor-dashboard/Profile">My Profile</Link>
          </li>
          <li className="text-white text-lg normal-case">
            <Link to="/instructor-dashboard/upload-course">Upload Course</Link>
          </li>
          <li className="text-white text-lg normal-case">
            <Link to="/instructor-dashboard/all-student">All Students</Link>
          </li>
          {/* {admin && ( */}
          {/* <li>
        <Link to="/admin-dashboard/users">All Users</Link>
      </li> */}
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default InstructorDashboard;
