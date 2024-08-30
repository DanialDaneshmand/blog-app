import React, { Suspense } from "react";
import BlogList from "./_components/BlogList";
import LoadingSpinner from "@/ui/Loading";

async function Blogs() {
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <BlogList />
      </Suspense>
    </div>
  );
}

export default Blogs;
