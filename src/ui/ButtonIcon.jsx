import React from "react";

function ButtonIcon({ children, onClick ,className}) {
  return <button className={` text-sm flex items-center gap-x-1 rounded-md py-1 px-2 bg-slate-400 hover:bg-red-500 hover:text-4xl ${className}`}>{children}</button>;
}

export default ButtonIcon;
