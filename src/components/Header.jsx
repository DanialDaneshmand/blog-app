"use client";
import React, { useState } from "react";
import { FaHouse } from "react-icons/fa6";
import { FaLayerGroup } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import NavLink from "./NavLink";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { useUser } from "@/context/userContext";
import Link from "next/link";
import { HiOutlineUserCircle } from "react-icons/hi2";
const navlinks = [
  {
    id: 1,
    title: "خانه",
    path: "/",
    icon: <FaHouse />,
  },
  {
    id: 2,
    title: "بلاگ ها",
    path: "/blogs",
    icon: <FaLayerGroup />,
  },
];

function Header() {
  return (
    <header className=" flex justify-center shadow-lg  ">
      <Navbar navlinks={navlinks} />
    </header>
  );
}

export default Header;

function Navbar({ navlinks }) {
  const [isShow, setIsShow] = useState(false);
  const { user, isLoading } = useUser();
  
  

  return (
    <nav
        className={`relative     max-w-screen-lg w-full transition-all duration-200 ${
          isLoading ? " blur-sm opacity-70 " : " blur-0 opacity-100 "
        }`}
      // className="relative  max-w-screen-lg w-full"
    >
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
          <div>
            {user ? (
              <li className=" text-slate-400">
                <Link href="/profile" className="flex items-center gap-x-2 hover:text-slate-600">
                  <span>
                  <HiOutlineUserCircle className=" text-2xl"/>
                  </span>
                  <span>پروفایل</span>
                </Link>
              </li>
            ) : (
              <li className=" text-slate-400">
                <Link href="/signin" className="flex items-center gap-x-2">
                  <span>
                    <FaArrowRightToBracket />
                  </span>
                  <span>ورود</span>
                </Link>
              </li>
            )}
          </div>
        </ul>
      </div>
      {isShow && (
        <div className="md:hidden block top-0 right-0 h-screen fixed  backdrop-blur-sm bg-opacity-30 z-50 bg-slate-400 w-full">
          <div className=" bg-[#efefef] h-screen sm:w-64 p-4 fixed z-50 top-0 w-full bottom-0 flex items-start justify-between">
            <ul className=" flex flex-col-reverse ">
              <div className="flex gap-x-6 flex-col mt-8 gap-y-5">
                {navlinks.map((item) => (
                  <NavLink key={item.id} item={item} setIsShow={setIsShow} />
                ))}
              </div>
              <div>
                {user ? (
                  <li className=" text-slate-400">
                    <Link href="/profile" className="flex items-center gap-x-2 hover:text-slate-600">
                      <span>
                      <HiOutlineUserCircle className=" text-2xl"/>
                      </span>
                      <span>پروفایل</span>
                    </Link>
                  </li>
                ) : (
                  <li className="flex items-center gap-x-2 text-slate-400">
                    <Link href="/signin" className="flex items-center gap-x-2">
                      <span>
                        <FaArrowRightToBracket />
                      </span>
                      <span>ورود</span>
                    </Link>
                  </li>
                )}
              </div>
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
