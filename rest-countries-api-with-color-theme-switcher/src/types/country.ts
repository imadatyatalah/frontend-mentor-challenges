type Currencies = {
  code: string;
  name: string;
  symbol: string;
};

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Translations = {
  br: string;
  pt: string;
  nl: string;
  hr: string;
  fa: string;
  de: string;
  es: string;
  fr: string;
  ja: string;
  it: string;
  hu: string;
};

type RegionalBlocs = {
  acronym: string;
  name: string;
};

export type TCountry = {
  name: string;
  topLevelDomain: string[];
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string;
  altSpellings: string[];
  region: string;
  continent: string;
  population: number;
  latlng: number[];
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders?: string[];
  nativeName: string;
  numericCode: string;
  currencies: Currencies[];
  languages: Language[];
  translations: Translations;
  flags: {
    png: string;
    svg: string;
  };
  regionalBlocs: RegionalBlocs[];
  cioc: string;
  independent: boolean;
};
