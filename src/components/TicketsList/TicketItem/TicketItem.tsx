import React from 'react'
import TicketItemLeg from './TicketItemLeg/TicketItemLeg'
import { IFlight } from '../../../types/DataType/DataType'
import './TicketItem.css'

const TicketItem = ( flightData : IFlight) => {

const price = flightData.price.total.amount
const airline = flightData.carrier.caption

  return (
    <div className='containter' >
      <div className='header_container'>
        <div className="header_container_ticket_info">
          <div className='header_airlane_name'>
            <p>{airline}</p> 
          </div>
          <div className='header_price_info_container'>
            <div className='header_price'>
              {price} ₽
            </div>
            <div className="header_price_description">
              Стоимость для одного взрослого пассажира
            </div>
          </div>
        </div>
      </div>
      <TicketItemLeg  {...flightData.legs[0]}
      />
      <TicketItemLeg {...flightData.legs[1]}
      />
      <div className='show_button_container'>
        <button className='show_button'>Выбрать</button>
      </div>
    </div>
   
  ) 
}

export default TicketItem