import React from "react";
import ImageCover from "./ImageCover";
import Link from "next/link";
import Author from "../_components/Author";
import PostInteraction from "./PostInteraction";


async function BlogList({posts}) {

  

  return (
    <div className="mb-16 xl:mb-0 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      { posts.map((item) => (
        <div
          key={item._id}
          className=" rounded-lg p-2  border border-slate-300"
        >
          <div>
            <ImageCover item={item} />
          </div>
          <div className="my-4 font-bold text-slate-600">
            <Link href={`/blogs/${item.slug}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>
          <Author item={item} />
          <PostInteraction item={item} />
        </div>
      ))}
    </div>
  );
}

export default BlogList;
