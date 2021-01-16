import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Nav from "../nav";

const Header = ({ isBgBlack }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleClick = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <header
        className={`${
          isBgBlack && "bg-black"
        } font-Alata text-white h-24 flex items-center ${
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
              ulClassName={`md:flex md:bg-transparent z-50 ${
                navbarOpen
                  ? `bg-black flex flex-col absolute top-24 left-0 right-0 md:flex-row md:static`
                  : `hidden`
              }`}
              liClassName="sm:container sm:px-4 self-start mx-4 py-3 md:mx-0 md:py-0 md:pr-0 md:pl-6 lg:pl-12"
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
    </>
  );
};

export default Header;
