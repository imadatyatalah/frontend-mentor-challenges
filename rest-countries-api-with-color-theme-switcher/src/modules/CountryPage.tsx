import Link from "next/link";
import Image from "next/image";

import { NextSeo } from "next-seo";

import { ArrowLeft } from "@/components/icons/arrows";
import Button from "@/components/button";

import type { TCountry } from "@/types/country";

interface Props {
  country: TCountry;
}

const CountryPage = ({ country }: Props) => {
  const {
    name,
    flags,
    demonym,
    population,
    region,
    capital,
    nativeName,
    topLevelDomain,
    languages,
    currencies,
    borders,
  } = country;

  return (
    <>
      <NextSeo title={name} />

      <section className="custom_max-width px-4 sm:px-10 lg:px-12">
        <Button className="my-10">
          <Link href="/">
            <a className="flex items-center">
              <ArrowLeft />

              <span className="ml-3">Back</span>
            </a>
          </Link>
        </Button>

        <div className="xl:grid xl:grid-cols-2 xl:items-center">
          <div className="flex xl:mr-20">
            <Image
              src={flags.svg}
              width="700"
              height="500"
              alt={`${demonym} flag`}
            />
          </div>

          <div className="pt-8">
            <h1 className="text-3xl font-extrabold">{name}</h1>

            <div className="xl:grid xl:grid-cols-2">
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
                  {region}
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

                  {currencies?.map((currency) => currency.name).join(", ")}
                </li>
                <li className="font-light py-px">
                  <span className="font-semibold">Languages: </span>
                  {languages?.map((language) => language.name).join(", ")}
                </li>
              </ul>

              {borders?.length ? (
                <ul className="py-3 xl:col-start-1 xl:col-end-3">
                  <li className="font-light">
                    <span className="text-xl font-semibold xl:inline-flex xl:mr-3">
                      Border Countries:{" "}
                    </span>

                    <p className="my-4 xl:my-0 xl:inline">
                      {borders.map((border) => (
                        <Link href={`/${border}`} key={border}>
                          <a className="inline-block mb-4 mr-3 py-2 px-7 element rounded-md shadow-custom">
                            {border}
                          </a>
                        </Link>
                      ))}
                    </p>
                  </li>
                </ul>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryPage;
