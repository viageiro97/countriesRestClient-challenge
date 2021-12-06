import React from "react";
import styled from "styled-components";

import { Name, SubText, Flag } from "../GlobalStyles";

import { BiArrowBack } from "react-icons/bi";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const BackBtn = styled.div`
  font-size: 1.1rem;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;

const InfoWrapper = styled.div``;

function HeaderFirst() {
  return (
    <Wrapper>
      <BackBtn>
        <BiArrowBack />
      </BackBtn>
      <InfoWrapper>
        <Name>
          Mozambique <Flag src="https://flagcdn.com/pe.svg" />
        </Name>
        <SubText>Visualizou 7 de 54 paises</SubText>
      </InfoWrapper>
    </Wrapper>
  );
}

export default HeaderFirst;
