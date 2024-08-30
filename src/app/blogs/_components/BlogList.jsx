import React from "react";
import ImageCover from "./ImageCover";
import Link from "next/link";
import Image from "next/image";
import Author from "./Author";

async function BlogList() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  console.log(posts);

  return (
    <div className="mb-16 xl:mb-0 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
      {posts.map((item) => (
        <div className=" rounded-lg p-2  border border-slate-300">
          <div>
            <ImageCover key={item._id} item={item} />
          </div>
          <div className="my-4 font-bold text-slate-600">
            <Link href={`/blogs/${item.slug}`}>
              <h2>{item.title}</h2>
            </Link>
          </div>
          <Author item={item}/>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
