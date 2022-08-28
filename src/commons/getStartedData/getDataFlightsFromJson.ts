import { IFlight } from '../../types/DataType/DataType';
import { IFlights } from '../../types/DataType/DataType';

export const getDataFlights = (flightsJSONData : any ):IFlight[] =>  {
     const flightsArr =  flightsJSONData.result.flights.map((flightInfo : IFlights) =>  flightInfo.flight )
     return flightsArr
}