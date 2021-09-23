import Header from "./header";

import styles from "../styles/index.module.css";

const HeroSection = () => (
  <div className={styles.layoutContainer}>
    <Header />

    <section className="min-h-[400px] text-white">
      <div className="container px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <h1 className="font-Josefin-Sans uppercase border-2 text-4xl py-7 px-5 my-36 w-11/12 sm:w-9/12 sm:text-5xl lg:w-6/12 xl:text-6xl">
          Immersive
          <br />
          experiences that deliver
        </h1>
      </div>
    </section>
  </div>
);

export default HeroSection;
