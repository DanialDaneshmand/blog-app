import Breadcrumbs from "@/ui/Breadcrumbs";
import React from "react";

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
      <h1 className="text-secondary-700 font-bold text-2xl mb-6">
        ایجاد پست جدید
      </h1>
      {/* <CreatePostForm /> */}
    </div>
  );
}

export default Create;
