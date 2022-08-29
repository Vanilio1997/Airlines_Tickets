import { IAction } from '../../types/types';
import { IStoreInterface } from '../../types/StoreTypes';
import { getDataFlights } from "../../common/getStartedData/getDataFlightsFromJson"
import  dataJson from '../../data/flights.json'
import { sortDataFunc } from '../../common/filterSortFunctions/sortDataFunc';
import { getDataFilterArray } from '../../common/getStartedData/getDataFilterArray';
import { mainSortFiltrFunc } from '../../common/filterSortFunctions/mainSortFiltrFunc';

const dataFlights = getDataFlights(dataJson)
const dataAirlines = getDataFilterArray(dataFlights)
let initialState: IStoreInterface = {
    dataFlights: dataFlights,
    filtredData: dataFlights,
    filterPrice: { min: 0 , max: 200000 },
    filterTransfer: {nonStop: false , oneTransfer: false},  
    airlines: dataAirlines,
    sortValue: '',
}

export const dataReducer = (state = initialState , action:IAction) :IStoreInterface => {
    switch(action.type){
        case 'SORTING_DATA': 
            const newSortedData = sortDataFunc(state.filtredData, action.payload )
            return {...state, sortValue: action.payload , filtredData: newSortedData}
        case 'FILTER_TRANSFER': {
            const {flights} = mainSortFiltrFunc
            (
                { 
                    data:state.dataFlights, 
                    airlineArr: state.airlines , 
                    maxPrice: state.filterPrice.max, 
                    minPrice: state.filterPrice.min ,
                    transfersObj: action.payload, 
                    sortValue:state.sortValue 
                }
            )

            return{...state, filterTransfer: action.payload , filtredData: flights}
        }
        case 'PRICE_FILTER': {
            const {flights} = mainSortFiltrFunc(
                { 
                    data:state.dataFlights, 
                    airlineArr: state.airlines, 
                    maxPrice: action.payload.max, 
                    minPrice: action.payload.min,
                    transfersObj: state.filterTransfer,
                    sortValue:state.sortValue
                }
            )
            
            return{...state,
                filtredData: flights,
                filterPrice: {min: action.payload.min , max :action.payload.max} }
        }
        case 'COMPANY_FILTER':
            const {flights, airlines} =  mainSortFiltrFunc
            (
                {
                    data:state.dataFlights,
                    airlineArr: state.airlines ,
                    maxPrice: state.filterPrice.max,
                    minPrice: state.filterPrice.min,
                    transfersObj: state.filterTransfer,
                    sortValue:state.sortValue,
                    airlineCompanyId:action.payload
                }
            )
            
            return {...state , airlines: airlines, filtredData: flights}
        default: 
            return state
    }

}