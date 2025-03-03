"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from "react-icons/hi2";

// nav data
const navData = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 w-full z-50 xl:w-16 xl:h-screen flex xl:flex-col items-center xl:justify-center bg-white/10 backdrop-blur-md">
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-2 px-4 py-4 md:px-20 xl:px-0 text-2xl xl:text-lg xl:rounded-full">
        {navData.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname ? "text-accent" : ""
            } flex items-center hover:text-accent transition-all duration-300`}
          >
            <div>{link.icon}</div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Nav;
