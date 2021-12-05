import React from "react";
import ReactExport from "react-data-export";
import { useAppContext } from "../../../../context/AppContext";
import generateExcelDataSet from "../../../../utils/generateExcelDataSet";

import { SiMicrosoftexcel } from "react-icons/si";
import { ExportBtn } from "../../../../GlobalStyles";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export default function ExportToExcel() {
  const { countries } = useAppContext();
  const dataSet = generateExcelDataSet(countries);

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
