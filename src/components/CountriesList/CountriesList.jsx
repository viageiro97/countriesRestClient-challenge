import React from "react";
import { useAppContext } from "../../context/AppContext";
import { ignoreAccent } from "../../utils/functions";

import Country from "./Country/Country.jsx";
import DataExportSection from "./DataExportSection/DataExportSection";

import { Wrapper, Grid } from "./CountriesListStyles";

function CountriesList() {
  let countriesNum = 0;
  let { countries, loading, error, filterRegion, searchTerm } = useAppContext();

  if (filterRegion) {
    countries = countries.filter(
      (country) => country.region.toLowerCase() === filterRegion
    );
  }

  if (searchTerm) {
    let term = ignoreAccent(searchTerm.toLowerCase());
    countries = countries.filter((country) =>
      ignoreAccent(country.translations.por.common.toLowerCase()).includes(term)
    );
  }

  if (countries) {
    countriesNum = countries.length;
    //order countries by alphabetical in Portuguese
    countries = countries.sort((a, b) =>
      a.translations.por.common.localeCompare(b.translations.por.common)
    );
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <Wrapper>
      <DataExportSection region={filterRegion} countriesNum={countriesNum} />
      <Grid>
        {countries.map((country, index) => (
          <Country key={index} country={country} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default CountriesList;
