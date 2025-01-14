import useOutsideClick from "@/hooks/useOutsideClick";
import React from "react";
import { createPortal } from "react-dom";
import { HiMiniXMark } from "react-icons/hi2";

function Modal({ onClose, children, open, title, description }) {
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <div className=" fixed  top-0 left-0 w-full right-0 flex items-center justify-center h-screen backdrop-blur-sm bg-opacity-30 z-50 bg-gray-700">
        <div
          ref={ref}
          className="   shadow-lg p-4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white transition-all duration-300 overflow-y-auto   w-full max-w-screen-sm"
        >
          <div className="border-b flex items-center justify-between py-2">
            <div>
              <p className="text-slate-600 font-bold text-base">{title}</p>
              <p className="text-slate-400 text-sm ">{description}</p>
            </div>
            <button onClick={onClose}>
              <HiMiniXMark />
            </button>
          </div>
          <div className=" py-4">{children}</div>
        </div>
      </div>,
      document.body
    )
  );
}

export default Modal;
