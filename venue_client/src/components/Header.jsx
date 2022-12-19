import Nav from "./Nav"
import { useNavigate } from "react-router"

export default function Header (props) {
    let navigate = useNavigate()

    function Home () {
        navigate('/')
    }
    return(
        <div className="header">
        <h1 className="header-text"onClick={(e)=> Home()}>Event Tracker</h1>
        <div className="header-nav">
            <Nav/>
        </div>
        </div>
    )
}