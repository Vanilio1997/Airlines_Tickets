import { IFlight } from "./DataType/DataType"
import { IFilterTransfer } from "./StoreTypes"


export interface IPropsTicketItemInterface {
    data: IFlight
}

export interface IAction {
    type: string
    payload: any
}

export interface ISetTimesInterface {
    day: number
    hour: number
    minutes: number | string
    month: string
    weekDay: string
}

export interface ISetSegmentsFuncInterface {
    legsNum: 0 | 1  
}

export interface IResultFlyObject {
    firstFlyResult: string
    secondFlyResult: string
}

export interface IAirlinesInterface {
    airline: string
    id: number
    isChecked: boolean
}

export interface IMainSortFilterFuncInterface {
    data: IFlight[]
    transfersObj: IFilterTransfer
    airlineArr: IAirlinesInterface[]
    minPrice: number 
    maxPrice: number
    airlineCompanyId?: number
    sortValue?: string
}

export interface IMainSortFilterFuncReturnInterface {
    flights: IFlight[]
    airlines: IAirlinesInterface[]
}