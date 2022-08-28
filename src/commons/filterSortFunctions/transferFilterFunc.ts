import { IFlight } from '../../types/DataType/DataType';
import { IFilterTransfer } from "../../types/StoreTypes";


export const transferFilterFunc = ( transfersObj:IFilterTransfer , data:IFlight ): IFlight | undefined  => {
    let filtredTransfer

    if(transfersObj.nonStop ===  transfersObj.oneTransfer ){
        filtredTransfer = data
    } else if ( transfersObj.nonStop === true && transfersObj.oneTransfer === false && data.legs[0].segments.length === 1 && data.legs[1].segments.length === 1) {
        filtredTransfer = data
    } 
    else if ( transfersObj.nonStop === false && transfersObj.oneTransfer === true && (data.legs[0].segments.length === 2 || data.legs[1].segments.length === 2)) {
        filtredTransfer = data
    }

    return filtredTransfer
}



