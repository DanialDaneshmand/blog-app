import { getPostBySlugApi } from "@/services/postServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetOnePost(){
    const {data,isLoading}=useQuery({
        queryKey:["post"],
        queryFn: getPostBySlugApi
    })

    return {data,isLoading}
}