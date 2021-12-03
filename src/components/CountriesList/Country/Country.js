import React from "react";
import styled from "styled-components";
import { formatNumber } from "../../../utils/functions";

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  border-radius: 3px;
  padding: 20px 10px;
  background: white;
  max-width: 380px;
`;

const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Name = styled.h3`
  display: flex;
  align-items: center;
  margin-right: 10px;
`;
const Flag = styled.img`
  display: inline;
  margin-left: 10px;
  width: 25px;
  height: 25px;
  object-fit: contain;
`;
const SeeMoreBtn = styled.button`
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 15px;
  background: dodgerblue;

  &:hover {
    background: #0074d9;
  }
`;

const CountryBody = styled.div``;

function Country({ country }) {
  const { translations, flag, capital, region, population } = country;

  return (
    <Wrapper>
      <CountryHeader>
        <Left>
          <Name>
            {translations.pt} <Flag src={flag} />
          </Name>
        </Left>
        <SeeMoreBtn>Ver mais</SeeMoreBtn>
      </CountryHeader>
      <CountryBody>
        <p>
          <b>População:</b> {formatNumber(population)}
        </p>
        <p>
          <b>Capital:</b> {capital ? capital : " - "}
        </p>
        <p>
          <b>Região:</b> {region}
        </p>
        <a href="https://flagcdn.com/w320/mz.png">Ver Bandeira</a>
      </CountryBody>
    </Wrapper>
  );
}

export default Country;
