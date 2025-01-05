import React from "react";

function ButtonIcon({ children, OnClick ,classes}) {
  return <button onClick={OnClick} className={`  flex items-center gap-x-1 rounded-md py-2 px-2 text-4xl    ${classes}`}>{children}</button>;
}

export default ButtonIcon;
