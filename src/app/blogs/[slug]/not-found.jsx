"use client";

import Link from "next/link";

function NotFound() {
  return (
    <div className=" w-full flex justify-center pt-32">
      <div>
        <p className=" text-red-500 text-lg font-bold">
          پستی با این مشخصات پیدا نشد !
        </p>
        <Link href="/blogs" className=" text-sm text-slate-500 mt-4 block">
          رفتن به صفحه پست ها؟
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
