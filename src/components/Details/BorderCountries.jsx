import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useFetch from "../../hooks/useFetch";
import { truncateText } from "../../utils/functions";

const Wrapper = styled.div``;

const Grid = styled.div`
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 5px;

  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: inherit;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    display: flex;
    cursor: pointer;
    background: none;
    border: 2px solid dodgerblue;
    align-items: center;
    justify-content: center;
    padding: 5px 10px;

    &:hover {
      background: dodgerblue;
      color: white;
    }
    &:focus {
      outline: solid;
    }
  }
`;

function BorderCountries({ borders }) {
  const baseUrl = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(
    `${baseUrl}/alpha?codes=${borders}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Wrapper>
      <b>Paises Vizinhos: </b>
      <Grid>
        {data.map((country) => (
          <Link to={`/${country.cca3.toLowerCase()}`}>
            {truncateText(country.translations.por.common, 15)}
          </Link>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default BorderCountries;
