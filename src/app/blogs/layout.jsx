import React, { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import LoadingSpinner from "@/ui/Loading";

export const metadata = {
  title: "بلاگ ها",
};

function Layout({ children }) {
  return (
    <div className=" p-8">
      <p className="my-10">لیست بلاگ ها</p>
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
