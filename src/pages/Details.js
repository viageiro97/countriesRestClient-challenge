import React from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import BorderCountries from "../components/Details/BorderCountries";
import InfoGrid from "../components/Details/InfoGrid";
import useFetch from "../hooks/useFetch";

const Wrapper = styled.div`
  display: flex;
  padding: 85px 0;
  justify-content: space-between;
`;
const FlagContainer = styled.div`
  margin-right: 60px;
  max-width: 450px;
  img {
    border-radius: 5px;
    width: 100%;
  }
`;
const DetailsContainer = styled.div`
  h2 {
    font-size: 2.3rem;
    margin-bottom: 20px;
  }
  flex: 1;
`;

function Details() {
  const apiBase = "https://restcountries.com/v3.1";
  const { code } = useParams();
  const {
    data: country,
    loading,
    error,
  } = useFetch(`${apiBase}/alpha/${code}`);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error!</p>;

  return (
    <Wrapper>
      <FlagContainer>
        <img src={country[0].flags.svg} alt={country.name} />
      </FlagContainer>
      <DetailsContainer>
        <h2>{country[0].translations.por.common}</h2>
        <InfoGrid country={country[0]} />
        <BorderCountries borders={country[0].borders} />
      </DetailsContainer>
    </Wrapper>
  );
}

export default Details;
