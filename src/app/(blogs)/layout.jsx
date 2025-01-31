import Header from "@/components/Header";
import React from "react";

function Layout({ children }) {
  return (
    <div className=" ">
        <Header />
      
      <div className="px-8">
      {children}
      </div>
    </div>
  );
}

export default Layout;
