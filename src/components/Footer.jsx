import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__logo-container">
          <Link href="/">
            <a>
              <Image
                src="/logo-white.svg"
                width="121"
                height="33"
                alt="shortly logo"
                title="Shortly Logo"
              />
            </a>
          </Link>
        </div>

        <div className="footer__container">
          <div className="footer__container__links">
            <h3>Features</h3>

            <ul>
              <li>
                <Link href="/#">
                  <a>Link Shortening</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Branded Links</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Analytics</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__container__links">
            <h3>Resources</h3>

            <ul>
              <li>
                <Link href="/#">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Developers</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Support</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__container__links">
            <h3>Company</h3>

            <ul>
              <li>
                <Link href="/#">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Careers</a>
                </Link>
              </li>
              <li>
                <Link href="/#">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__social-media">
          <Link href="/#">
            <a>
              <Image
                src="/icons/icon-facebook.svg"
                width="24"
                height="24"
                alt="facebook account"
                title="facebook account"
              />
            </a>
          </Link>

          <Link href="/#">
            <a>
              <Image
                src="/icons/icon-twitter.svg"
                width="24"
                height="20"
                alt="twitter account"
                title="twitter account"
              />
            </a>
          </Link>

          <Link href="/#">
            <a>
              <Image
                src="/icons/icon-pinterest.svg"
                width="24"
                height="24"
                alt="pinterest account"
                title="pinterest account"
              />
            </a>
          </Link>

          <Link href="/#">
            <a>
              <Image
                src="/icons/icon-instagram.svg"
                width="24"
                height="24"
                alt="instagram account"
                title="instagram account"
              />
            </a>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
