import Link from "next/link";
import React from "react";

async function CategoryList() {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  console.log(categories);

  return (
    <div className="xl:mb-0 mb-16">
      <ul className=" flex flex-col gap-y-4 text-slate-500">
        <li>
          <Link href="/blogs">همه</Link>
        </li>
        {categories.map((item) => (
          <li key={item._id}>
            <Link href={`/blogs/category/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
