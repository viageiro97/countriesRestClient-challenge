import React from "react";
import exportFromJSON from "export-from-json";
import { useAppContext } from "../../../../context/AppContext";
import generateCsvXmlDataset from "../../../../utils/generateCsvDataset";
import { ExportBtn } from "../../../../GlobalStyles";

export default function ExportToCsvXml({ format, children }) {
  const { countries } = useAppContext();
  const { fields, data } = generateCsvXmlDataset(countries);

  const fileName = "Paises";
  const exportType = format;

  function onClick() {
    exportFromJSON({ data, fileName, fields, exportType });
  }

  return <ExportBtn onClick={onClick}>{children}</ExportBtn>;
}
