"use server";

import { createCommentApi } from "@/services/commentServices";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const rawFormData = {
    parentId,
    postId,
    text: formData.get("text"),
  };
  const cookiesStore = cookies();
  const options = setCookieOnReq(cookiesStore);
  //   console.log(options);

  try {
    const { message } = await createCommentApi(rawFormData, options);
    revalidatePath("/blogs/*");
    return {
      message,
    };
  } catch (err) {
    const error = "کامنت را به درستی وارد کنید!";
    return{
        error
    }
  }
}
