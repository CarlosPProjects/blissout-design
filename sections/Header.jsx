import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import styles from "@/styles/Header.module.css";

const nav = [
  {
    label: "shop",
    url: "#",
  },
  {
    label: "about us",
    url: "#",
  },
  {
    label: "contact",
    url: "#",
  },
  {
    label: "your box",
    url: "#",
  },
];

const Header = () => {
  const [showNav, setShowNav] = useState("close");

  const handleClick = () => {
    showNav === "close" ? setShowNav("open") : setShowNav("close");
  };

  return (
    <>
      <div
        className={`${styles[showNav]} w-72 bg-black h-full absolute z-50 px-8 py-6 `}
      >
        <AiOutlineClose
          color="white"
          size={25}
          className="ml-auto cursor-pointer"
          onClick={handleClick}
        />
        <nav className="flex flex-col gap-5">
          {nav.map((nav) => (
            <Link
              key={nav.label}
              href={nav.url}
              className="font-bold uppercase hover:opacity-50"
            >
              {nav.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="w-full absolute flex justify-between px-4 py-5 items-center z-40">
        <Link href={"/"} className="text-2xl cursor-pointer font-light font-sans">
          Bliss<span className="font-medium">out</span>
        </Link>
        <div>
          <SlMenu className="cursor-pointer" size={20} onClick={handleClick} />
        </div>
      </div>
    </>
  );
};

export default Header;
