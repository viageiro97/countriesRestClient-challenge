import React from "react";
import styled from "styled-components";

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
const MainText = styled.h1``;

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
    </Wrapper>
  );
}

export default Header;
