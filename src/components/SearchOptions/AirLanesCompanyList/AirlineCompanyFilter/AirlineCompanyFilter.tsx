import { useDispatch } from "react-redux"
import { IAirlinesInterface } from "../../../../types/types"

const AirlineCompanyCheckbox = (airlineData :IAirlinesInterface) => {
  const {airline, id, isChecked,minPrice} = airlineData
  const dispatch = useDispatch()


  return (
   <div> 
    <input 
      type="checkbox"
      checked = {isChecked}
      onChange = {() => dispatch({type: 'COMPANY_FILTER' , payload: id})}
    />
  <span className="checkbox_airline_label_text"> - {airline} от {minPrice}</span> 
   </div>
  )
}

export default AirlineCompanyCheckbox