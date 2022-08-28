import React from 'react'
import { ILegs, ICarrier } from '../../../../types/DataType/DataType'
import { setTimes ,parseFlyDuration } from '../../../../commons/utilits/setTimes'
import './TicketItemLeg.css'

const TicketItemLeg = (legFlightData: ILegs , currentAirline: string) => {

const lastSegmentsElem = () => legFlightData.segments.length - 1

const airline = legFlightData.segments[0].airline.caption
const isTransfer = legFlightData.segments.length
const depatureTime = setTimes(legFlightData.segments[0].departureDate)
const arrivalTime = setTimes(legFlightData.segments[lastSegmentsElem()].arrivalDate)
const flyDuration = parseFlyDuration(legFlightData.duration)


const getDepartureCity  = (): string => legFlightData.segments[0].departureCity 
? 
    legFlightData.segments[0].departureCity.caption 
: 
    legFlightData.segments[0].departureAirport.caption

const getArrivalCity = (): string  =>  legFlightData.segments[lastSegmentsElem()].arrivalCity
? 
    legFlightData.segments[lastSegmentsElem()].arrivalCity.caption 
: 
    legFlightData.segments[lastSegmentsElem()].arrivalAirport.caption

const getDepartureAirport = (): ICarrier => legFlightData.segments[0].departureAirport
const getArrivalAirport = (): ICarrier  =>  legFlightData.segments[lastSegmentsElem()].arrivalAirport 

  return (
    <div className='ticket_info_container'>
        <div className='ticket_way_info_container'>
            {getDepartureCity()}, {getDepartureAirport().caption} <span className='blue_color'>({getDepartureAirport().uid}) → </span> 
            {getArrivalCity()}, {getArrivalAirport().caption} <span className='blue_color'>({getArrivalAirport().uid}) </span>  
        </div>
        <div className='time_info_container'>
            <div> {depatureTime.hour}:{depatureTime.minutes} <span className='blue_color'>{depatureTime.day} {depatureTime.month}. {depatureTime.weekDay}</span></div>
            <div>🕑{flyDuration}</div>
            <div>{arrivalTime.hour}:{arrivalTime.minutes} <span className='blue_color'>{arrivalTime.day} {arrivalTime.month}. {arrivalTime.weekDay}</span> </div>
       </div>
       <div className='transfer_container'>
       {
        isTransfer === 2
        ?
        <div className='line_transfer_container'>
        <div className='line_transfer' />
        <div className='transfer_number'>1 пересадка</div>
        <div className='line_transfer' />
        </div>
        :   
        <div className='line_transfer' />
       }    
       </div > 
       <p className='selection_airline'>Рейс выполняет: {airline}</p>
    </div>
  )
}

export default TicketItemLeg