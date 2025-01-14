"use client";

import React, { useState } from "react";
import Comment from "./Comment";
import Modal from "@/ui/Modal";
import CommentForm from "./CommentForm";
import { useUser } from "@/context/userContext";
import { useRouter } from "next/navigation";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import SvgComponent from "@/ui/SvgComponent";

function PostComments({ post: { comments, _id: postId } }) {
  const [parent, setParent] = useState(null);
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const router = useRouter();

  const handleAddNewComment = (parent) => {
    if (!user) {
      router.push("/signin");
      return;
    }
    setOpen(true);
    setParent(parent);
  };
  return (
    <div className=" py-10">
      <div className="w-full flex justify-between">
        <p className=" text-2xl font-bold text-slate-600">نظرات</p>
        <button
          onClick={() => handleAddNewComment(null)}
          className=" border border-slate-300 text-slate-400 rounded-lg py-2 px-4 text-sm flex items-center gap-x-2"
        >
          <span className="text-xl"> <HiOutlineQuestionMarkCircle/></span>
          <span>ثبت نظر جدید</span>
        </button>
        
      </div>
      <Modal onClose={() => setOpen(false)} title={parent?"پاسخ به نظر":"نظر جدید"} description={parent?parent.user.name:"نظر خود را وارد کنید"} open={open}>
        <CommentForm postId={postId} parentId={parent?parent._id:null} onClose={()=>setOpen(false)}/>
      </Modal>
      <div className="mt-10">
        {comments.length > 0 ? (
          <div className=" bg-white rounded-xl p-5">
            {comments.map((comment) => (
              <div key={comment._id}>
                <div className="mt-4">
                  <Comment
                    comment={comment}
                    onAddComment={() => handleAddNewComment(comment)}
                  />
                </div>
                {comment.answers.map((item) => (
                  <AnsweredComment key={item._id} item={item} />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <p className=" text-slate-500 ">نظری برای این پست وجود ندارد!</p>
        )}
      </div>
    </div>
  );
}

export default PostComments;

function AnsweredComment({ item }) {
  return (
    <div className="flex pr-6 ">
      <div className=" border-l-4 border-gray-300 rounded-full  "></div>
      <div className=" w-6   flex items-center">
        <div className="w-6  border-b-4 border-gray-300"></div>
      </div>
      <div className="w-full mt-4">
        <Comment comment={item} />
      </div>
    </div>
  );
}
