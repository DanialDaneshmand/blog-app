import BlogList from "@/app/blogs/_components/BlogList";
import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";
import queryString from "query-string";
import React from "react";

async function Category({ params, searchParams }) {
  const { categorySlug } = params;
  const queries =
    queryString.stringify(searchParams) + "&" + `categorySlug=${categorySlug}`;
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  const posts = await getPosts(queries, options);
  const { search } = searchParams;

  return (
    <div>
      {search&& search.length ? (
        <p className=" mb-4 text-slate-600">
          {posts.length === 0
            ? `هیچ پستی با این مشخصات پیدا نشد !`
            : `نشان دادن ${posts.length} نتیجه برای`}
          <span className=" font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}

      <BlogList posts={posts} />
    </div>
  );
}

export default Category;
