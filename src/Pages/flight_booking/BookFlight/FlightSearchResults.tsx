import FlightCard, { flight } from '../../../assets/components/FlightCard'
import { h2 } from '../../../assets/StyleClasses'
import { Flights } from '../../../assets/Constants'
import { Airports } from '../../../assets/Airports'
import { useSelector } from 'react-redux'
import { RootState } from '../../../assets/store/AppStore'
import { FiFilter } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { RadioSelect } from '../../../assets/components/FormInputs/RadioSelect'
import { Button } from '../../../assets/components/utils/Button'
import { FC } from "react"
import { FormatDate, GetAirportLocation, calculateTimeDifference } from "../../../assets/Functions"



export const FlightSearchResults:FC<any> = ({fetched_flights}) => {
    // useEffect(() => {
    //     console.log("results")
    //     // console.log(airports)
    //     console.log("results")
    // }, [])

    const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)

  return (
    <section id="searchResults" className="center flex-col  gap-9 pt-[10vh] w-11/12">
        {
            fetched_flights.length > 0 ?
            <>
                <div className="flex flex-col lg:items-center w-full gap-4 lg:flex-row lg:flex-wrap">

                    <h2 className={`${h2} w-full lg:w-fit`}>({fetched_flights.length}) Available Flight{fetched_flights.length > 1 ? 's' : ""} </h2>

                    <div className="w-full lg:w-fit ">
                        From <span className='font-bold'>{FlightSlice.from}</span> to <span className="font-bold">{FlightSlice.to}</span>
                    </div>

                </div>

                <div className="flex w-full gap-9 relative">

                    <FlightSearchFilters />
                    
                    <div className="flex flex-col gap-6 w-full">
                        <div className="grid md:grid-co ls-2 lg:grid-co ls-3 w-full gap-9 lg:gap-6 xl:gap-9 gap-y-16">

                        {   
                            // fetched_flights < 1 ?
                            fetched_flights.map((flight : any , i : number) =>(
                                <div key={i}>  
                                    <FlightCard  
                                        id={i}  

                                        flight_props={flight}  
                                        
                                        airline={flight?.airline?.name}

                                        price={flight?.price}

                                        departureAirport={flight?.departure?.airport}

                                        departureLocation={GetAirportLocation(flight?.departure?.Location)}

                                        departureIata={flight?.departure?.iata}
                                        
                                        departureDate={FormatDate(flight?.departure?.scheduled)}

                                        arrivalLocation={GetAirportLocation(flight?.arrival?.Location)}
                                        
                                        arrivalIata={flight?.arrival?.iata}
                                        
                                        arrivalDate={FormatDate(flight?.arrival?.scheduled)}

                                        duration={calculateTimeDifference(flight?.departure?.scheduled, flight?.arrival?.scheduled)}

                                    />
                                </div>
                            )) 

                            // : 
                            // <div className="text-3xl font-bold">Hello world{fetched_flights.length}</div>
                        }
                        {/* {
                            Flights.map(flight =>(
                            <FlightCard 
                                key={flight.id} 
                                flight_props={flight} 
                                button_text={"Book Now"}
                            />
                            ))
                        } */}
                        </div>
                    </div>
                </div>
            </> : 
            <div className="font-bold uppercase text-xl mt-9">
                No flight found
            </div>
        }
    
  </section>
  )
}


interface flightFiltersInterface {
    stops: number | string,
    airlines: any[],
    flexibility: string
    preference: string
}
const stops = [0, 1, "1+"]

const airlines = [
    "Muritala",
    "Murital",
    "Murita",
    "Murit"
]

