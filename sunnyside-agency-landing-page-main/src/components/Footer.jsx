import React from "react";

import Logo from "../icons/Logo";
import IconFacebook from "../icons/IconFacebook";
import IconInstagram from "../icons/IconInstagram";
import IconTwitter from "../icons/IconTwitter";
import IconPinterest from "../icons/IconPinterest";

const LINKS = ["About", "Services", "Projects"];
const SOCIAL_LINKS = [IconFacebook, IconInstagram, IconTwitter, IconPinterest];

const Footer = () => (
  <footer className="flex flex-col items-center py-10 bg-[#92d3c5]">
    <div>
      <a href="/">
        <Logo className="fill-[#25564b]" />
      </a>
    </div>

    <div className="mt-6 mb-14">
      <ul className="flex">
        {LINKS.map((link) => (
          <li className="mx-4 sm:mx-6" key={link}>
            <a className="text-Dark-moderate-cyan hover:text-white" href="/#">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <div className="flex items-center">
      {SOCIAL_LINKS.map((SocialLink) => (
        <a className="mx-3" href="/#" key={SocialLink}>
          <SocialLink className="fill-[#2C7566] hover:fill-[white]" />
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
