import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import headerStyles from "../styles/layout/header.module.scss";

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
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>

          <div>
            <button>Login</button>
            <button>Sign Up</button>
          </div>
        </nav>

        <div className={headerStyles.header__toggle}>
          <button onClick={handleClick}>toggle</button>
        </div>
      </header>
    </>
  );
};

export default Header;
