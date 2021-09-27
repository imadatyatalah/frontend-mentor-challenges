import React from "react";
import Link from "next/link";
import Image from "next/image";

import { LogoWhite } from "./Logo";

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
    <footer className="footer">
      <div className="footer__logo-container">
        <Link href="/">
          <a>
            <LogoWhite />
          </a>
        </Link>
      </div>

      <div className="footer__container">
        {links.map(({ title, links }) => (
          <div className="footer__container__links" key={title}>
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

      <div className="footer__social-media">
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

    <div className="attribution">
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