"use server";

import { createCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, parentId, postId }) {
  const rawFormData = {
    text: formData.get("text"),
    postId,
    parentId,
  };
  // console.log(rawFormData);
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/[slug]");
    console.log(message);

    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    console.log(error);
    return {
      error,
    };
  }
}
