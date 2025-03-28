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
import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineUserCircle,
  HiXMark,
} from "react-icons/hi2";
import { useDarkMode } from "@/context/DarkModeContext";
import useOutsideClick from "@/hooks/useOutsideClick";
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
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const ref=useOutsideClick(()=>setIsShow(false))

  return (
    <nav
      className={` bg-[#efefef] dark:bg-slate-800  max-w-screen-lg w-full  ${
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
              <div className=" flex items-center gap-x-6">
                {isDarkMode ? (
                  <button
                    className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                    onClick={toggleDarkMode}
                  >
                    <HiOutlineSun />
                  </button>
                ) : (
                  <button
                    className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                    onClick={toggleDarkMode}
                  >
                    <HiOutlineMoon />
                  </button>
                )}
                <li className=" text-slate-400">
                  <Link
                    href="/profile"
                    className="flex items-center gap-x-2 hover:text-slate-600 hover:dark:text-slate-300"
                  >
                    <span>
                      <HiOutlineUserCircle className=" text-2xl" />
                    </span>
                    <span>پروفایل</span>
                  </Link>
                </li>
              </div>
            ) : (
              <div className=" flex items-center gap-x-6">
                {isDarkMode ? (
                  <button
                    className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                    onClick={toggleDarkMode}
                  >
                    <HiOutlineSun />
                  </button>
                ) : (
                  <button
                    className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                    onClick={toggleDarkMode}
                  >
                    <HiOutlineMoon />
                  </button>
                )}
                <li className=" text-slate-400">
                  <Link href="/signin" className="flex items-center gap-x-2 hover:text-slate-600 hover:dark:text-slate-300 ">
                    <span>
                      <FaArrowRightToBracket />
                    </span>
                    <span>ورود</span>
                  </Link>
                </li>
              </div>
            )}
          </div>
        </ul>
      </div>
      {isShow && (
        <div className=" block md:hidden backdrop-blur-sm bg-opacity-70 fixed top-0 left-0 w-screen  h-screen bg-gray-500 z-50">
          <div ref={ref} className=" bg-[#efefef] space-y-8 dark:bg-slate-700 h-screen w-full sm:w-[350px] py-4 px-8">
            <div className=" flex items-center justify-between">
              <div className=" flex items-center gap-x-10">
                {user ? (
                  <div className=" flex items-center gap-x-6">
                    {isDarkMode ? (
                      <button
                        className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                        onClick={toggleDarkMode}
                      >
                        <HiOutlineSun />
                      </button>
                    ) : (
                      <button
                        className=" text-2xl text-slate-400 hover:text-slate-500 hover:dark:text-slate-300"
                        onClick={toggleDarkMode}
                      >
                        <HiOutlineMoon />
                      </button>
                    )}
                    <span className=" text-slate-400">
                      <Link
                        href="/profile"
                        className="flex items-center gap-x-2 hover:text-slate-600 hover:dark:text-slate-300"
                      >
                        <span>
                          <HiOutlineUserCircle className=" text-2xl" />
                        </span>
                        <span>پروفایل</span>
                      </Link>
                    </span>
                  </div>
                ) : (
                  <div className=" flex items-center gap-x-6">
                    {isDarkMode ? (
                      <button
                        className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                        onClick={toggleDarkMode}
                      >
                        <HiOutlineSun />
                      </button>
                    ) : (
                      <button
                        className=" text-2xl text-slate-400   hover:text-slate-500 hover:dark:text-slate-300"
                        onClick={toggleDarkMode}
                      >
                        <HiOutlineMoon />
                      </button>
                    )}
                    <span className=" text-slate-400">
                      <Link
                        href="/signin"
                        className="flex items-center gap-x-2 hover:text-slate-600 hover:dark:text-slate-300"
                      >
                        <span>
                          <FaArrowRightToBracket />
                        </span>
                        <span>ورود</span>
                      </Link>
                    </span>
                  </div>
                )}
              </div>
              <div>
                <button onClick={()=>setIsShow(false)} className=" dark:text-slate-300">
                  <HiXMark />
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-y-6 ">
                {navlinks.map((item) => (
                  <NavLink key={item.id} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
