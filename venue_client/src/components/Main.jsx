import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
export default function Main () {
    const [venues, setVenues] = useState([])
    const [events, setEvents] = useState([])
    
    const getVenues = async () => {
        const response = await axios.get('localhost:8000/venues/')
        setVenues(response.data)
        console.log(venues)
    }
    const getEvents = async () => {
        const response = await axios.get('localhost:8000/events/')
        setVenues(response.data)
        console.log(venues)
    }
    useEffect(()=> {
    getVenues()
    },[])
    return (
        <div>
        </div>
    )
}