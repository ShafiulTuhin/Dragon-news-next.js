"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      href={href}
      className={`${isActive ? "bg-pink-600 p-2 text-white rounded-lg" : ""}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
