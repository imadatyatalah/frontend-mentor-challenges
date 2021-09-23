import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "./nav";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <header
      className={`font-Alata text-white h-24 flex items-center ${
        navbarOpen
          ? "bg-black font-Josefin-Sans text-xl md:text-base md:font-Alata md:bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-between">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.svg"
                alt="loopstudios"
                height="32"
                width="192"
              />
            </a>
          </Link>
          <Nav
            isHeader
            className={`md:flex md:bg-transparent z-50 ${
              navbarOpen
                ? `bg-black flex flex-col absolute top-24 left-0 right-0 md:flex-row md:static`
                : `hidden`
            }`}
            onClick={() => setNavbarOpen(false)}
          />
          <button
            className="focus:outline-none pb-1 md:hidden"
            type="button"
            onClick={handleClick}
          >
            {navbarOpen ? (
              <Image
                src="/images/icon-close.svg"
                alt="close-icon"
                title="close-icon"
                height="20"
                width="20"
              />
            ) : (
              <Image
                src="/images/icon-hamburger.svg"
                alt="menu-icon"
                title="menu-icon"
                height="16"
                width="24"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
