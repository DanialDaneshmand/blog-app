'use client'
import React, { useState, useEffect } from 'react'
import Loading from '../../(postList)/loading';
import SubmitButton from '@/ui/SubmissionButton';
import TextArea from '@/ui/TextArea';
import { createComment } from '@/lib/actions';
import toast from 'react-hot-toast';
import { useFormState } from 'react-dom';

const initialState={
  error:"",
  message:""
}

function CommentForm({parentId,postId,onClose}) {
  const [text,setText]=useState("")
 const [state,formAction]= useFormState(createComment,initialState)
  // const createCommentWithData=createComment.bind(null,parentId,postId)
  useEffect(()=>{
    if(state?.message){
      toast.success(state?.message)
      onClose()
    }
    if(state?.error){
      toast.error(state?.error)
    }
  },[state])
  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form
            action={async( formData)=>{
              await formAction({formData,postId,parentId})
            }}
          >
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <div className="mt-8">
              {false ? (
                <div>
                  <Loading />
                </div>
              ) : (
                <SubmitButton type="submit" className="w-full">
                  {parentId ? "ثبت پاسخ" : "ثبت نظر"}
                </SubmitButton>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CommentForm
