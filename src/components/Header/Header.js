import React from "react";
import styled from "styled-components";

import { BsFillMoonFill } from "react-icons/bs";

import { SubText } from "../../GlobalStyles";
import { useLocation } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";
import DetaiBox from "./DetailBox/DetailBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e6e6e6;
`;
const Texts = styled.div``;
const MainText = styled.h1`
  @media (max-width: 575.98px) {
    font-size: 1.1rem;
  }
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
  @media (max-width: 400.98px) {
    span {
      display: none;
    }
    font-size: 1rem;
  }
`;

function Header() {
  const { pathname } = useLocation();
  const { countries, loading, error } = useAppContext();

  let country = [];
  const targetCca3 = pathname.replace("/", "").toLowerCase();

  if (!loading && !error) {
    country = countries.filter(
      (element) => element.cca3.toLowerCase() === targetCca3
    );
  }

  return (
    <Wrapper>
      {pathname === "/" ? (
        <Texts>
          <MainText>Qual o seu destino?</MainText>
          <SubText>Obtenha informações de mais de 200 países!</SubText>
        </Texts>
      ) : (
        <DetaiBox country={country[0]} />
      )}
      <ThemeToggler>
        <BsFillMoonFill />
        <span>Tema escuro</span>
      </ThemeToggler>
    </Wrapper>
  );
}

export default Header;
