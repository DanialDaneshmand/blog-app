import { createCommentApi } from "@/services/commentServices";
import { createPostApi } from "@/services/postServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreateComment(){
    const queryClient=useQueryClient()

    const {isLoading:isCreating,mutate:createPost} =useMutation({
        mutationFn:createCommentApi,
        onSuccess:(data)=>{
            toast.success(data.message)
            queryClient.invalidateQueries({
                queryKey:["comments"]
            })
        },
        onError:(err)=>{
            toast.error(err?.response?.data?.message)
        }
    })

    return {isCreating,createPost}
}