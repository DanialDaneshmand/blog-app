import React, { Suspense } from "react";
import CategoryList from "../_components/CategoryList";
import LoadingSpinner from "@/ui/Loading";
import Search from "@/ui/Search";

export const metadata = {
  title: "بلاگ ها",
};

function Layout({ children }) {
  return (
    <div className=" p-8">
      <div className=" my-10 grid grid-cols-1 sm:grid-cols-3 w-full ">
        <div className="">
          <p>لیست بلاگ ها</p>
        </div>
        <div className=" ">
          <Search />
        </div>
        <div></div>
      </div>
      <div className=" grid grid-cols-12">
        <div className="  col-span-12 lg:col-span-4 xl:col-span-3">
          <Suspense fallback={<LoadingSpinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="  col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
