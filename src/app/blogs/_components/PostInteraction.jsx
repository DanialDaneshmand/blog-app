import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import React from "react";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineBookmark } from "react-icons/hi2";

function PostInteraction({ item }) {
  return (
    <div className="flex gap-x-2">
      <ButtonIcon className=" bg-slate-400">
        <HiOutlineChat />
        <span className=" text-xs">{toPersianNumbers(parseInt(item.commentsCount))}</span>
      </ButtonIcon>
      <ButtonIcon className='text-red-600'>
        <HiOutlineHeart />
      </ButtonIcon>
      <ButtonIcon className='text-blue-600'>
        <HiOutlineBookmark />
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
