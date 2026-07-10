"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// icons
import {
    HiHome,
    HiUser,
    HiViewColumns,
    HiRectangleGroup,
    HiChatBubbleBottomCenterText,
    HiEnvelope
} from "react-icons/hi2";

// nav data
export const navData = [
    { name: "home", path: "/", icon: <HiHome /> },
    { name: "about", path: "/about", icon: <HiUser /> },
    { name: "services", path: "/services", icon: <HiRectangleGroup /> },
    { name: "work", path: "/work", icon: <HiViewColumns /> },
    { name: "contact", path: "/contact", icon: <HiEnvelope /> }
];

const Nav = () => {
    const pathname = usePathname();

    return (
        <nav
            className="flex flex-col items-center xl:justify-center fixed bottom-0 left-0 xl:top-0 xl:bottom-0 xl:right-[2%] xl:left-auto w-full xl:w-16 xl:max-w-md z-50"
        >
            {/* inner */}
            <div
                className="flex w-full xl:flex-col items-center justify-around xl:justify-center
                gap-y-10 px-2 sm:px-4 xl:px-0 h-16 xl:h-max py-3 xl:py-8
                bg-white/10 backdrop-blur-md text-2xl sm:text-3xl xl:text-xl
                xl:rounded-full
                pb-[calc(env(safe-area-inset-bottom)+0.5rem)] xl:pb-8"
            >
                {navData.map((link, index) => (
                    <Link
                        key={index}
                        href={link.path}
                        className={`${
                            link.path === pathname && "text-accent"
                        } relative flex flex-col xl:flex-row items-center gap-1 group hover:text-accent active:text-accent transition-all duration-300 p-2 -m-2`}
                    >
                        {/* Tooltip desktop uniquement */}
                        <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                            <div className="bg-white relative flex text-primary border-[3px] p-[6px]">
                                <div className="text-[12px] leading-none font-semibold capitalize">
                                    {link.name}
                                </div>
                                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                            </div>
                        </div>

                        <div>{link.icon}</div>

                        {/* Label visible sous l'icône sur mobile */}
                        <span className="text-[9px] xl:hidden capitalize leading-none">
                            {link.name}
                        </span>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default Nav;