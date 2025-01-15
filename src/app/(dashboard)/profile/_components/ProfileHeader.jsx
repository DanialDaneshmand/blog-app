"use client";
import { useUser } from "@/context/userContext";
import Drawer from "@/ui/Drawer";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineBars4, HiOutlineUserCircle } from "react-icons/hi2";
import SideBar from "./SideBar";

function ProfileHeader() {
  const { user, isLoading } = useUser();
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className=" p-5 flex justify-between items-center">
      <button
        className=" text-slate-500 text-2xl block lg:hidden"
        onClick={() => setShowDrawer(!showDrawer)}
      >
        <HiOutlineBars4 />
      </button>
      <p className=" text-base  md:text-lg text-slate-600 font-bold ">
        <span>سلام ;</span>
        <span> {user?.name}</span>
      </p>
      <p>
        {user?.avatar ? (
          <Image
            src={user?.avatarUrl}
            width={40}
            height={40}
            className=" rounded-full ring-1 "
            alt={user?.name || "-"}
          />
        ) : (
          <span>
            <HiOutlineUserCircle className="h-8 w-8 text-slate-500" />
          </span>
        )}
      </p>
      <Drawer open={showDrawer} onClose={()=>setShowDrawer(false)}>
        <SideBar onClose={()=>setShowDrawer(false)}/>
      </Drawer>
    </div>
  );
}

export default ProfileHeader;
