import React from "react";
import client from "../../lib/apolloClient";
import { GET_COUNTRIES } from "../../lib/queries";
import { Country } from "../../lib/types";

const fetchCountries = async (): Promise<Country[]> => {
  const { data } = await client.query<{ countries: Country[] }>({
    query: GET_COUNTRIES,
  });
  return data.countries.slice(0, 4);
};

const AboutPage = async () => {
  const countries = await fetchCountries();

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.code}>
            {country.name} {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutPage;
