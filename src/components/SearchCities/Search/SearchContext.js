import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export function useSearch() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchResults, setSearchResults] = useState([]);
  const [isUpdateResultsClicked, setIsUpdateResultsClicked] = useState(false); // Ajout de isUpdateResultsClicked

  return (
    <SearchContext.Provider value={{ searchResults, setSearchResults, isUpdateResultsClicked, setIsUpdateResultsClicked }}>
      {children}
    </SearchContext.Provider>
  );
}
