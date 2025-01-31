"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPosts from "../_components/RelatedPosts";
import PostComments from "../_components/comment/PostComments";
import { getPostBySlug, getPosts } from "@/services/postServices";
import useGetOnePost from "@/hooks/useGetOnePost";
import { useEffect, useState } from "react";
import http from "@/services/httpServices";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const { posts } = await getPosts();
//   const slugs = posts.map((item) => {
//     slug: item.slug;
//   });
//   return slugs;
// }

// export async function generateMetadata({ params, searchParams }, parent) {
//   const post = await getPostBySlug(params.slug);

//   return {
//     title: post.title,
//   };
// }

function SinglePost({ params }) {
  // const post = await getPostBySlug(params.slug);
  // const {data,isLoading} = useGetOnePost();
  const [post, setPost] = useState();

  useEffect(() => {
    const getOnePost = async () => {
      try {
        const { data } = await http.get(`/post/slug/${params.slug}`);
        const { post } = data.data;
        console.log(post);
        setPost(post);
      } catch (error) {
        console.log(error?.response?.data?.message);
      }
    };
    getOnePost();
  }, []);
  return (
    post && (
      <div className="text-slate-500 max-w-screen-md mx-auto py-8 space-y-3">
        <h1 className="text-slate-700 text-xl sm:text-2xl font-bold">
          {post.title}
        </h1>
        <p className=" text-sm ">{post.briefText}</p>
        <p className=" text-sm ">{post.text}</p>
        <div className=" relative aspect-video overflow-hidden rounded-md mb-8">
          <Image
            className=" object-cover object-center hover:scale-110 transition-all duration-300"
            fill
            src={post.coverImageUrl}
          />
        </div>
        {post.related.length > 0 && <RelatedPosts posts={post.related} />}
        <PostComments post={post} />
      </div>
    )
  );
}

export default SinglePost;
