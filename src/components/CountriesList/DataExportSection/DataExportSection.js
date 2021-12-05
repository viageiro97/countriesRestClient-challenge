import React from "react";

import ExportToExcel from "./ExportToExcel/ExportToExcel";
import ExportToCsvXML from "./ExportToCsvXML/ExportToCsvXml";

import { FaFileCode, FaFileCsv } from "react-icons/fa";
import {
  Wrapper,
  MainText,
  Label,
  ExportDataArea,
  ExportBtnsContainer,
} from "./Styles";

function DataExportSection({ region, countriesNum }) {
  return (
    <Wrapper>
      <MainText>
        Exibindo {region ? `países da(e) ${region}` : "todos os países"} (
        {countriesNum} Paises)
      </MainText>
      <ExportDataArea>
        <Label>Exportar dados dos países em formato: </Label>
        <ExportBtnsContainer>
          <ExportToExcel />
          <ExportToCsvXML format="csv">
            <FaFileCsv /> .csv
          </ExportToCsvXML>
          <ExportToCsvXML format="xml">
            <FaFileCode /> .xml
          </ExportToCsvXML>
        </ExportBtnsContainer>
      </ExportDataArea>
    </Wrapper>
  );
}

export default DataExportSection;
