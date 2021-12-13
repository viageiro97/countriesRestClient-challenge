import React from "react";
import CountriesList from "../components/CountriesList/CountriesList.jsx";
import Filters from "../components/Filters/Filters.jsx";

function Home() {
  return (
    <>
      <Filters />
      <CountriesList />
    </>
  );
}

export default Home;
