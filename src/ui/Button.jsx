import React from "react";

function Button({ pending=false, classes, children ,onClose}) {
  return (
    <button  disabled={pending} className={`bg-blue-600 py-2 px-4 rounded-lg text-white ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
