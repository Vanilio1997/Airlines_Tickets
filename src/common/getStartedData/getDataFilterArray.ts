import { IFlight } from '../../types/DataType/DataType';
import { IAirlinesInterface } from '../../types/types';

export const getDataFilterArray = (data:IFlight[]) => {
    let filterArr: any[] = []

    data.forEach( flight => {
        if(!filterArr.some(item => item.airline === flight.carrier.caption)){

            console.log(filterArr , flight.carrier.caption)
            filterArr.push({airline:flight.carrier.caption, minPrice: +flight.price.total.amount})
        } 
        else{
            filterArr = filterArr.map(item => {
                if(item.minPrice < +flight.price.total.amount && item.airline === flight.carrier.caption){

                    return {airline:flight.carrier.caption, minPrice: +flight.price.total.amount}
                } else {
                    return item
                }
            })
        }
    })

    const airlineInfoArray = filterArr.map((item:IAirlinesInterface, index:number) => {return {airline: item.airline, minPrice: item.minPrice, id: index, isChecked: false}})
    return airlineInfoArray
}