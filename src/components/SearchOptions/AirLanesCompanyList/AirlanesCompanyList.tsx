import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import AirlineCompanyCheckbox from './AirlineCompanyFilter/AirlineCompanyFilter'

const AirlanesCompanyList = () => {
  const airlinesList  = useTypedSelector(state => state.flightData.airlines)
  return (
    <div className='sort_filter_container'>
      <h3>Авиакомпании</h3>
      <div>
        {
          airlinesList.map(airlinesData => (
            <AirlineCompanyCheckbox  {...airlinesData}/>
          ))
          
        }
      </div>
      </div>
  )
}

export default AirlanesCompanyList