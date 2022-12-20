import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
import { useNavigate } from 'react-router'

export default function VenueList(props) {
    let navigate = useNavigate()

    const goToEvent = (eveId) => {
        navigate(`/event/${eveId}`)
    }

    const Event = (props) => {
        const [venue_name, set_venue_name] = useState()

        const getVenueName = async() => {
            const venueName = props.project.venueName
            const pulledVenue = await axios.get(venueName)
            const subStr = venueName.substring(28)
            const pulledVenueIndexed = pulledVenue.data[subStr - 1 ]
            set_venue_name(pulledVenueIndexed.name)
        }
        return (props.project) ? (
            <div key={props.project.id} onClick={() => goToEvent(props.project.id)} onLoad={((e) => getVenueName(props.project))}>
                <div className='events'>
                <h3>Act: {props.project.act}</h3>
                <img className='event-image' src={props.project.image_url}/>
                <h3>Venue: {venue_name}</h3>
                {props.project.date} 
                </div>
            </div>
            
        ) : <h1>Loading Please wait....</h1>
        
    }

    return (
        (!props) ?
        <h1>error</h1> :
        <div>
            <h1>Event List</h1>
            <div className='grid'>
                {props.events.map((event,index)=> (
                    <Event project={event} index={index}/>
                ))}
            </div>
        </div>
    )
}
