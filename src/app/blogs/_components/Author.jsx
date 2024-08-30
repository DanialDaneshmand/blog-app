import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";


function Author({ item }) {
  return (
    <div className=" flex justify-between my-2 items-center">
      <div className=" flex items-center gap-x-2">
        <Image
          src={item.author.avatarUrl}
          width={24}
          height={24}
          className=" rounded-full ring-1 "
          alt={item.author.avatarUrl}
        />
        <span className=" text-sm text-slate-500">{item.author.name}</span>
      </div>
      <div className=" flex items-center text-sm text-slate-500">
        <span className="ml-1">
          <FaRegClock />
        </span>
        <span>خواندن :</span>
        <span>{item.readingTime}</span>
        <span>دقیقه</span>
      </div>
    </div>
  );
}

export default Author;
