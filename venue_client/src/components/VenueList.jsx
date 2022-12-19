import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'

export default function VenueList () {

    const [venues, setVenues] = useState([])

    useEffect(()=> {
        const getVenues = async () => {
            const response = await axios.get('localhost:8000/venues/')
            setVenues(response.data)
        }
        getVenues()
        console.log(venues)
    },[])

    return (
        <div>
            <h1>Venue List</h1>
            {venues.map((x) => (
                <div key={x.id}>
                    {x.name}
                </div>

            ))}
        </div>
    )
}