import { useEffect, useState } from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import TicketItem from './TicketItem'
import './TicketList.css'

const TicketsList = () => {
    const [numberOfTickets , setNumberOfTickets] =useState(2) 
    const flightsData = useTypedSelector(store => store.flightData.filtredData)
    const sortValue = useTypedSelector(store => store.flightData.sortValue)
    const showTicketsArr = []

    for (let i = 0 ; i< numberOfTickets; i++){
        showTicketsArr.push(flightsData[i])
    }
    console.log(numberOfTickets)

    useEffect( ()=>{
       
    }, [sortValue])

    return (
        <div>
            <div>
            {
                showTicketsArr.map( (flightData) => (
                     <TicketItem {...flightData} />
                ))
            }
            </div>
            <div className='show_more_btn_container'> 
                <button className='show_more_btn' onClick={() => setNumberOfTickets(numberOfTickets + 2) }>Показать ещё</button>
            </div>
        </div>
    )
}

export default TicketsList