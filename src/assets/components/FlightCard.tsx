import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./utils/Button"
import { format } from "date-fns"
import { fadedBold } from "../StyleClasses"
import { FormatPrice } from "../Functions"
import { Flights } from "../Constants"
import { FaPlane } from "react-icons/fa"
import { FaNairaSign } from "react-icons/fa6"

export interface flight{
  id: string,
  from: string,
  to: string,
  price: number,
  takeoff_date: string,
  return_date: string,
  time: string,
  duration: string,
  available_seats?: number,
  stops: number,
  booked_seats: number[],
  total_passengers?: number
}

export interface flightInterface{
    flight_props?: flight,
    button_text: string,
    flight_id?: string,
    no_booked_seats?: number
}

// passing flight_id means the fetching of the flight detaills will be done here
// but if not the flight details will be passed down as props

const FlightCard:FC<flightInterface> = ({flight_props, button_text, flight_id, no_booked_seats}):JSX.Element => {
  const [ flight, setFlight ] = useState<flight>({
    id: "",
    from: "",
    to: "",
    price: 0,
    takeoff_date: "",
    return_date: "",
    time: "",
    duration: "",
    available_seats: 0,
    stops: 0,
    booked_seats: [],
    total_passengers: 0
})
  /*
    fetch the flight that has this id
  */

    useEffect(() => {
      if(flight_props){
        setFlight(flight_props)
      }else{
        let flights = Flights.filter(j => j.id == flight_id && j)
        setFlight(flights[0])
      }

  }, [])

  return (
    <Link to={`/flight/${flight?.id || flight_id}`} className="flex w-full bg-white bg-opacity-5 backdrop-blur-3xl border border-primary border-opacity-25 shadow-xl rounded-tl-3xl rounded-br-3xl flex-col p-8 gap-3">
      <div className="flex flex-col gap-2 mb-3">  

        <div className="flex items-center justify-between relative">
          <div className="absolute left-[50%] translate-x-[-50%] bg-secondary text-white size-12 center rounded-full">
            <FaPlane />
          </div>

          <p className="size-4 bg-primary rounded-full"></p>
          <div className="w-11/12 bg-gradient-to-r from-primary to-secondary h-1 rounded-full"></div>

          <p className="size-4 bg-secondary rounded-full"></p>

        </div>


        <div className="flex items-center justify-between">

          <h3 className="text-sm"><span className="font-bold text-base"> {flight?.from}</span></h3>

          <h3 className="text-sm text-right"> <span className="font-bold text-base"> {flight?.to}</span></h3>

        </div>
      </div>


      <div className="flex justify-between items-center">
        
        <h3> <span className="font-bold">{flight?.stops}</span> Stop{flight.stops > 1 || flight.stops == undefined ? "s" : ""}</h3>

        <div className={`font-bold text-sm p-2 px-3 bg-opacity-10 bg-secondary rounded-full flex items-center gap-1 mt-3 w-fit`}>
          <FaNairaSign className="text-sm"/>{FormatPrice(flight?.price || 0)}
        </div>
      </div>

      {/* give room for different bus terminals in the same state or ask if there will be different */}
      <div className="flex justify-between items-center">
        <p className={`${fadedBold}`}>{flight?.time}</p>
        <p className={`text-sm underline`}>{flight?.duration}</p>
        <p className={`${fadedBold}`}>3:30 PM</p>
        {/* <p className={`${fadedBold}`}>{`${flight?.takeoff_date}` || `${new Date()}`}</p> */}
      </div>


      <Button 
        text={button_text}
        className="bg-secondary text-white mt-7 w- fit"
      />
    </Link>
  )
}

export default FlightCard