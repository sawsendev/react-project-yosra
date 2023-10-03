import React from 'react'
import Search from './Search/Search'
 import Cribes from './Cribes/Cribes'
 import { SearchProvider } from './Search/SearchContext'

const SearchCities = () => {
  return (
   
    <SearchProvider>
      <div>
        <Search />
        <Cribes />
      </div>
    </SearchProvider>
     

  )
}

export default SearchCities
