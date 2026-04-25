import Navbar from "@/components/shared/Navbar";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="px-4 container mx-auto">
      <Navbar />
      {children}
    </div>
  );
};

export default AuthLayout;
