
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'




const SortTickets = () => {

    const sortValue = useTypedSelector(state => state.flightData.sortValue)
    const dispatch = useDispatch()
        
  return (
    <div className='sort_filter_container'>
      <h3>Сортировать</h3>      
      <div>
        <label>  
            <input 
              type ="radio"
              name ='sort'
              value ='ascendingSort'
              checked = {sortValue === 'ascendingSort' ? true : false}
              onChange = {(e) => dispatch({type: 'SORTING_DATA' , payload: e.target.value })}
              /> - по возростанию цены
        </label>
      </div>
      <div>
        <label>
          <input 
            type="radio"
            name ='sort'
            value ='descendingSort'
            checked = {sortValue === 'descendingSort' ? true : false}
            onChange = {(e) => dispatch({type: 'SORTING_DATA' , payload: e.target.value})} 
            /> - по убыванию цены
        </label>
      </div>  
      <div>
        <label>
          <input 
            type="radio"
            name ='sort'
            value ='travelTimeSort'
            checked = {sortValue === 'travelTimeSort' ? true : false}
            onChange = {(e) => dispatch({type: 'SORTING_DATA' , payload: e.target.value})} 
            /> - по времени в пути
        </label>
      </div>   
    </div>
  )
}

export default SortTickets