import React from "react";
import SideBar from "./profile/_components/SideBar";
import ProfileHeader from "./profile/_components/ProfileHeader";

function Layout({ children }) {
  // const {user,isLoading}=useUser()
  return (
    <div className="  h-screen">
      <div className=" grid h-full  grid-cols-12  w-full ">
        <div className=" col-span-2 dark:bg-slate-800 hidden lg:block p-5 text-slate-500">
          <SideBar/>
        </div>
        <div className="col-span-12 lg:col-span-10">
          <ProfileHeader/>
          <div className="bg-slate-200 h-full lg:rounded-tr-xl p-8 dark:bg-slate-700">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
