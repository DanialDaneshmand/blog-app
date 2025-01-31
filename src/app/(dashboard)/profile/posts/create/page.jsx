import Breadcrumbs from "@/ui/Breadcrumbs";
import React from "react";
import { useForm } from "react-hook-form";
import CreatePostPage from "./_/components/CreatePostPage";
function Create() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ایجاد پست",
            href: `/profile/posts/create`,
            active: true,
          },
        ]}
      />
      <h1 className="text-slate-700 font-bold text-2xl mb-6">ایجاد پست جدید</h1>
      <div className=" grid grid-cols-12">
        <div className=" col-span-12 md:col-span-6 rounded-lg bg-[#efefef] p-4">
          <CreatePostPage />
        </div>
      </div>
    </div>
  );
}

export default Create;
