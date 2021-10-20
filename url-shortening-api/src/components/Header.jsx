import React, { useState } from "react";
import Link from "next/link";

import styles from "../styles/layout/header.module.scss";
import { Logo } from "./Logo";

const LINKS = ["Features", "Pricing", "Resources"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen(!open);

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <a className={styles.header__logo}>
            <Logo />
          </a>
        </Link>
      </div>

      <nav
        className={`${styles.header__nav} ${open && styles.header__mobileNav}`}
      >
        <ul>
          {LINKS.map((link) => (
            <li key={link}>
              <Link href="/#">
                <a className={styles.header__link}>{link}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.header__ctaContainer}>
          <Link href="/#">
            <a
              className={styles.header__link}
              style={{ display: "inline-block" }}
            >
              Login
            </a>
          </Link>

          <Link href="/#">
            <a className={`primary_btn ${styles.header__ctaContainer__signUp}`}>
              Sign Up
            </a>
          </Link>
        </div>
      </nav>

      <div className={styles.header__toggle}>
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
