import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'

export default function VenueList () {

    const [venues, setVenues] = useState([])
    const getVenues = async () => {
        const response = await axios.get('http://localhost:8000/venues/')
        setVenues(response.data)
    }
    useEffect(()=> {
        getVenues()
    },[])

    return (
        (!venues) ?
        <h1>error</h1> :
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