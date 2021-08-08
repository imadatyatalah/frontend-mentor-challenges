import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { NextSeo } from "next-seo";
import useSWR from "swr";

import { fetcher } from "@/utils/fetcher";
import { Country as TCountry } from "@/types/country";

const Country = ({ country }: { country: TCountry }) => {
  const { query } = useRouter();

  const { data } = useSWR<TCountry>(
    `https://restcountries.eu/rest/v2/alpha/${query?.country}`,
    fetcher,
    { initialData: country }
  );

  if (!data) return <div>loading...</div>;

  const {
    name,
    flag,
    demonym,
    population,
    subregion,
    region,
    capital,
    nativeName,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = data;

  return (
    <>
      <NextSeo title={name} />

      <section className="custom_max-width px-4 sm:px-10 lg:px-12">
        <button className="bg-white dark:bg-dark-blue my-10 py-2 px-7 rounded-md shadow-custom">
          <Link href="/">
            <a className="flex items-center">
              {/* Arrow left icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>

              <span className="ml-3">Back</span>
            </a>
          </Link>
        </button>

        <div className="flex">
          <Image src={flag} width="700" height="500" alt={`${demonym} flag`} />
        </div>

        <div className="pt-8">
          <h1 className="text-3xl font-extrabold">{name}</h1>

          <ul className="py-3">
            <li className="font-light py-px">
              <span className="font-semibold">Native Name: </span>
              {nativeName}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Population: </span>
              {population.toLocaleString()}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Region: </span>
              {region}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Sub Region: </span>
              {subregion}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Capital: </span>
              {capital}
            </li>
          </ul>

          <ul className="py-3">
            <li className="font-light py-px">
              <span className="font-semibold">Top Level Domain: </span>
              {topLevelDomain}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Currencies: </span>

              {currencies?.map((currency) => currency.name)}
            </li>
            <li className="font-light py-px">
              <span className="font-semibold">Languages: </span>
              {languages?.map((language) => language.name).join(", ")}
            </li>
          </ul>

          <div className="py-3">
            <h2 className="text-xl font-semibold">Border Countries: </h2>

            <div className="my-6">
              {borders?.map((border) => (
                <Link href={`/${border}`} key={border}>
                  <a className="inline-block mb-4 bg-white dark:bg-dark-blue mr-4 py-2 px-7 rounded-md shadow-custom">
                    {/* TODO: Display country name instead of country alpha 3 code */}
                    {border}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const country = await fetcher(
    `https://restcountries.eu/rest/v2/alpha/${params?.country}`
  );

  return { props: { country } };
};

export default Country;
