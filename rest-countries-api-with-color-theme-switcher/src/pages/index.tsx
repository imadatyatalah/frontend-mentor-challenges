import React from "react";

import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import HomePage from "@/modules/HomePage";

import type { TCountry } from "@/types/country";

const Home = () => {
  const { data, error } = useSWR<TCountry[]>(
    "https://restcountries.com/v2/all",
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return <HomePage data={data} />;
};

export default Home;
