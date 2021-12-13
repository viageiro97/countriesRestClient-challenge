import React from "react";
import styled from "styled-components";

import { Name, SubText, Flag } from "../../../GlobalStyles";

import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    transition: all 0.3s;
    font-size: 1.1rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-right: 15px;

    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      transform: scale(1.05);	
  }
`;

const InfoWrapper = styled.div``;

function DetaiBox({ country }) {
  return (
    <Wrapper>
      <Link to="/">
        <BiArrowBack />
      </Link>
      <InfoWrapper>
        <Name>
          {country?.translations.por.common} <Flag src={country?.flags.svg} />
        </Name>
        <SubText>
          Esta visualizando dados de {country?.translations.por.official}
        </SubText>
      </InfoWrapper>
    </Wrapper>
  );
}

export default DetaiBox;
