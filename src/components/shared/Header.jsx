import Logo from "@/assets/logo.png";
import Image from "next/image";

const Header = () => {
  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(today);
  return (
    <div className="text-center py-8 space-y-4">
      <Image
        src={Logo}
        alt="Header_Logo"
        width={500}
        height={500}
        className="mx-auto"
      />
      <p className="font-bold text-[#797979]">
        Journalism Without Fear or Favour
      </p>
      <p className="font-bold text-[#797979]">{formattedDate}</p>
    </div>
  );
};

export default Header;
