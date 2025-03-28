import Image from "next/image";
import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlineUserCircle } from "react-icons/hi2";

function Author({ item }) {
  return (
    <div className=" dark:text-slate-400 flex justify-between my-2 items-center">
      <div className=" flex items-center gap-x-2">
        <div>
          {item.author.avatarUrl ? (
            <Image
              src={item.author?.avatarUrl}
              width={40}
              height={40}
              className=" rounded-full ring-1 "
              alt={item?.author?.name || "-"}
            />
          ) : (
            <span className="text-4xl">
              <HiOutlineUserCircle />
            </span>
          )}
        </div>
        <span className=" text-sm text-slate-500 dark:text-slate-400">{item.author.name}</span>
      </div>
      {item.readingTime && (
        <div className=" flex dark:text-slate-400 items-center text-sm text-slate-500">
          <span className="ml-1">
            <FaRegClock />
          </span>
          <span>خواندن :</span>
          <span>{item.readingTime}</span>
          <span>دقیقه</span>
        </div>
      )}
    </div>
  );
}

export default Author;
