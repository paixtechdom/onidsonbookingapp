import FlightCard from '../../../assets/components/FlightCard'
import { h2 } from '../../../assets/StyleClasses'
import { Flights } from '../../../assets/Constants'

export const FlightSearchResults = ({}) => {
  return (
    <section id="searchResults" className="center flex-col  gap-9 mt-9 w-full">
    <h2 className={`${h2} w-full`}>({Flights.length}) Available Flight{Flights.length > 1 ? 's' : ""}</h2>

    AIRLINES <br />
        FLIGHT CARDS <br />
            HIDE SOME AND PROVIDE SEE MORE BUTTON <br />

    <div className="flex flex-col gap-6 w-full">

        <div className="flex items-center w-full">
            <h2 className='text-xl font-bold'>Name of Airline</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-9 lg:gap-6 xl:gap-9 gap-y-16">
        {
            Flights.map(flight =>(
            <FlightCard 
                key={flight.id} 
                flight_props={flight} 
                button_text={"Book Now"}
            />
            ))
        }
        </div>
    </div>
  </section>
  )
}
