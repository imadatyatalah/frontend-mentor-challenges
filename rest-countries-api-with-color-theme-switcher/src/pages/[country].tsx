import React from "react";
import { useRouter } from "next/router";

import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import CountryPage from "@/modules/CountryPage";

import type { TCountry } from "@/types/country";

const Country = () => {
  const { query, isFallback } = useRouter();

  const { data } = useSWR<TCountry>(
    `https://restcountries.com/v2/alpha/${query?.country}`,
    fetcher
  );

  if (!data || isFallback) return <div>loading...</div>;

  return <CountryPage country={data} />;
};

export default Country;
