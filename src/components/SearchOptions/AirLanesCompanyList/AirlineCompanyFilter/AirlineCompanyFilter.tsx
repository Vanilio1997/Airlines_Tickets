import { useDispatch } from "react-redux"
import { IAirlinesInterface } from "../../../../types/types"

const AirlineCompanyCheckbox = (airlineData :IAirlinesInterface) => {
  const {airline, id, isChecked} = airlineData
  const dispatch = useDispatch()
  return (
   <div> 
    <input 
      type="checkbox"
      checked = {isChecked}
      onChange = {() => dispatch({type: 'COMPANY_FILTER' , payload: id})}
    />
    {airline}
   </div>
  )
}

export default AirlineCompanyCheckbox