import React from "react";
import ReactExport from "react-data-export";
import { useAppContext } from "../../../../context/AppContext";
import generateExcelDataSet from "../../../../utils/generateExcelDataSet";

import { SiMicrosoftexcel } from "react-icons/si";
import { ExportBtn } from "../../../../GlobalStyles";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

export default function ExportToExcel({ countriesIn }) {
  const { countries, filterRegion } = useAppContext();

  let mainDataSet;
  let filteredDataSet;
  let filteredCountries;

  mainDataSet = generateExcelDataSet(countriesIn || countries);

  /*Caso o filtro de regioes esta activo, exporta uma folha com apenas os 
  paises da regiao selecionada, e outra com todos os paises*/
  if (filterRegion) {
    filteredCountries = countries.filter(
      (country) => country.region.toLowerCase() === filterRegion
    );
    filteredDataSet = generateExcelDataSet(filteredCountries);

    return (
      <div>
        <ExcelFile
          filename="Lista de Paises"
          element={
            <ExportBtn>
              <SiMicrosoftexcel /> .xlsx
            </ExportBtn>
          }
        >
          <ExcelSheet
            dataSet={filteredDataSet}
            name={`Paises de ${filterRegion}`}
          />
          <ExcelSheet dataSet={mainDataSet} name="Todos os países" />
        </ExcelFile>
      </div>
    );
  }

  //Se nao tiver o filtro de regioes activo, exporta apenas a folha com todos os paises
  return (
    <div>
      <ExcelFile
        filename="Lista de Paises"
        element={
          <ExportBtn>
            <SiMicrosoftexcel /> .xlsx
          </ExportBtn>
        }
      >
        <ExcelSheet dataSet={mainDataSet} name="Todos os países" />
      </ExcelFile>
    </div>
  );
}
