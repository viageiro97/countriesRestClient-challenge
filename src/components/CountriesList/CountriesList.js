import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Country from "./Country/Country";

const Wrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
function CountriesList() {
  let { countries, loading, error, filterRegion, setNumCountries } =
    useAppContext();

  if (filterRegion) {
    countries = countries.filter(
      (country) => country.region.toLowerCase() === filterRegion
    );

    setNumCountries(countries.length);
  } else {
    countries && setNumCountries(countries.length);
  }

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error</div>;

  return (
    <Wrapper>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </Wrapper>
  );
}

export default CountriesList;
