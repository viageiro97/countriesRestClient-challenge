import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const apiBase = "https://restcountries.com/v3.1";

const fields = [
  "name",
  "capital",
  "region",
  "subregion",
  "population",
  "area",
  "flags",
  "timezones",
  "translations",
].join(",");

const allCountriesUrl = `${apiBase}/all?fields=${fields}`;

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const { data: countries, loading, error } = useFetch(allCountriesUrl);
  const [filterRegion, setFilterRegion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        error,
        filterRegion,
        searchTerm,
        setSearchTerm,
        setFilterRegion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
