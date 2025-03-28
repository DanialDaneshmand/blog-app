"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavlinkSideBar({item,onClose}) {
    const pathname=usePathname()
  return (
    <Link
    onClick={onClose}
      href={item.href}
      className={`${
        pathname === item.href
          ? " text-blue-700"
          : "text-slate-400 hover:text-slate-600 hover:dark:text-slate-300 "
      }`}
    >
      <p className={` flex items-center gap-x-2 `}>
        <span>{item.icon}</span>
        <span> {item.title}</span>
      </p>
    </Link>
  );
}

export default NavlinkSideBar;
