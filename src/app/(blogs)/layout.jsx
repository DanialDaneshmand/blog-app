import Header from "@/components/Header";
import React from "react";

function Layout({ children }) {
  return (
    <div>
      <div style={{zIndex:999}} className="  sticky md:relative top-0 md:top-auto left-0 md:left-auto z-50  w-full">
        <Header />
      </div>

      <div className="px-8">{children}</div>
    </div>
  );
}

export default Layout;
