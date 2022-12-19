import "./App.css";
import VenueList from "./components/VenueList";
import EventList from "./components/EventList";

function App() {
  return (
    <div className="App">
      <h1>Venue_Stackathon</h1>
      <VenueList />
      <EventList />
    </div>
  );
}

export default App;
