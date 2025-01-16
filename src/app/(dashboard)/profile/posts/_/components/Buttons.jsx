"use client"
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi2";
import Button from "./Button";
import Link from "next/link";

export function DeletePost(id) {
  return (
    <Button>
      <HiOutlineTrash />
    </Button>
  );
}

export function EditPost(id=1) {
  return (
    <Link href={`/profile/posts/edit`}>
      <Button>
        <HiOutlinePencil/>
      </Button>
    </Link>
  );
}
