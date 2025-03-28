"use server"

import { getAllUsersApi } from "@/services/authServices";
import { getAllCommentsApi } from "@/services/commentServices";
import { getAllPostsApi, getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";


export async function fetchCardData() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const data = await Promise.all([
      getAllUsersApi(options),
      getPosts(), 
      getAllCommentsApi(options),
    ]);

    

    const numberOfUsers = Number(data[0].users.length ?? "0");
    const numberOfPosts = Number(data[1].posts.length ?? "0");
    const numberOfComments = Number(data[2].commentsCount ?? "0");

    

    return {
      numberOfPosts,
      numberOfUsers,
      numberOfComments,
    };
  } catch (error) {
    console.error("خطا", error?.response?.data?.message);
    throw new Error("خطا در بارگذاری اطلاعات");
  }
}


