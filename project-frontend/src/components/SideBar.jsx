import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  console.log("location", location);
  const isActive = (path) => location.pathname === path;


  return (
    <div className="w-1/5 bg-gray-700 flex items-center translate-x-[-100%] md:translate-x-0 ">
      <ul className="space-y-4 p-4 w-full h-fit ">
        <li>
          <Link
            to="/"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Dashboard Overview</span>
          </Link>
        </li>
        <li>
          <Link
            to="/interactions"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/interactions")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Interactions Management</span>
          </Link>
        </li>
        <li>
          <Link
            to="/complaint-handling"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/complaint-handling")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Complaint Handling</span>
          </Link>
        </li>
        <li>
          <Link
            to="/customer-management"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/customer-management")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Customer Management</span>
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/notifications")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Notification Center</span>
          </Link>
        </li>
        <li>
          <Link
            to="/activity-log"
            className={`flex items-center p-2 rounded gap-3 text-white ${
              isActive("/activity-log")
                ? "bg-orange-500 font-semibold"
                : "hover:font-semibold"
            }`}
          >
            <span>Activity Log</span>
          </Link>
        </li>

       
      </ul>
    </div>
  );
};

export default SideBar;
