"use client";
import Image from "next/image";

import avatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useState } from "react";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="flex justify-between container mx-auto py-8">
    //   <div></div>
    //   <ul className="flex gap-5 items-center font-bold text-[#797979]">
    //     <li>
    //       <NavLink href={"/"}>Home</NavLink>
    //     </li>
    //     <li>
    //       <NavLink href={"/about"}>About</NavLink>
    //     </li>
    //     <li>
    //       <NavLink href={"/career"}>Career</NavLink>
    //     </li>
    //   </ul>
    //   {isPending ? (
    //     <span className="loading loading-dots loading-md"></span>
    //   ) : user ? (
    //     <div className="flex gap-4 items-center">
    //       <div>
    //         <p className="text-green-600 font-semibold">Welcome!</p>
    //         <p className="font-bold">{user?.name}</p>
    //       </div>
    //       <Image src={user?.image} alt="User_Avatar" width={40} height={40} />
    //       <button
    //         onClick={handleLogout}
    //         className="btn bg-pink-600 text-white rounded-lg"
    //       >
    //         <Link href={"/"}>Logout</Link>
    //       </button>
    //     </div>
    //   ) : (
    //     <div className="flex gap-4 items-center">
    //       <Image src={avatar} alt="User_Avatar" width={40} height={40} />
    //       <button className="btn bg-pink-600 text-white rounded-lg">
    //         <Link href={"/login"}>Login</Link>
    //       </button>
    //     </div>
    //   )}
    // </div>

    <div className="shadow-sm mb-5">
      <div className="flex justify-between items-center container mx-auto py-4 px-4">
        {/* Logo / Left */}
        <div className="text-xl font-bold"></div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-bold text-[#797979]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/career">Career</Link>
          </li>
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          {isPending ? (
            <span className="loading loading-dots loading-md"></span>
          ) : user ? (
            <div className="flex gap-3 items-center">
              <div className="text-right">
                <p className="text-green-600 font-semibold text-sm">Welcome!</p>
                <p className="font-bold text-sm">{user?.name}</p>
              </div>

              <Image
                src={user?.image}
                alt="User"
                width={40}
                height={40}
                className="rounded-full"
              />

              <button
                onClick={handleLogout}
                className="btn bg-pink-600 text-white rounded-lg px-3 py-1"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Image src={avatar} alt="User" width={40} height={40} />
              <Link href="/login">
                <button className="btn bg-pink-600 text-white rounded-lg px-3 py-1">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-3 font-bold text-[#797979] shadow-xl p-4 text-center">
            <li className="border-1 border-gray-400 p-2 rounded-lg">
              <Link href="/">Home</Link>
            </li>
            <li className="border-1 border-gray-400 p-2 rounded-lg">
              <Link href="/about">About</Link>
            </li>
            <li className="border-1 border-gray-400 p-2 rounded-lg">
              <Link href="/career">Career</Link>
            </li>
          </ul>

          <div className="">
            {isPending ? (
              <span className="loading loading-dots loading-md"></span>
            ) : user ? (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={user?.image}
                    alt="User"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-green-600 font-semibold">Welcome!</p>
                    <p className="font-bold">{user?.name}</p>
                  </div>
                </div>

                <button
                  onClick={handleLogout}
                  className="btn bg-pink-600 text-white rounded-lg w-full"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Image src={avatar} alt="User" width={40} height={40} />
                <Link href="/login">
                  <button className="btn bg-pink-600 text-white rounded-lg w-full">
                    Login
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
