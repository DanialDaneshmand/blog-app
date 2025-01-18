import React, { Suspense } from "react";
import BlogList from "../_components/BlogList";
import LoadingSpinner from "@/ui/Loading";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";

async function Blogs({ searchParams }) {
  const queries = queryString.stringify(searchParams);
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const {posts} = await getPosts(queries, options);
  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        {posts.length === 0 ? (
          <p className=" text-slate-600">پستی در این دسته بندی یافت نشد .</p>
        ) : (
          <BlogList posts={posts} />
        )}
      </Suspense>
    </div>
  );
}

export default Blogs;
