import { IAirlinesInterface } from '../../types/types';
import { IFlight } from '../../types/DataType/DataType';
import { airlineFilterFunc} from "./airlineFilterFunc"
import { priceFilterFunc } from "./priceFilterFunc"
import { transferFilterFunc } from "./transferFilterFunc"
import { sortDataFunc } from './sortDataFunc';
import { IMainSortFilterFuncInterface } from '../../types/types';
import { IMainSortFilterFuncReturnInterface } from '../../types/types';

export const mainSortFiltrFunc = ({data, transfersObj , airlineArr, minPrice, maxPrice,airlineCompanyId, sortValue}:IMainSortFilterFuncInterface ): IMainSortFilterFuncReturnInterface=> {
    let flightsArray:IFlight[] = []
    let airlinesArray: IAirlinesInterface[] = airlineArr 

    data.forEach( (flight : IFlight) => {
        if(airlineFilterFunc(flight, airlineArr, airlineCompanyId ) &&  transferFilterFunc(transfersObj, flight) && priceFilterFunc(flight , minPrice, maxPrice)){
            flightsArray.push(flight)
        }     
    })

    if( airlineCompanyId || airlineCompanyId ===0 ) {
        airlinesArray =  airlineArr.map(airline => {  
            if(airline.id === airlineCompanyId){
                return ({...airline , isChecked: !airline.isChecked})
            } else {
                return airline
            }
           
        })}
  

    return {flights:sortDataFunc(flightsArray , sortValue) , airlines:airlinesArray}
}