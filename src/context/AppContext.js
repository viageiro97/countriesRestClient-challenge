import React, { createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const ApiUrl =
  "https://restcountries.com/v2/all?fields=name,capital,flag,translations,region,population";
const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppContextProvider({ children }) {
  const { data: countries, loading, error } = useFetch(ApiUrl);
  const { filterArea, a } = useState("ola mundo"); // Para aplicacao de filtros de regia!

  return (
    <AppContext.Provider value={{ countries, loading, error, filterArea, a }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
