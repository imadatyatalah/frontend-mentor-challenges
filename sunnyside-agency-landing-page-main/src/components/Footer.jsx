import React from "react";

import Logo from "../icons/Logo";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTwitter from "../icons/IconTwitter";
import IconPinterest from "../icons/IconPinterest";

const LINKS = ["About", "Services", "Projects"];
const SOCIAL_LINKS = [
  { name: "facebook", icon: IconFacebook },
  { name: "instagram", icon: IconInstagram },
  { name: "twitter", icon: IconTwitter },
  { name: "pinterest", icon: IconPinterest },
];

const Footer = () => (
  <footer>
    <div className="flex flex-col items-center py-10 bg-[#92d3c5]">
      <div>
        <a href="/" aria-label="homepage">
          <Logo className="fill-[#25564b]" />
        </a>
      </div>

      <nav className="mt-6 mb-14">
        <ul className="flex">
          {LINKS.map((link) => (
            <li className="mx-4 sm:mx-6" key={link}>
              <a className="text-Dark-moderate-cyan hover:text-white" href="/#">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <ul className="flex items-center" aria-label="social icons">
        {SOCIAL_LINKS.map(({ name, icon: SocialLink }) => (
          <li className="mx-3" key={name}>
            <a href="/#" aria-label={`${name} icon`}>
              <SocialLink
                className="fill-[#2C7566] hover:fill-[white]"
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>
    </div>

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
  </footer>
);

export default Footer;
