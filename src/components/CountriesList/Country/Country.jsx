import React from "react";

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
  const { translations, flags, capital, region, population } = country;

  return (
    <Wrapper>
      <CountryHeader>
        <Left>
          <Name>
            {translations.por.common} <Flag src={flags.svg} />
          </Name>
        </Left>
        <SeeMoreBtn>Ver mais</SeeMoreBtn>
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
