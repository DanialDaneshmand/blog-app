import React from "react";

function Drawer({ open, children, onClose }) {
  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 inset-0 h-screen w-full bg-gray-800 backdrop-blur-sm bg-opacity-30 ${
          open ? "block" : "hidden pointer-events-none"
        }`}
        onClick={onClose}
      ></div>
      <div style={{width:open?"250px":"0",background:"white",padding:"20px",transition:"all",transitionDuration:"300ms",}} className={`fixed duration-300 top-0 right-0 h-full w-full bg-red-400 ${open?"block":" hidden"}`}>{children}</div>
    </>
  );
}

export default Drawer;
