import React from "react";
import ReactExport from "react-data-export";
import styled from "styled-components";
import { SiMicrosoftexcel } from "react-icons/si";
import generateDataSet from "../utils/generateExcelDataSet";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

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

export default function ExportToExcel() {
  const dataSet = generateDataSet();
  return (
    <div>
      <ExcelFile
        filename="Paises"
        element={
          <ExportBtn>
            <SiMicrosoftexcel /> .xlsx
          </ExportBtn>
        }
      >
        <ExcelSheet dataSet={dataSet} name="Lista de Paises" />
      </ExcelFile>
    </div>
  );
}
