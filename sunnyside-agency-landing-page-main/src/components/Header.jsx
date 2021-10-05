import React, { useState } from "react";

import Logo from "../icons/Logo";
import IconHamburger from "../icons/IconHamburger";
import IconArrowDown from "../icons/IconArrowDown";

const LINKS = ["About", "Services", "Projects", "Contact"];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const listClassNames = `${
    isOpen
      ? "text-Dark-grayish-blue absolute text-center w-auto top-24 left-0 right-6 ml-6 py-3 bg-white mobile-menu"
      : "hidden"
  } md:py-0 md:static md:bg-transparent md:flex md:items-center md:justify-between`;

  return (
    <header>
      <div className="flex items-center justify-between px-6 py-8">
        <div>
          <a href="/" aria-label="homepage">
            <Logo className="fill-[white]" />
          </a>
        </div>

        <nav className="md:w-[30rem] lg:w-[35rem]">
          <button
            className="flex md:hidden"
            aria-label="menu"
            aria-expanded={isOpen}
            onClick={handleClick}
          >
            <IconHamburger aria-hidden="true" />
          </button>

          <ul className={listClassNames}>
            {LINKS.map((link) => {
              const isContact = link === "Contact";

              const listItemClassNames = `${
                isContact ? "my-11" : "my-7"
              } md:my-0 md:text-white`;
              const anchorClassNames = isContact ? "contact" : null;

              return (
                <li className={listItemClassNames} key={link}>
                  <a className={anchorClassNames} href="/#">
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="flex flex-col items-center pb-[8.5rem] text-center">
        <h1 className="font-serif font-black text-4xl leading-normal tracking-[0.15em] text-white uppercase px-6 py-12 sm:py-10">
          We are creatives
        </h1>

        <IconArrowDown aria-hidden="true" />
      </div>
    </header>
  );
};

export default Header;
