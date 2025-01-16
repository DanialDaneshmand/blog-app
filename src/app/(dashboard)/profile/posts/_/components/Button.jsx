import React from "react";

function Button({children, onClick,classes}) {
  return <button onClick={onClick} className={`py-1 px-2 text-xl ${classes}`}>{children}</button>;
}

export default Button;
