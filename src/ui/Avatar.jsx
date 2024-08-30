import Image from "next/image";
import React from "react";

function Avatar({item,width=24}) {
  return (
    <Image
      src={item.author.avatarUrl}
      width={width}
      height={width}
      className=" rounded-full ring-1 mb-32"
      alt={item.author.avatarUrl}
    />
  );
}

export default Avatar;
