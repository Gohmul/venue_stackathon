import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'

export default function VenueList () {

    const [events, setEvents] = useState([])
    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/events/')
        setEvents(response.data)
    }
    useEffect(()=> {
        getEvents()
    },[])

    return (
        <div>
            <h1>Event List</h1>
            {events.map((event) => (
                <div key={event.id}>
                    {event.name}
                </div>

            ))}
        </div>
    )
}