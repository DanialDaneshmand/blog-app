import React from "react";

function Card({icon,title,value}) {
  return (
    <div className=" border rounded-xl bg-white">
      <div className=" flex items-center gap-x-2 p-5 bg-slate-100 rounded-t-xl">
        <span className=" text-xl">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <div className=" text-xl md:text-4xl text-slate-600 py-6 md:py-10 flex items-center justify-center">
        {value}
      </div>
    </div>
  );
}

export default Card;
