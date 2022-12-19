import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VenueDetail ({venues}) {

    let { id } = useParams()

    const [venueDetails, setVenueDetails] = useState()

    useEffect(() => {
        let selectedVenue = venues.find((venue) => venue.id === parseInt(id))
        setVenueDetails(selectedVenue)

    }, [venues])

    return (
        (!venueDetails) ?
        <h1>Error</h1> :
        <div>
            <h1>Venue Details</h1>
            
            <img src={venueDetails.image_url}></img>
            <h2>{venueDetails.name}</h2>
            <h2>{venueDetails.street}</h2>
            <h2>{venueDetails.city}</h2>
            <h2>{venueDetails.state}</h2>
            <h2>{venueDetails.description}</h2>
            <div></div>
        </div>
    )
}