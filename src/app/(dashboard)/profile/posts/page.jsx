import React, { Suspense } from "react";
import PostsTable from "./_/components/PostsTable";
import Fallback from "@/ui/Fallback";
import Search from "@/ui/Search";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/postServices";

async function PostsPage({searchParams}) {
    const query=queryString.stringify(searchParams)
    const {totalPages}= await getPosts(query)
    
  return (
    <div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 mb-8 gap-y-4 lg:gap-y-0">
        <h1 className="text-slate-700 text-xl md:text-2xl font-bold">لیست پست ها</h1>
        <Search />
        <CreatePost />
      </div>
      <div >
      <Suspense fallback={<Fallback />}>
        <PostsTable queries={query}/>
      </Suspense>
      </div>
      <div className=" mt-5 flex justify-center w-full">
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}

export default PostsPage;
