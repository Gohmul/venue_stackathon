import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function EventDetail ({events}) {

    let { id } = useParams()

    const [eventDetails, setEventDetails] = useState()

    useEffect(() => {
        let selectedEvent = events.find((event) => event.id === parseInt(id))
        setEventDetails(selectedEvent)

    }, [events])
console.log(events)
    return (
        (!eventDetails) ?
        <h1>Error</h1> :
        <div>
            <h1>Event Details</h1>
            <h2>Act: {eventDetails.act}</h2>
            <img src={eventDetails.image_url}></img>
            <h2>Desc: {eventDetails.description}</h2>
            <h2>{eventDetails.date}</h2>
            <div></div>
        </div>
    )
}