import styled from "styled-components";
import { useAppContext } from "../../context/AppContext";
import Country from "./Country/Country";

const Wrapper = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;
function CountriesList() {
  const { countries, loading } = useAppContext();

  if (loading) return <div>Loading...</div>;
  return (
    <Wrapper>
      {countries.map((country) => (
        <Country key={country.name} country={country} />
      ))}
    </Wrapper>
  );
}

export default CountriesList;
