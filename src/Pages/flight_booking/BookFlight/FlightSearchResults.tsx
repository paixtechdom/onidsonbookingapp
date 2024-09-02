import FlightCard, { flight } from '../../../assets/components/FlightCard'
import { h2 } from '../../../assets/StyleClasses'
import { Flights } from '../../../assets/Constants'
import { useSelector } from 'react-redux'
import { RootState } from '../../../assets/store/AppStore'
import { FiFilter } from 'react-icons/fi'
import { useState } from 'react'
import { RadioSelect } from '../../../assets/components/FormInputs/RadioSelect'
import { Button } from '../../../assets/components/utils/Button'

export const FlightSearchResults = ({}) => {
    const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)
  return (
    <section id="searchResults" className="center flex-col  gap-9 mt-9 w-11/12">
        <div className="flex flex-col lg:items-center w-full gap-4 lg:flex-row lg:flex-wrap">
            <h2 className={`${h2} w-full lg:w-fit`}>({Flights.length}) Available Flight{Flights.length > 1 ? 's' : ""} </h2>
            <div className="w-full lg:w-fit ">
                From <span className='font-bold'>{FlightSlice.from}</span> to <span className="font-bold">{FlightSlice.to}</span>
            </div>
        </div>

        <div className="flex w-full gap-9 relative">
            <FlightSearchFilters />
            
            <div className="flex flex-col gap-6 w-full">
                <div className="grid md:grid-co ls-2 lg:grid-co ls-3 w-full gap-9 lg:gap-6 xl:gap-9 gap-y-16">
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
        </div>
    
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

            <div className="bg-white h-full w-full rounded-lg z-10 p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h3 className="font-bold uppercase ">Filter</h3> 
                    <FiFilter />
                </div>
                <p className='text-sm '>use ref to clear checkbox</p>
                <p className='text-sm'>Data format from API </p>
                <p className='text-sm'>More details</p>
                <p className='text-sm'>Will image of Airline be provided?</p>

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
                            stops.map(a => (
                                <div className={`rounded size-9  ${filters.stops == a ? "bg-primary border-none font-bold" : ""} shadow border border-secondary center border-opacity-30 cursor-pointer transition-all duration-500`} onClick={() => {
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
                            airlines.map(airline => (
                                <div className="flex items-center gap-2 w-full cursor-pointer">
                                    <input type="checkbox" name={airline} id="" 
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


    if is round trip - specify on card if na depart or return <br /> */}