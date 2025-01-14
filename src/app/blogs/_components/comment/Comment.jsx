import Image from "next/image";
import React from "react";
import { HiArrowUturnRight, HiOutlineUserCircle } from "react-icons/hi2";

function Comment({ comment ,onAddComment}) {

  return (
    <div className={` border rounded-xl p-4 ${!comment.openToComment&&"bg-gray-100"}`}>
      <div className="flex items-center justify-between border-b py-2">
        <div className=" flex items-center gap-x-2">
          <div>
            {comment.user.avatarUrl ? (
              <Image
                src={comment.user?.avatarUrl}
                width={40}
                height={40}
                className=" rounded-full ring-1 "
                alt={comment?.user?.name || "-"}
              />
            ) : (
              <span className="text-4xl">
                <HiOutlineUserCircle />
              </span>
            )}
          </div>
          <div className="text-sm w-full text-secondary-600">
            <span className="font-bold block mb-1">{comment.user.name}</span>
            <span className="block text-secondary-500 text-xs">
              {comment.createdAt}
            </span>
          </div>
        </div>
        <div>
          {comment.openToComment && (
            <button onClick={onAddComment} className=" py-2 flex items-center gap-x-2 text-sm px-2 rounded-lg  bg-[#efefef] text-slate-400">
              <span>
              <HiArrowUturnRight />
              </span>
              <span > پاسخ</span>
            </button>
          )}
        </div>
      </div>
      <p className="text-slate-600 mt-4 leading-loose lg:leading-8 text-xs lg:text-base">
        {comment.content.text}
      </p>
    </div>
  );
}

export default Comment;
