import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function VenueDetail (props) {

    let { id } = useParams(props.venues)

    const [venueDetails, setVenueDetails] = useState()

    useEffect(() => {
        let selectedVenue = props.venues.find((venue) => venue.id === parseInt(id))
        setVenueDetails(selectedVenue)

    }, [props])

    return (
        (!venueDetails) ?
        <h1>Error</h1> :
        <div>
            <h1>Venue Details</h1>

            <h2>Venue: {venueDetails.name}</h2>
            <img src={venueDetails.image_url}></img>
            <h2>Description: {venueDetails.description}</h2>
            <h2>State: {venueDetails.state}</h2>
            <h2>City: {venueDetails.city}</h2>
            <h2>Street: {venueDetails.street}</h2>
            <div></div>
        </div>
    )
}