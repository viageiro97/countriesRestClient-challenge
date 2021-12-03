import React from "react";
import CountriesList from "../components/CountriesList/CountriesList";
import DataExportSection from "../components/DataExportSection/DataExportSection";
import Filters from "../components/Filters/Filters";

function Home() {
  return (
    <>
      <Filters />
      <DataExportSection />
      <CountriesList />
    </>
  );
}

export default Home;
