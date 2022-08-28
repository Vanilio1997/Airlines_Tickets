import { IFlight } from "../../types/DataType/DataType"
import { IAirlinesInterface } from "../../types/types"

export const airlineFilterFunc = (data:IFlight, airlinesList: IAirlinesInterface[] , id?:number) => {
    let airlines: IAirlinesInterface[] = airlinesList
    let filtredAirline 
    let selectedAirlinesCounter = 0
 
    if( id !== undefined){
        airlines =  airlinesList.map(airline => {  
 
            if(airline.id === id){
                return ({...airline , isChecked: !airline.isChecked})
            } else {
                return airline
            }
           
        })}
    
        airlines.forEach( airline => {
            if(airline.isChecked){
                selectedAirlinesCounter++
            }
        })
    
    for (let k = 0; k<airlines.length; k++){
        if(data.carrier.caption === airlines[k].airline && airlines[k].isChecked){
            filtredAirline = data   
        }
    }    
    if(selectedAirlinesCounter === 0){
        filtredAirline = data
    }

    return  filtredAirline                                                            
}