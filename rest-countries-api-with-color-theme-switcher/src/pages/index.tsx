import React, { useMemo, useState } from "react";
import { GetStaticProps } from "next";

import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { Country } from "@/types/country";
import FilterByRegion, { MenuItem } from "@/components/filterByRegion";
import CountryCard from "@/components/countryCard";
import Button from "@/components/button";
import Search from "@/components/icons/search";

const REGIONS = [
  { region: "Africa", title: "Africa" },
  { region: "Americas", title: "America" },
  { region: "Asia", title: "Asia" },
  { region: "Europe", title: "Europe" },
  { region: "Oceania", title: "Oceania" },
];

const Home = ({ countries }: { countries: Country[] }) => {
  const [page, setPage] = useState(1);
  const [region, setRegion] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const { data } = useSWR<Country[]>(
    "https://restcountries.com/v2/all",
    fetcher,
    { initialData: countries }
  );

  if (!data) return <div>loading...</div>;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const filteredData = useMemo(() => {
    if (region) {
      return data.filter((country) => country.continent === region);
    }

    if (searchValue) {
      return data.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    return data;
  }, [data, region, searchValue]);

  const countriesPerPage = 20;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    setRegion("");
  };

  return (
    <>
      <NextSeo title="Home" />

      <section>
        <div className="mx-6 flex flex-col sm:mx-4 sm:flex-row sm:justify-between sm:items-center md:mx-10 lg:mx-12">
          <div className="mt-8 py-1 relative flex items-center w-full sm:w-6/12 lg:w-5/12">
            <Search />

            <input
              type="text"
              name="country"
              id="country"
              onChange={handleInputChange}
              className="shadow-lg-center py-4 pr-4 pl-16 w-full rounded-md focus:outline-none placeholder-dark-gray dark:bg-dark-blue dark:placeholder-white"
              placeholder="Search for a country..."
            />
          </div>

          <FilterByRegion>
            {REGIONS.map(({ region, title }) => (
              <MenuItem onClick={() => setRegion(region)} key={region}>
                {title}
              </MenuItem>
            ))}
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
          <Button
            className="mb-8"
            onClick={() => setPage(page + 1)}
            disabled={page * countriesPerPage >= filteredData.length}
          >
            Load More
          </Button>
        </div>
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // TODO: Fetch just necessary data
  const countries = await fetcher("https://restcountries.com/v2/all");

  return { props: { countries } };
};

export default Home;
