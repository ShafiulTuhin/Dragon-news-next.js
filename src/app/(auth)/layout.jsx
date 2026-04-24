import Navbar from "@/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="px-4 ">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
