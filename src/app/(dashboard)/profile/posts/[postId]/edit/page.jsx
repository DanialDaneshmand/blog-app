import { getPostById } from "@/services/postServices";
import Breadcrumbs from "@/ui/Breadcrumbs";
import { notFound } from "next/navigation";
import React from "react";
import CreatePostPage from "../../create/_/components/CreatePostPage";

async function EditPage({ params: { postId } }) {
  const { post } = await getPostById(postId);
  console.log(post);

  if (!post) {
    notFound();
  }
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ویرایش پست",
            href: `/profile/posts/${2}/edit`,
            active: true,
          },
        ]}
      />
      <div className=" grid grid-cols-12 ">
        <div className=" col-span-12 md:col-span-6 rounded-lg bg-[#efefef] dark:bg-slate-600 p-4">
          <CreatePostPage postToEdit={post}/>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
