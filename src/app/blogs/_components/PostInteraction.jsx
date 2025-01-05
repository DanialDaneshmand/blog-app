"use client";

import { bookmarkPostApi, likePostApi } from "@/services/postServices";
import ButtonIcon from "@/ui/ButtonIcon";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaBookmark, FaRegBookmark } from "react-icons/fa6";
import {  HiOutlineChat } from "react-icons/hi";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";

function PostInteraction({ item }) {
  const router = useRouter();
  const handleLike = async (postId) => {
    try {
      const { message } = await likePostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  const handleBookmark = async (postId) => {
    try {
      const { message } = await bookmarkPostApi(postId);
      toast.success(message);
      router.refresh();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="flex gap-x-2">
      <ButtonIcon classes=" bg-slate-200 hover:bg-slate-400">
        <HiOutlineChat />
        <span className=" text-xs">
          {toPersianNumbers(parseInt(item.commentsCount))}
        </span>
      </ButtonIcon>
      <ButtonIcon
        classes="text-red-600 bg-red-100 hover:bg-red-400"
        OnClick={() => handleLike(item._id)}
      >
        {item.isLiked ? <HiHeart /> : <HiOutlineHeart />}
      </ButtonIcon>
      <ButtonIcon
        OnClick={() => handleBookmark(item._id)}
        classes="text-blue-600 bg-blue-100 hover:bg-blue-400"
      >
        {item.isBookmarked ? <FaBookmark /> : <FaRegBookmark />}
        
      </ButtonIcon>
    </div>
  );
}

export default PostInteraction;
