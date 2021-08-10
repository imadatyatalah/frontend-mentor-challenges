import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Country } from "@/types/country";

const CountryCard = ({ country }: { country: Country }) => {
  const { name, flag, demonym, population, region, capital, alpha3Code } =
    country;

  return (
    <div className="element my-8 shadow-lg rounded-md sm:mx-2 lg:mx-4">
      <div className="flex">
        <Link href={`/${alpha3Code}`}>
          <a>
            <Image
              src={flag}
              width="700"
              height="500"
              alt={`${demonym} flag`}
              className="rounded-t-md"
            />
          </a>
        </Link>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-extrabold">
          <Link href={`/${alpha3Code}`}>
            <a>{name}</a>
          </Link>
        </h2>

        <ul className="py-2">
          <li className="font-light py-px">
            <span className="font-semibold">Population: </span>
            {population.toLocaleString()}
          </li>
          <li className="font-light py-px">
            <span className="font-semibold">Region: </span>
            {region}
          </li>
          <li className="font-light py-px">
            <span className="font-semibold">Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
