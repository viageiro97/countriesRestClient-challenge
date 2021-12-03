import React from "react";
import CountriesList from "../components/CountriesList/CountriesList";
import Filters from "../components/Filters/Filters";

function Home() {
  return (
    <>
      <Filters />
      <CountriesList />
    </>
  );
}

export default Home;
