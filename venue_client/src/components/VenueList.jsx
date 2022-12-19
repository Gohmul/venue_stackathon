import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
import { useNavigate } from 'react-router'

export default function VenueList ({venues, setVenues}) {

    let navigate = useNavigate()

    // const [venues, setVenues] = useState([])
    // const getVenues = async () => {
    //     const response = await axios.get('http://localhost:8000/venues/')
    //     setVenues(response.data)
    // }
    // useEffect(()=> {
    //     getVenues()
    // },[])


    const goToVenue = (venId) => {
        navigate(`/venue/${venId}`)
    }

    console.log(venues)
    return (
        (!venues) ?
        <h1>error</h1> :
        <div>
            <h1>Venue List</h1>
            {venues.map((x) => (
                <div key={x.id} onClick={() => goToVenue(x.id)}>
                    {x.name}
                </div>
            ))}
        </div>
    )
}