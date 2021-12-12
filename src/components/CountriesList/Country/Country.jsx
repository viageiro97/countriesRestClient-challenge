import React from "react";
import { Link } from "react-router-dom";

import { formatNumber } from "../../../utils/functions";

import {
  Wrapper,
  CountryHeader,
  Left,
  CountryBody,
  Name,
  Flag,
  SeeMoreBtn,
} from "./styles";

function Country({ country }) {
  const { translations, flags, capital, region, population, cca3 } = country;

  return (
    <Wrapper>
      <CountryHeader>
        <Left>
          <Name>
            {translations.por.common} <Flag src={flags.svg} />
          </Name>
        </Left>
        <SeeMoreBtn>
          <Link to={`/${cca3.toLowerCase()}`}>Ver Mais</Link>
        </SeeMoreBtn>
      </CountryHeader>
      <CountryBody>
        <p>
          <b>População:</b> {formatNumber(population)}
        </p>
        <p>
          <b>Capital:</b> {capital ? capital.join(", ") : " - "}
        </p>
        <p>
          <b>Região:</b> {region}
        </p>
        <a href="/">Ver Bandeira</a>
      </CountryBody>
    </Wrapper>
  );
}

export default Country;
