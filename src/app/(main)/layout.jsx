import Header from "@/components/shared/Header";
import Marque from "@/components/shared/Marque";
import Navbar from "@/components/shared/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="px-4 ">
      <Header />
      <Marque />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
