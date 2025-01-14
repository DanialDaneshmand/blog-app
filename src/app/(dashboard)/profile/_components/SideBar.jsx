import Link from "next/link";
import React from "react";
import { HiOutlineDocumentText } from "react-icons/hi";
import {
  HiMiniXMark,
  HiOutlineArrowLeftStartOnRectangle,
  HiOutlineChatBubbleLeft,
  HiOutlineHome,
  HiOutlineRectangleGroup,
  HiOutlineSquares2X2,
  HiOutlineUsers,
} from "react-icons/hi2";
import NavlinkSideBar from "./NavlinkSideBar";

const sidebarNavs = [
  {
    id: 1,
    title: "داشبورد",
    icon: <HiOutlineRectangleGroup className="w-5 h-5" />,
    href: "/profile",
  },

  {
    id: 2,
    title: "پست ها",
    icon: <HiOutlineDocumentText className="w-5 h-5" />,
    href: "/profile/posts",
  },
  {
    id: 3,
    title: "نظرات",
    icon: <HiOutlineChatBubbleLeft className="w-5 h-5" />,
    href: "/profile/comments",
  },
  {
    id: 4,
    title: "دسته بندی ها",
    icon: <HiOutlineSquares2X2 className="w-5 h-5" />,
    href: "/profile/categories",
  },
  {
    id: 5,
    title: "کاربران",
    icon: <HiOutlineUsers className="w-5 h-5" />,
    href: "/profile/users",
  },
];

function SideBar({ onClose }) {
  return (
    <div className=" w-full">
      <div className=" border-b  pb-3 flex justify-between  lg:justify-center">
        <Link
          className="flex text-slate-400 hover:text-slate-600 items-center gap-x-2"
          href="/"
        >
          <span className=" text-2xl">
            <HiOutlineHome />
          </span>
          <span>نکست بلاگ</span>
        </Link>
        <button
          onClick={onClose}
          className=" block lg:hidden text-slate-400 hover:text-slate-600 text-xl"
        >
          <HiMiniXMark />
        </button>
      </div>
      <div className="flex flex-col gap-y-8 pt-8">
        {sidebarNavs.map((item) => (
          <NavlinkSideBar key={item.id} item={item} />
        ))}
        <button
          className=" hover:text-slate-600 flex items-center gap-x-2 text-slate-400"
          href="/"
        >
          <span>
            <HiOutlineArrowLeftStartOnRectangle className=" h-5 w-5" />
          </span>
          <span>خروج</span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
