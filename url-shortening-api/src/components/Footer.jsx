import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LogoWhite } from "./Logo";

import styles from "../styles/layout/footer.module.scss";
import facebookIcon from "../../public/icons/icon-facebook.svg";
import twitterIcon from "../../public/icons/icon-twitter.svg";
import pinterestIcon from "../../public/icons/icon-pinterest.svg";
import instagramIcon from "../../public/icons/icon-instagram.svg";

const links = [
  {
    title: "Features",
    links: ["Link Shortening", "Branded Links", "Analytics"],
  },
  {
    title: "Resources",
    links: ["Blog", "Developers", "Support"],
  },
  {
    title: "Company",
    links: ["About", "Our Team", "Careers", "Contact"],
  },
];

const socialMediaLinks = [
  { image: facebookIcon, name: "facebook" },
  { image: twitterIcon, name: "twitter" },
  { image: pinterestIcon, name: "pinterest" },
  { image: instagramIcon, name: "instagram" },
];

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div>
        <Link href="/">
          <a>
            <LogoWhite />
          </a>
        </Link>
      </div>

      <div className={styles.footer__container}>
        {links.map(({ title, links }) => (
          <div className={styles.footer__container__links} key={title}>
            <h3>{title}</h3>

            <ul>
              {links.map((link) => (
                <li key={link}>
                  <Link href="/#">
                    <a>{link}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footer__socialMedia}>
        {socialMediaLinks.map(({ image, name }) => (
          <Link href="/#" key={name}>
            <a>
              <Image
                src={image}
                alt={`${name} account`}
                title={`${name} account`}
              />
            </a>
          </Link>
        ))}
      </div>
    </footer>

    <div className={styles.attribution}>
      Challenge by{" "}
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a
        href="https://github.com/imadatyatalah"
        target="_blank"
        rel="noopener noreferrer"
      >
        Imad Atyat-Alah
      </a>
      .
    </div>
  </>
);

export default Footer;
