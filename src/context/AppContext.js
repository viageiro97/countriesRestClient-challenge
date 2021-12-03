import React, { createContext, useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const ApiUrl =
  "https://restcountries.com/v2/all?fields=name,capital,flag,translations,region,population";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const { data: countries, loading, error } = useFetch(ApiUrl);
  const [filterRegion, setFilterRegion] = useState(null); // Para aplicacao de filtros de regiao!
  const [numCountries, setNumCountries] = useState(0);

  return (
    <AppContext.Provider
      value={{
        countries,
        loading,
        error,
        filterRegion,
        setFilterRegion,
        numCountries,
        setNumCountries,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
