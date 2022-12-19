import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
import { useNavigate } from 'react-router'

export default function VenueList ({events}) {

    let navigate = useNavigate()

    const goToEvent = (eveId) => {
        navigate(`/event/${eveId}`)
    }

    console.log({events})
    return (
        (!events) ?
        <h1>error</h1> :
        <div>
            <h1>Event List</h1>
                <div className='grid'>
                {events.map((event) => (
                    <div key={event.id} onClick={() => goToEvent(event.id)}>
                        <div className='events'>
                        <h3>Act: {event.act}</h3>
                        <img className='event-image' src={event.image_url}/>
                        <h3>Venue: {event.venueName}</h3>
                        {event.date}
                        </div>
                    </div>
                ))}</div>
        </div>
    )
}