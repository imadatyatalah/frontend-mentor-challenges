import Image from "next/image";

import { social } from "../../../../config";

import styles from "../../../styles/nav.module.css";

const Social = () => {
  return (
    <>
      <div className="flex items-center self-center md:self-end justify-between w-40 pb-5 md:pb-6">
        {social.map((item, index) => (
          <div className={styles.link} key={index}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              title={item.name}
              width={item.width}
              height={item.height}
              priority
              className="cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Social;
