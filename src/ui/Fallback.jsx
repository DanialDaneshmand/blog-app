import React from "react";
import SvgComponent from "./SvgComponent";

function Fallback() {
  return (
    <div className=" flex items-center gap-x-2">
      <span>درحال بارگذری اطلاعات</span>
      <span>
        <SvgComponent />
      </span>
    </div>
  );
}

export default Fallback;
