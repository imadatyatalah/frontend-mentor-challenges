import React from "react";

import styles from "../styles/pages/home.module.scss";

const stats = [
  {
    image: "/icons/icon-brand-recognition.svg",
    title: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    image: "/icons/icon-detailed-records.svg",
    title: "Detailed Records",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    image: "/icons/icon-fully-customizable.svg",
    title: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

const Statistics = () => (
  <section className={styles.advanced_statistics}>
    <div className={styles.advanced_statistics__intro}>
      <h2>Advanced Statistics</h2>

      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>

    <div className={styles.advanced_statistics__cards}>
      <span className={styles.advanced_statistics__cards__line}></span>
      {stats.map(({ title, content, image }) => (
        <div className={styles.advanced_statistics__cards__card} key={title}>
          <div>
            <img src={image} alt={title} />
          </div>

          <h2>{title}</h2>

          <p>{content}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Statistics;
