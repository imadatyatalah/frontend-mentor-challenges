import Link from "next/link";
import Image from "next/image";

import Nav from "../nav";
import Social from "./social";

const Footer = () => {
  return (
    <>
      <footer className="font-Alata bg-black text-white text-center md:py-7">
        <div className="container md:px-8 lg:px-12 xl:px-16 2xl:px-20 md:flex md:justify-between md:items-start">
          <div className="flex flex-col md:items-start">
            <Link href="/">
              <a className="self-center md:self-auto mt-10 mb-3 md:mt-0 md:mb-3">
                <Image
                  src="/images/logo.svg"
                  alt="loopstudios"
                  height="32"
                  width="192"
                />
              </a>
            </Link>
            <Nav
              ulClassName="md:flex md:justify-between md:w-96"
              liClassName="py-2 md:py-0"
            />
          </div>
          <div className="flex flex-col py-8 md:items-start md:pt-0 md:pb-0">
            <Social />
            <p className="text-dark-gray">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
