import React from "react";

function Button({children, onClick,classes}) {
  return <button onClick={onClick} className={`py-1 px-2 ${classes}`}>{children}</button>;
}

export default Button;
