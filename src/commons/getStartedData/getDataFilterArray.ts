import { IFlight } from '../../types/DataType/DataType';

export const getDataFilterArray = (data:IFlight[]) => {
    let filterArr: string[] | any = []
    data.forEach( flight => {
        if(!filterArr.includes(flight.carrier.caption)){
            filterArr.push(flight.carrier.caption)
        }
    })
    filterArr = filterArr.map((item:string, index:number) => {return {airline: item , id: index , isChecked: false}})
    return filterArr
}