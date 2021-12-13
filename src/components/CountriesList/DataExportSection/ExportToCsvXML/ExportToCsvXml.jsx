import React from "react";
import exportFromJSON from "export-from-json";
import { useAppContext } from "../../../../context/AppContext";
import generateCsvXmlDataset from "../../../../utils/generateCsvDataset";
import { ExportBtn } from "../../../../GlobalStyles";

export default function ExportToCsvXml({ format, children }) {
  let { countries, filterRegion } = useAppContext();

  if (filterRegion) {
    countries = countries.filter(
      (country) => country.region.toLowerCase() === filterRegion
    );
  }

  const { fields, data } = generateCsvXmlDataset(countries);

  const fileName = filterRegion
    ? `Paises de ${filterRegion}`
    : `Paises do Mundo`;
  const exportType = format;

  function onClick() {
    exportFromJSON({ data, fileName, fields, exportType });
  }

  return <ExportBtn onClick={onClick}>{children}</ExportBtn>;
}
