import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
export default function Nav () {
    let navigate = useNavigate()
    return(
       <div className="nav">
           <Link to="/">
               <h2 className="nav-item1">Home</h2>
           </Link>
           <Link to="/venues">
               <h2 className="nav-item2">Venues</h2>
           </Link>
           <Link to="/events">
               <h2 className="nav-item3">Events</h2>
           </Link>

           <Link onClick={(e)=> navigate(-1)}>
               <h2 className="nav-item4">Back</h2>
           </Link>
       </div>
    )
}