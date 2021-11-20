import React, { useState } from "react";

import classNames from "classnames";

import Logo from "./Logo";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import CartIcon from "../icons/CartIcon";

const LINKS = ["Collections", "Men", "Women", "About", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const navClassNames = classNames(
    isOpen
      ? "absolute h-screen pl-6 z-10 top-0 left-0 w-[65%] bg-white md:static md:h-auto md:pl-0 md:z-0 md:w-auto md:bg-transparent"
      : "hidden md:block"
  );

  return (
    <header>
      <div className="flex items-center justify-between mx-6 h-[70px] md:h-[100px] md:border-b md:border-color-grayish-blue lg:mx-20 xl:mx-36 2xl:mx-44">
        <div className="flex items-center">
          <div className="md:hidden">
            <button className="flex mr-4" onClick={handleClick}>
              <MenuIcon />
            </button>
          </div>

          <div className="md:mr-6 lg:mr-12">
            <a href="/">
              <Logo />
            </a>
          </div>

          <nav className={navClassNames}>
            <div className="h-[70px] flex items-center md:hidden">
              <button onClick={handleClick}>
                <CloseIcon />
              </button>
            </div>

            <ul className="md:flex">
              {LINKS.map((link) => (
                <li
                  className="mt-4 font-bold md:mt-0 text-color-dark-blue md:mr-8 md:text-color-dark-grayish-blue md:font-normal md:hover:text-color-dark-blue"
                  key={link}
                >
                  <a
                    className="md:hover:border-b-4 md:border-color-orange md:pb-9"
                    href="/#"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center">
          <CartIcon />

          <img
            src="/image-avatar.png"
            alt=""
            className="w-6 ml-5 rounded-full md:ml-10 md:w-12"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
