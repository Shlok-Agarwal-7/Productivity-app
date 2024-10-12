import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useState } from "react";
import Calender from "./Calender";
import Projects from "./Projects";
import Tasks from "./tasks";

const DashBoard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col justify-around">
          {/* Page content here */}
          <div className="flex flex-col items-end dark">
            <label
              htmlFor="my-drawer-2"
              className="dark drawer-button lg:hidden"
            >
              <FaBars className="text-2xl mx-5 my-5" />
            </label>
          </div>
          <div className="dark justify-items-center">
          <Tasks/>
          </div>
        </div>
        <div className="drawer-side">
          <div className="h-full justify-around min-h-full light">
            <div className="flex justify-between items-center p-4">
              <img src={logo} alt="logo" className="h-10 w-10" />
              <label
                htmlFor="my-drawer-2"
                aria-label="close sidebar"
                className="drawer-overlay"
              >
                <IoMdClose className="text-2xl lg:hidden" />
              </label>
            </div>

            <ul className="menu text-base-content  w-80 p-4 light">
              {/* Sidebar content here */}
              <li>
                <a>Calender</a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
