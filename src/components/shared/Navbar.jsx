"use client";
import Image from "next/image";

import avatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const handleLogout = async () => {
    await authClient.signOut();
    toast.success("Logged out successfully");
  };
  return (
    <div className="flex justify-between container mx-auto py-8">
      <div></div>
      <ul className="flex gap-5 items-center font-bold text-[#797979]">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-dots loading-md"></span>
      ) : user ? (
        <div className="flex gap-4 items-center">
          <div>
            <p className="text-green-600 font-semibold">Welcome!</p>
            <p className="font-bold">{user?.name}</p>
          </div>
          <Image src={user?.image} alt="User_Avatar" width={40} height={40} />
          <button
            onClick={handleLogout}
            className="btn bg-pink-600 text-white rounded-lg"
          >
            <Link href={"/"}>Logout</Link>
          </button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <Image src={avatar} alt="User_Avatar" width={40} height={40} />
          <button className="btn bg-pink-600 text-white rounded-lg">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
