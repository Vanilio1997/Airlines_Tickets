import React from 'react'
import AirLanesCompanyList from './AirLanesCompanyList'
import FilterByPrice from './FilterByPrice'
import FilterByTransfers from './FilterByTransfers'
import SortTickets from './SortTickets'
import './SeacrhOptions.css'

const SearchOptions = () => {
  return (
    <div>
      <SortTickets />
      <FilterByTransfers />
      <FilterByPrice />
      <AirLanesCompanyList />
    </div>
  )
}

export default SearchOptions