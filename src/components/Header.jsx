import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import headerStyles from "../styles/layout/header.module.scss";
import buttons from "../styles/components/buttons.module.scss";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <>
      <header className={headerStyles.header}>
        <div className={headerStyles.header__logo}>
          <Link href="/">
            <a>
              <Image
                src="/logo.svg"
                width="121"
                height="33"
                alt="shortly logo"
                title="Shortly Logo"
              />
            </a>
          </Link>
        </div>

        <nav
          className={`${headerStyles.header__desktop_nav} ${
            open && headerStyles.header__nav__open
          }`}
        >
          <ul>
            <li>
              <Link href="/features">
                <a>Features</a>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <a>Pricing</a>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <a>Resources</a>
              </Link>
            </li>
          </ul>

          <div>
            <button>Login</button>
            <button className={buttons.primary_btn}>Sign Up</button>
          </div>
        </nav>

        <div className={headerStyles.header__toggle}>
          <button onClick={handleClick}>
            <svg
              fill="#bfbfbf"
              width="25px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
