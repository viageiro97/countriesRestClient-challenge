import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import { ignoreAccent } from "../../utils/functions";
import Country from "./Country/Country";
import DataExportSection from "./DataExportSection/DataExportSection";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
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