export const FlightSearchFilters = () => {
    const [ filters, setFilters ] = useState<flightFiltersInterface>({
        stops: -1,
        airlines: [""],
        flexibility: "",
        preference: ""
    })
    
    return(
        <div className="flex flex-col h-fit w-4/12 p-2 stic ky t op-[15vh] relative">
            <div className="absolute top-0 left-0 bg-gradient-to-tr from-secondary to-primary opacity-30 h-full w-full z-0 rounded-xl"></div>
            filter with arrival time and departure time

            <div className="bg-white h-full w-full rounded-lg z-10 p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold uppercase ">Filter</h3> 
                    <FiFilter />
                </div>
                
                <p className='text-sm'>Flight Prices</p>
                
                
                

               <div className="flex flex-col gap-3 my-5">
                    <div className="flex flex-wrap gap-3 items-center">
                        <RadioSelect 
                            options={["Fastest", "Cheapest", "Recommended"]}
                            formInputs={filters}
                            name="preference"
                            setFormInputs={setFilters}
                            
                        />

                    </div>                
               </div>


               <div className="flex flex-col gap-3">
                    <h3 className='uppercase text-secondaryFade font-bold'>Stops</h3>

                    <div className="flex flex-wrap gap-3 items-center">
                        {
                            stops.map((a, i) => (
                                <div key={i} className={`rounded size-9  ${filters.stops == a ? "bg-primary border-none font-bold" : ""} shadow border border-secondary center border-opacity-30 cursor-pointer transition-all duration-500`} onClick={() => {
                                    setFilters({
                                        ...filters,
                                        stops: a
                                    })
                                }}>
                                    {a}
                                </div>                      
                            ))
                        }
                    </div>                
               </div>

               <div className="flex flex-col gap-3 my-5">
                    <h3 className='uppercase text-secondaryFade font-bold'>Flexibility</h3>

                    <div className="flex flex-wrap gap-3 items-center">
                        <RadioSelect 
                            options={["Refundable", "Non-refundable"]}
                            formInputs={filters}
                            name="flexibility"
                            setFormInputs={setFilters}
                            
                        />

                    </div>                
               </div>


               <div className="flex flex-col gap-3 w-full">
                    <h3 className='uppercase text-secondaryFade font-bold'>Airlines</h3>

                    <div className="flex flex-wrap gap-3 flex-col items-center w-full">
                        {
                            airlines.map((airline, i) => (
                                <div key={i} className="flex items-center gap-2 w-full cursor-pointer">
                                    <input type="checkbox" checked={filters.airlines.includes(airline)} name={airline} id="" 
                                    onChange={() => {
                                        if(filters.airlines.includes(airline)){
                                            const newList = filters.airlines.filter(a => a !== airline)
                                            setFilters({
                                                ...filters,
                                                airlines: newList
                                            })
                                        }else{
                                            setFilters({
                                                ...filters,
                                                airlines: [...filters.airlines, airline]
                                            })
                                        }
                                    }}/>
                                    <label htmlFor={airline}>{airline}</label>
                                </div>
                            ))
                        }
                    </div>                
               </div>

                <div className="mt-4" onClick={() => {
                    setFilters({
                        stops: -1,
                        airlines: [""],
                        flexibility: "",
                        preference: ""
                    })
                }}>
                    <Button 
                        text='Clear All'
                        className='bg-secondary text-gray-100'
                    />
                </div>

            </div>
        </div>
    )
}














{/* 
    ********FOR FLIGHT CARD***************
    airline name - Y
    airline logo - N
    amount - N    
    airport name - Y - arrival and departure
    departure - Y
    arrival - Y
    takeofftime - Y
    arrivaltime - Y
    stops - N 
    code for takeoff and arrival - Y
    total duraion - Y - arrival - takeoff

    refundable?
*/}

{/*

    aircraft: null,
    
    airline: {
        name: 'Thai Airways International', 
        iata: 'TG', 
        icao: 'THA'
    },
    arrival: {
        actual : null
        actual_runway : null
        airport : "Suvarnabhumi International"
        baggage : "19"
        delay : null
        estimated : "2024-09-11T06:15:00+00:00"
        estimated_runway : null
        gate : null
        iata : "BKK"
        icao : "VTBS"
        scheduled : "2024-09-11T06:15:00+00:00"
        terminal : null
        timezone : "Asia/Bangkok"
    },
    departure : {
        actual : null
        actual_runway : null
        airport : "Hyderabad Airport"
        delay : null
        estimated : "2024-09-11T01:10:00+00:00"
        estimated_runway : null
        gate : "25A"
        iata : "HYD"
        icao : "VOHS"
        scheduled : "2024-09-11T01:10:00+00:00"
        terminal : "MAIN"
        timezone : "Asia/Kolkata"
    },
    
    flight : {
        codeshared : null
        iata : "TG330"
        icao : "THA330"
        number : "330"
    },
    
    flight_date : "2024-09-11"
    flight_status : "scheduled"
    live : null

*/}




{/* <>
    FILTERS <br />
    Fastest flights, cheapest <br />
    No of stops    <br />
    Flight duration    <br />


    Filter airlines <br />

    Filters <br />

    Fare calendar - depature date, arrival date & price
    Price range<br />
    fares calendar <br />
    Depature and arrival time <br />
    </> */}


    {/* is ticket refundable or changeable - on flight card<br />

    FLIGHT DETAILS PAGE <br />
    Seats, Meal & more Cabin features / Extra packages - wi-fi, in-seat power <br />
    Baggage inclusion <br />


    if is round trip - specify on card if na depart or return <br /> 
    
    
    
    
    
    
    */}