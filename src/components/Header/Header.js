import React from "react";
import styled from "styled-components";

import { BsFillMoonFill } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
`;
const Texts = styled.div``;
const MainText = styled.h1``;
const SubText = styled.span`
  display: block;
  font-size: 0.9rem;
  color: #8193a7;
`;

const ThemeToggler = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  span {
    margin-left: 5px;
  }
`;

function Header() {
  return (
    <Wrapper>
      <Texts>
        <MainText>Entao para onde vamos?</MainText>
        <SubText>Visualizou 7 de 54 paises</SubText>
      </Texts>
      <ThemeToggler>
        <BsFillMoonFill />
        <span>Tema escuro</span>
      </ThemeToggler>
    </Wrapper>
  );
}

export default Header;