import React from "react";
import { BeatLoader } from "react-spinners";

function LoadingSpinner() {
  return (
    <div>
      <div className=" text-2xl text-slate-800 flex gap-x-3 items-center">
        <span className=" font-bold">در حال لود شدن </span>
        <BeatLoader color="blue" speedMultiplier={2} size={20} loading={true} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
