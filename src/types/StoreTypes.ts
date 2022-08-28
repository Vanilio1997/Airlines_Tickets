import { IFlight } from "./DataType/DataType"
import { IAirlinesInterface } from "./types"

export interface IFilterTransfer {
    nonStop: boolean,
    oneTransfer: boolean
}


export interface IStoreInterface {
    dataFlights: IFlight[] 
    filtredData: IFlight[] | []
    filterPrice: {min: number , max: number}
    filterTransfer: IFilterTransfer
    airlines: IAirlinesInterface[]
    sortValue: string
}



export interface IRootStoreInterface {
    flightsData: IStoreInterface
}