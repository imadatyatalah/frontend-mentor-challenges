import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <header className="header">
      <div>
        <Link href="/">
          <a className="header__logo">
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

      <nav className={`header__nav ${open && "header__mobile-nav"}`}>
        <ul>
          <li>
            <Link href="/#">
              <a className="header__link">Features</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a className="header__link">Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="/#">
              <a className="header__link">Resources</a>
            </Link>
          </li>
        </ul>

        {/* Call To Actions */}
        <div className="header__cta-container">
          <Link href="/#">
            <a className="header__link" style={{ display: "inline-block" }}>
              Login
            </a>
          </Link>

          <Link href="/#">
            <a
              className="primary_btn sign-up-btn"
              style={{ display: "inline-block" }}
            >
              Sign Up
            </a>
          </Link>
        </div>
      </nav>

      <div className="header__toggle">
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
  );
};

export default Header;
