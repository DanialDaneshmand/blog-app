"use client"
import { HiMiniPlus, HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Button from "./Button";
import Link from "next/link";

export function CreatePost(id) {
  return (
    <Button classes=" mr-0 lg:mr-auto text-lg rounded-lg bg-blue-600 justify-between text-white flex items-center w-32 text-lg ">
      <span >ایجاد پست</span>
      <span><HiMiniPlus /></span>
    </Button>
  );
}

export function DeletePost(id) {
  return (
    <Button classes=" text-xl">
      <HiOutlineTrash />
    </Button>
  );
}

export function EditPost(id=1) {
  return (
    <Link href={`/profile/posts/edit`}>
      <Button classes=" text-xl">
        <HiOutlinePencil/>
      </Button>
    </Link>
  );
}
