import React from "react";

function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto navbar bg-[#ffffff] p-4 rounded-md shadow">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">CS — Ticket System</a>
      </div>
      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 lg:flex lg:items-center lg:justify-center">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Download</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div className="">
          <button className="btn rounded text-white bg-gradient-to-r from-[#632ee3] to-[#9f62f2]">
            + New Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
