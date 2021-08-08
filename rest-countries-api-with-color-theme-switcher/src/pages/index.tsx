import React, { useState } from "react";
import { GetStaticProps } from "next";

import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { Country } from "@/types/country";
import CountryCard from "@/components/countryCard";

const Home = ({ countries }: { countries: Country[] }) => {
  const [page, setPage] = useState(1);

  const { data } = useSWR<Country[]>(
    "https://restcountries.eu/rest/v2/all",
    fetcher,
    { initialData: countries }
  );

  if (!data) return <div>loading...</div>;

  const countriesPerPage = 20;

  return (
    <>
      <NextSeo title="Home" />

      <section className="mx-12 sm:mx-8">
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.length
            ? data
                .slice(0, page * countriesPerPage)
                .map((country) => (
                  <CountryCard country={country} key={country.name} />
                ))
            : null}
        </div>

        <div className="text-center">
          <button
            onClick={() => setPage(page + 1)}
            disabled={page * countriesPerPage >= data.length}
          >
            Load More
          </button>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // TODO: Fetch just necessary data
  const countries = await fetcher("https://restcountries.eu/rest/v2/all");

  return { props: { countries } };
};

export default Home;
