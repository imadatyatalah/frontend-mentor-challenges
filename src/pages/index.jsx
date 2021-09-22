import React from "react";

import { NextSeo } from "next-seo";

import Statistics from "../components/statistics";
import SubFooter from "../components/SubFooter";
import ShortenForm from "../components/ShortenForm";
import HeroSection from "../components/HeroSection";

const Home = () => (
  <>
    <NextSeo title="Frontend Mentor | Shortly URL shortening API Challenge" />

    <HeroSection />
    <ShortenForm />
    <Statistics />
    <SubFooter />
  </>
);

export default Home;
