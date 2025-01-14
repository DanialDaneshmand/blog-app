import Image from "next/image";
import React from "react";

function Avatar({alt,src,width=24}) {
  return (
    <Image
      src={src}
      width={width}
      height={width}
      className=" rounded-full ring-1 mb-32"
      alt={alt}
    />
  );
}

export default Avatar;
