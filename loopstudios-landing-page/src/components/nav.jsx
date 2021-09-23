import Link from "next/link";

import { links } from "../../config";

import styles from "../styles/nav.module.css";

const Nav = ({ isHeader, navbarOpen, onClick, ...rest }) => (
  <nav>
    <ul {...rest}>
      {links.map((link, index) => (
        <li
          className={`md:py-0 ${
            isHeader
              ? "sm:container sm:px-4 self-start mx-4 py-3 md:mx-0 md:pr-0 md:pl-6 lg:pl-12"
              : "py-2"
          }`}
          onClick={onClick}
          key={index}
        >
          <Link href={link.href}>
            <a className={styles.link}>{link.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
