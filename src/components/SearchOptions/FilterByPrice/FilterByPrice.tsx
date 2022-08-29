import React from 'react'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'


const FilterByPrice = () => {
  const dispatch  = useDispatch()
  const minInputValue = useTypedSelector(state => state.flightData.filterPrice.min)
  const maxInputValue = useTypedSelector(state => state.flightData.filterPrice.max)
  return (
    <div className='sort_filter_container'>
        <h3>Цена</h3>
        <div className='filter_price_input'>От <input 
          value = {minInputValue}
          onChange = {(e) => dispatch({type:'PRICE_FILTER' , payload:{min:e.target.value, max: maxInputValue}}) }
        /></div>
        <div className='filter_price_input'>До <input
          value={maxInputValue}
          onChange = {(e) => dispatch({type:'PRICE_FILTER' , payload:{min:minInputValue, max: e.target.value}}) }
        /></div>
    </div>
  )
}

export default FilterByPrice