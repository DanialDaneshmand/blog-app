import React from "react";

function Button({ pending, classes, children }) {
  return (
    <button  disabled={pending} className={`${classes}`}>
      {children}
    </button>
  );
}

export default Button;
