import Image from "next/image";
import Link from "next/link";
import React from "react";

function ImageCover({ item }) {
  return (
    <div className=" relative aspect-video overflow-hidden rounded-md">
      <Link href={`/blogs/${item.slug}`}>
        <Image
          className="mb-4 object-cover object-center hover:scale-110 transition-all duration-300"
          fill
          key={item._id}
          src={item.coverImageUrl}
          alt={item.title}
        />
      </Link>
    </div>
  );
}

export default ImageCover;
