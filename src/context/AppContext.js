import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const ApiUrl =
  "https://restcountries.com/v2/all?fields=name,capital,flag,translations,region,population";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const { data: countries, loading, error } = useFetch(ApiUrl);
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
