"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialSidebar = () => {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <div className="">
      <h2 className="text-lg font-bold text-[#797979] shadow-sm mb-5 p-2">
        Login with
      </h2>

      <div className="flex gap-4 items-center bg-slate-100 py-2 justify-center mb-3 border-1 border-blue-500 text-blue-500">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-3 cursor-pointer font-bold"
        >
          <FaGoogle />
          Login with google
        </button>
      </div>
      <div className="flex gap-4 items-center bg-slate-100 py-2 justify-center border-1 border-gray-500 text-gray-500">
        <button className="flex items-center gap-3 cursor-pointer font-bold">
          <FaGithub />
          Login with github
        </button>
      </div>
    </div>
  );
};

export default SocialSidebar;
