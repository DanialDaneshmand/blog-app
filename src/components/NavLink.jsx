"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavLink({ item }) {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`${
        pathname === item.path
          ? " text-blue-700"
          : "text-slate-400 hover:text-slate-600 "
      }`}
    >
      <p className={` flex items-center gap-x-2 `}>
        <span>{item.icon}</span>
        <span> {item.children}</span>
      </p>
    </Link>
  );
}

export default NavLink;
