"use client";

import useMoveBack from "@/hooks/useMoveBack";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div className=" w-full flex justify-center pt-32">
      <div>
        <p className=" text-slate-700 text-lg font-bold">
          صفحه ای که دنبالش بودید پیدا نشد !
        </p>
        <button className=" flex items-center gap-x-3 mt-4" onClick={moveBack}>
          <FaArrowRight className=" text-blue-600" />
          <span className=" text-slate-400">برگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
