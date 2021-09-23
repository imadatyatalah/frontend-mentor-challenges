import Image from "next/image";

import styles from "../../styles/nav.module.css";

export const social = [
  {
    imgSrc: "/images/icon-facebook.svg",
    title: "facebook-icon",
    name: "facebook",
    width: "24",
    height: "24",
  },
  {
    imgSrc: "/images/icon-twitter.svg",
    title: "twitter-icon",
    name: "twitter",
    width: "24",
    height: "20",
  },
  {
    imgSrc: "/images/icon-pinterest.svg",
    title: "pinterest-icon",
    name: "pinterest",
    width: "24",
    height: "24",
  },
  {
    imgSrc: "/images/icon-instagram.svg",
    title: "instagram-icon",
    name: "instagram",
    width: "24",
    height: "24",
  },
];

const Social = () => (
  <div className="flex items-center self-center md:self-end justify-between w-40 pb-5 md:pb-6">
    {social.map(({ imgSrc, title, name, width, height }) => (
      <div className={styles.link} key={name}>
        <Image
          src={imgSrc}
          alt={title}
          title={name}
          width={width}
          height={height}
          className="cursor-pointer"
        />
      </div>
    ))}
  </div>
);

export default Social;
