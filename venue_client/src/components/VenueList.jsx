import axios from 'axios'
import { useEffect } from 'react'
import { useState, uesEffect } from 'react'
import { useNavigate } from 'react-router'

export default function VenueList (props) {

    let navigate = useNavigate()
console.log(props)
    const goToVenue = (venId) => {
        navigate(`/venue/${venId}`)
    }
    const Venue = (props) => {
        return (props.project) ? (
            <div key={props.project.id} onClick={() => goToVenue(props.project.id)}>
            <div className='venues'>
            {props.project.name}
            <img className='venue-image' src={props.project.image_url}></img>
            </div>
        </div>
            
        ) : <h1>Loading Please wait....</h1>

    }
 
    return (
        (!props) ?
        <h1>error</h1> :
        <div>
            <h1>Venue List</h1>
            <div className='grid'>
            {props.venues.map((venue,index) => (
                <div className='venue' onMouseEnter={props.setSelectedVenue(venue)}>
                <Venue project={venue} index={index}/>
                </div>
            ))}</div>
        </div>
    )
}