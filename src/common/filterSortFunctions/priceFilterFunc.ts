import { IFlight } from "../../types/DataType/DataType";

export const priceFilterFunc = (data: IFlight , min:number, max:number): IFlight | undefined => {
    
    let fitredPrice 
    if( +data.price.total.amount >= +min && +data.price.total.amount <= +max ){
        fitredPrice = data
    }

    return fitredPrice
}