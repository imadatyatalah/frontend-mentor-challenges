import React from "react";
import Image from "next/image";

import { NextSeo } from "next-seo";

import Statistics from "../components/statistics";

import styles from "../styles/pages/home.module.scss";

const Home = () => {
  return (
    <>
      <NextSeo title="Frontend Mentor | Shortly URL shortening API Challenge" />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.hero__img}>
          <Image
            src="/illustrations/illustration-working.svg"
            width="733"
            height="482"
            placeholder="blur"
            blurDataURL="LFKx^@004n-:4on4$R-W:R~C00tm"
            alt="working illustration"
          />
        </div>

        <div className={styles.hero__info}>
          <h1>More than just shorter links</h1>

          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>

          <button className="primary_btn">Get Started</button>
        </div>
      </section>

      <Statistics />

      <section className={styles.sub_footer}>
        <div>
          <h2>Boost your links today</h2>

          <button className="primary_btn">Get Started</button>
        </div>
      </section>
    </>
  );
};

export default Home;
