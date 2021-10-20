import React from "react";
import Head from "next/head";

import Statistics from "../components/statistics";
import SubFooter from "../components/SubFooter";
import ShortenForm from "../components/ShortenForm";
import HeroSection from "../components/HeroSection";

const Home = () => (
  <>
    <Head>
      <title>Frontend Mentor | Shortly URL shortening API Challenge</title>
    </Head>

    <HeroSection />
    <ShortenForm />
    <Statistics />
    <SubFooter />
  </>
);

export default Home;
