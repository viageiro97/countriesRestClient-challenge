import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../utils/functions";

const Wrapper = styled.div`
  p {
    margin-bottom: 5px;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
`;

function InfoGrid({ country }) {
  //nome, capital, região, sub-região, população, área, fuso horário,
  //nome nativo e o link para visualizar a bandeira.
  const { name, capital, region, subregion, population, area, timezones } =
    country;

  const nativeName =
    name.nativeName[Object.keys(country.name.nativeName)[0]].common;

  return (
    <Wrapper>
      <p>
        <b>Nome nativo: </b>
        {nativeName}
      </p>
      <p>
        <b>Capital: </b>
        {capital}
      </p>
      <p>
        <b>Regiao: </b>
        {region}
      </p>
      <p>
        <b>Sub-regiao: </b>
        {subregion}
      </p>
      <p>
        <b>Populacao: </b>
        {formatNumber(population)}
      </p>
      <p>
        <b>Area: </b>
        {formatNumber(area)} km²
      </p>
      <p>
        <b>Fuso horario: </b>
        {timezones[0]}
      </p>
    </Wrapper>
  );
}

export default InfoGrid;
