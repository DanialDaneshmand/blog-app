"use client";
import React, { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const navlinks = [
    {
      id: 1,
      children: "خانه",
      path: "/",
      icon: <FaHouse />,
    },
    {
      id: 2,
      children: "بلاگ ها",
      path: "/blogs",
      icon: <FaLayerGroup />,
    },
  ];
  return (
    <header className=" flex justify-center shadow-lg ">
      <Navbar navlinks={navlinks} />
    </header>
  );
}

export default Header;

function Navbar({ navlinks }) {
  const [isShow, setIsShow] = useState(false);
  return (
    <nav className="relative  max-w-screen-lg w-full">
      <button
        className=" text-slate-400 md:hidden block m-4  md:m-0"
        onClick={() => setIsShow(!isShow)}
      >
        <FaBars />
      </button>
      <div className="md:block hidden py-2">
        <ul className=" flex justify-between p-4">
          <div className="flex gap-x-6">
            {navlinks.map((item) => (
              <NavLink key={item.id} item={item} />
            ))}
          </div>
          <li className="flex items-center gap-x-2 text-slate-400">
            <span>
              <FaArrowRightToBracket />
            </span>
            <span>ورود</span>
          </li>
        </ul>
      </div>
      {isShow && (
        <div className="md:hidden block top-0 right-0 h-screen absolute  backdrop-blur-sm bg-opacity-30 z-50 bg-slate-400 w-full">
          <div className=" bg-[#efefef] h-screen sm:w-64 p-4 flex items-start justify-between">
            <ul className=" flex flex-col-reverse ">
              <div className="flex gap-x-6 flex-col mt-8 gap-y-5">
                {navlinks.map((item) => (
                  <NavLink key={item.id} item={item} />
                ))}
              </div>
              <li className="flex items-center gap-x-2 text-slate-400">
                <span>
                  <FaArrowRightToBracket />
                </span>
                <span>ورود</span>
              </li>
            </ul>
            <button
              className=" text-slate-400"
              onClick={() => setIsShow(!isShow)}
            >
              <FaXmark />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
