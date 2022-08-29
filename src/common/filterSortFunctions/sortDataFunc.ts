import { IFlight } from '../../types/DataType/DataType';


export const sortDataFunc = (data:IFlight[],value?: string):IFlight[] => {
    
    switch (value){
        case 'descendingSort':
            return data.sort((b,a)  => +a.price.total.amount - +b.price.total.amount)
        case 'ascendingSort':
            return data.sort((a,b)  => +a.price.total.amount - +b.price.total.amount)
        case 'travelTimeSort':
            return data.sort((a,b) => (a.legs[0].duration + a.legs[1].duration) - (b.legs[0].duration + b.legs[1].duration) )
        default:
            return data
    }
}