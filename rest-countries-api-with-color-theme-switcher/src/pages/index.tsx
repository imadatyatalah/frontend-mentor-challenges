import React, { useMemo, useState } from "react";
import { GetStaticProps } from "next";

import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { Country } from "@/types/country";
import FilterByRegion, { MenuItem } from "@/components/filterByRegion";
import CountryCard from "@/components/countryCard";

const Home = ({ countries }: { countries: Country[] }) => {
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("");

  const { data } = useSWR<Country[]>(
    "https://restcountries.eu/rest/v2/all",
    fetcher,
    { initialData: countries }
  );

  if (!data) return <div>loading...</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredData = useMemo(() => {
    if (region) {
      return data.filter((country) => country.region === region);
    }

    return data;
  }, [data, region]);

  const countriesPerPage = 20;

  return (
    <>
      <NextSeo title="Home" />

      <section className="">
        <div className="mx-6 sm:mx-4 md:mx-10 lg:mx-12">
          <FilterByRegion>
            <MenuItem onClick={() => setRegion("Africa")}>Africa</MenuItem>
            <MenuItem onClick={() => setRegion("Americas")}>America</MenuItem>
            <MenuItem onClick={() => setRegion("Asia")}>Asia</MenuItem>
            <MenuItem onClick={() => setRegion("Europe")}>Europe</MenuItem>
            <MenuItem onClick={() => setRegion("Oceania")}>Oceania</MenuItem>
          </FilterByRegion>
        </div>

        <div className="mx-12 sm:mx-8 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredData.length
            ? filteredData
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
