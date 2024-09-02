import { getPostBySlug, getPosts } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getPosts();
  const slugs = posts.map((item) => {
    slug: item.slug;
  });
  return slugs;
}

export async function generateMetadata({ params, searchParams }, parent) {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title,
  };
}

async function SinglePost({ params }) {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const post = await getPostBySlug(params.slug);

  if (!post) notFound();
  return (
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
    </div>
  );
}

export default SinglePost;
