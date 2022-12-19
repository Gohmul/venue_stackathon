import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
import { Routes,Route } from 'react-router-dom'
import VenueList from './VenueList'
import EventList from './EventList'
import VenueDetail from './VenueDetail'
import EventDetail from './EventDetail'

export default function Main () {

    const [venues, setVenues] = useState([])
    const [events, setEvents] = useState([])
    
    const getVenues = async () => {
        const response = await axios.get('http://localhost:8000/venues/')
        setVenues(response.data)
        // console.log(`venues ${venues}`)
    }

    const getEvents = async () => {
        const response = await axios.get('http://localhost:8000/events/')
        setEvents(response.data)
        console.log(`events ${events}`)
    }

    useEffect(()=> {
        getVenues()
        getEvents()
    },[])

    
    return (
        <div className='App-main'>
            <Routes>
                <Route path="/venues" element={<VenueList venues={venues} setVenues={setVenues}/>}/>
                <Route path="/events" element={<EventList/>}/>
                <Route path="/venue/:id" element={<VenueDetail venues={venues}/>}/>
                <Route path="/event/:id" element={<EventDetail/>}/>
            </Routes>
        </div>
    )
}