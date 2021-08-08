import React from "react";
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

  return (
    <>
      <NextSeo title={data.name} />

      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
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
