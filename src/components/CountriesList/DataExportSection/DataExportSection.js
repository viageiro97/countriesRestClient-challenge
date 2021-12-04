import React from "react";
import { SiMicrosoftexcel } from "react-icons/si";
import { FaFileCsv } from "react-icons/fa";
import styled from "styled-components";
import { BsFileEarmarkCode } from "react-icons/bs";
import ExportToExcel from "../../ExportToExcel";

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
          <ExportToExcel />
        </ExportBtnsContainer>
      </ExportDataArea>
    </Wrapper>
  );
}

export default DataExportSection;
