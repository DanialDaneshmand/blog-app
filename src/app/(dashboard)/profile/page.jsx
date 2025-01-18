import React, { Suspense } from "react";
import PostsTable from "./posts/_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import Cards from "./_components/Cards";

async function Profile() {
  return (
    <>
      <p className=" text-xl text-slate-700 mb-5"> داشبورد</p>

      <Suspense fallback={<Fallback />}>
        <Cards />
      </Suspense>
      <div className="mt-10">
        <p className=" text-xl text-slate-700 my-4">اخرین پست ها</p>
        <Suspense fallback={<Fallback />}>
          <PostsTable queries="sort=latest&limit=5" />
        </Suspense>
      </div>
    </>
  );
}

export default Profile;
