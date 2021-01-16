import Link from "next/link";

import { links } from "../../../config";

import styles from "../../styles/nav.module.css";

const Nav = ({ ulClassName, liClassName, onClick }) => {
  return (
    <>
      <nav>
        <ul className={ulClassName}>
          {links.map((link, index) => (
            <li className={liClassName} onClick={onClick} key={index}>
              <Link href={link.href}>
                <a className={styles.link}>{link.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
