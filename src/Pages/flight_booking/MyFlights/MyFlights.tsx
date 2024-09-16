import { useNavigate, useParams } from "react-router-dom"
import { h2, main, mainChild } from "../../../assets/StyleClasses"
import { BookingInfo, Flights } from "../../../assets/Constants"
import { calculateTimeDifference, FormatDate, GetAirportLocation } from "../../../assets/Functions"
import JourneyCard from "../../../assets/components/JourneyCard"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import FlightCard from "../../../assets/components/FlightCard"
import { format } from "date-fns"
import { InputField } from "../../../assets/components/FormInputs/InputField"
import { BiFilterAlt, BiSearch } from "react-icons/bi"
import { FiFilter } from "react-icons/fi"
import { RiFilterFill } from "react-icons/ri"
import DatePicker from "../../../assets/components/DatePicker"



/*
    PROFILE - first name 
    last name
    gender
    email address
    phone number
    

    BOOKING HISTORY - ALL BOOKED JOURNEYS - CURRENT OR EXPIRED

    LINK TO HOME TO BOOK ANOTHER JOURNEY

    AFTER CLICKING BUY TICKET - IF LOGGEDIN REDIRECT TO PAYMENT ELSE LOGIN


    
*/

const MyFlights = () => {
    const userId = useParams()

    // console.log(userId.id)

    const navigate = useNavigate()

    const user = useSelector((state: RootState) => state.user)

    const sessionToken = user.sessionToken
    const [ filters, setFilters ] = useState({
      status: "All",
      search_input: "",
      date: ""
    })
    


    useEffect(() => {
      if(sessionToken == undefined){
        // navigate(`/Login?Booking/my-journeys`)
      }
    }, [])

    // fetch all bookings where id == user id

    /*
      journey.number of seats booked 
      update userslice.bookedJourneys

      booked journey
      
      fetching all booked journey and passing the id of the journey along with the number of seats booked as a parameter

    */ 

    const Flight_filters = [
      "All",
      "Active",
      "Past",
      "Upcoming"
    ]


    const handleChange = (e:any) => {
      setFilters({
        ...filters,
        [e.target.name] : e.target.value
      })
    }
  return (
    <main id="myFlightPage" className={`${main}`}>

        <div className={`${mainChild}  min-h-screen`}>
            
        
        <section className="center flex-col gap-5 w-full relative">
          <h2 className={`${h2} w-full`}>({Flights.length}) My journey{Flights.length > 1 ? 's' : ""}</h2>

          <div className="flex justify-between items-center flex-col lg:flex-row w-full gap-5">

            <div className="flex items-center gap-4 w-full">

              {/* <DatePicker /> */}

              <InputField 
                value={filters.search_input}
                handleChange={handleChange}
                placeholder="Search Flights"
                type={"string"}
              name={'search_input'}
                icon={<BiSearch />}
                className="w-full"
              />
            </div>

            <div className="flex gap-3 items-center sticky top-[11vh] bg-white py-4 w-full z-10 px-4 rounded-xl">
              {Flight_filters.map((f, i) =>(
                <div key={i} className={`center p-2 min-w-[100px] cursor-pointer transition-all duration-1000 hover:scale-90 uppercase rounded-xl shadow-lg text-sm ${f == filters.status ? "bg-primary font-bold" : "bg-opacity-5 bg-primary hover:bg-primaryFade"}`} 
                onClick={() => {
                  setFilters({
                    ...filters,
                    status : f
                  })
                  document.querySelector('#myFlightPage')?.scrollIntoView({
                    behavior: "smooth"
                  })
                }}>
                  {f}
                </div>
              ))}
            </div>

          </div>

            {/* <>
              <p>
                bookings db structure {'id, user id, flight id, payment id, seats booked / persons who travelled'}
              </p>

              <p>
                fetch flight details from api, once a flight is booked, the details is added to the database
              </p>

              <p>
                flight number - historical for further details of the flight rather than storing on the database
              </p>

              <p>
                a summary of the passengers of the flight
              </p>

              <p>
                real time status of the flight if active
              </p>

              <p>
                cancel flight, reschedule flight, view e-ticket, notifications on the flight
              </p>

              <p>
                also filter by date and destinations
              </p>
            </> */}

          <div className="flex flex-col w-full gap-9 gap-y-16">
            {
              Flights.map((flight, i) =>(
               <FlightCard  
                    key={i} 

                    id={i}  
                    
                    flight_props={flight}  

                    airline={flight?.from}

                    price={flight?.price}

                    departureAirport={flight?.from}

                    departureLocation={GetAirportLocation(flight?.to)}

                    departureIata={"ABV"}
                    
                    // departureDate={FormatDate("01-02-2024")}
                    departureDate={format("01-02-2024", 'd MMM, yyyy')}
                    
                    arrivalLocation={GetAirportLocation(flight?.to)}
                    
                    arrivalIata={"LGA"}
                    
                    arrivalDate={format("01-04-2024", 'd MMM, yyyy')}

                    duration={calculateTimeDifference("12-02-2024", "11-04-2024")}

                > 
                 
                </FlightCard>
              ))
            }
          </div>


          UPDATE MY DETAILS
        </section>
        </div>
    </main>
  )
}

export default MyFlights