import React from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'



const FilterByTransfers = () => {

  const dispatch = useDispatch()
  const nonStop =  useTypedSelector(state => state.flightData.filterTransfer.nonStop)
  const oneTransfer =  useTypedSelector(state => state.flightData.filterTransfer.oneTransfer)
  
  return (
    <div className='sort_filter_container'>
      <h3>Фильтровать</h3>
      <div> 
        <input 
          type="checkbox"
          checked = {oneTransfer}
          onChange = {() =>  dispatch({type:'FILTER_TRANSFER' , payload: {nonStop: nonStop , oneTransfer: !oneTransfer}})}
        /> 
       - 1 пересадка 
      </div> 
      <div>
        <input 
          type="checkbox" 
          checked = {nonStop} 
          onChange = {() => dispatch({type:'FILTER_TRANSFER' , payload: {nonStop: !nonStop , oneTransfer: oneTransfer}})}
        /> 
        - без пересадок
      </div> 
    </div>
  )
}

export default FilterByTransfers