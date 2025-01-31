"use client"
import { createComment } from "@/lib/actions";
import Button from "@/ui/Button";
import SvgComponent from "@/ui/SvgComponent";
import TextArea from "@/ui/TextArea";
import React, { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

function CommentForm({ parentId, postId, onClose }) {
  const [text, setText] = useState("");
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createComment, initialState);
  useState(() => {
    console.log(state);

    if (state?.message) {
      toast.success(state.message);
      console.log(state.message,"danial");

      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);
  
  return (
    <div className=" py-5">
      <form
        action={async (formData) => {
          await formAction({ formData, parentId, postId });
        }}
        className=" space-y-5"
      >
        <TextArea
          label="متن نظر"
          name="text"
          isRequired
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        {false ? (
          <div className=" flex items-center gap-x-4">
            <Button
              onClick={onClose}
              classes=" bg-blue-600 text-white py-2 px-5 rounded-lg"
              pending={pending}
            >
              {parentId ? "ثبت پاسخ" : "ثبت نظر"}
            </Button>
            <span>
              <SvgComponent />
            </span>
          </div>
        ) : (
          <Button
            classes=" bg-blue-600 text-white py-2 px-5 rounded-lg"
            pending={pending}
          >
            {parentId ? "ثبت پاسخ" : "ثبت نظر"}
          </Button>
        )}
      </form>
    </div>
  );
}

export default CommentForm;
