import React from "react";

function Card({icon,title,value}) {
  return (
    <div className=" border dark:border-slate-500 rounded-xl bg-white dark:bg-slate-500">
      <div className=" flex items-center dark:text-slate-500 gap-x-2 p-5 bg-slate-100 dark:bg-gray-400 rounded-t-xl">
        <span className=" text-xl">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <div className=" text-xl dark:text-slate-300 md:text-4xl text-slate-600 py-6 md:py-10 flex items-center justify-center">
        {value}
      </div>
    </div>
  );
}

export default Card;
