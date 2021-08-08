import React from "react";
import { GetStaticProps } from "next";

import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { Country } from "@/types/country";
import CountryCard from "@/components/countryCard";

const Home = ({ countries }: { countries: Country[] }) => {
  const { data } = useSWR<Country[]>(
    "https://restcountries.eu/rest/v2/all",
    fetcher,
    { initialData: countries }
  );

  if (!data) return <div>loading...</div>;

  return (
    <>
      <NextSeo title="Home" />

      <section className="mx-12 sm:mx-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.length
          ? data.map((country) => (
              <CountryCard country={country} key={country.name} />
            ))
          : null}
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const countries = await fetcher("https://restcountries.eu/rest/v2/all");

  return { props: { countries } };
};

export default Home;
