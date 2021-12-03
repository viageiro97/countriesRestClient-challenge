import React from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";
import styled from "styled-components";
import { BsFileEarmarkCode } from "react-icons/bs";

const Wrapper = styled.div`
  margin-bottom: 20px;
`;
const MainText = styled.h2`
  margin-bottom: 15px;
`;
const ExportDataArea = styled.div`
  display: flex;
`;
const Label = styled.span`
  display: block;
  margin-right: 5px;
`;

const ExportBtnsContainer = styled.div`
  display: flex;
`;
const ExportBtn = styled.button`
  display: flex;
  margin-right: 15px;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  border: 2px solid dodgerblue;
  align-items: center;
  padding: 5px 10px;
  svg {
    font-size: 1rem;
    margin-right: 5px;
  }

  &:hover {
    background: dodgerblue;
    color: white;
  }
`;
function DataExportSection({ region = "WE", countriesNum = 23 }) {
  return (
    <Wrapper>
      <MainText>
        Exibindo {region ? `paises da(e) ${region}` : "todos os paises"} (
        {countriesNum} Paises)
      </MainText>
      <ExportDataArea>
        <Label>Exportar dados dos paises em formato: </Label>
        <ExportBtnsContainer>
          <ExportBtn>
            <SiMicrosoftexcel /> .xls
          </ExportBtn>
          <ExportBtn>
            <FaFileCsv /> .csv
          </ExportBtn>
          <ExportBtn>
            <BsFileEarmarkCode /> .xml
          </ExportBtn>
        </ExportBtnsContainer>
      </ExportDataArea>
    </Wrapper>
  );
}

export default DataExportSection;
