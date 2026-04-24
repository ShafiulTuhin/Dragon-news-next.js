import Image from "next/image";

import avatar from "@/assets/user.png";
import NavLink from "./NavLink";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between container mx-auto py-8">
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

      <div className="flex gap-4 items-center">
        <Image src={avatar} alt="User_Avatar" width={40} height={40} />
        <button className="btn bg-pink-600 text-white rounded-lg">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
