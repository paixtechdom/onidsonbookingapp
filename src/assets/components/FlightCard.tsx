import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./utils/Button"
import { format } from "date-fns"
import { fadedBold } from "../StyleClasses"
import { FormatPrice } from "../Functions"
import { Flights } from "../Constants"
import { FaPlane } from "react-icons/fa"
import { FaNairaSign } from "react-icons/fa6"
import { GetAirportLocation } from "../../Pages/flight_booking/BookFlight/FlightSearchResults"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentFlightId } from "../store/Slices/navigationSlice"
import { RootState } from "../store/AppStore"
import { FlightDetails } from "../../Pages/booking/MyJourneys/FlightDetails"

export interface flight{
  id: string,
  from: string,
  to: string,
  price: number,
  takeoff_date: string,
  return_date: string,
  time: string,
  duration: string,
  stops: number,
  booked_seats: number[],
  total_passengers?: number
}

export interface flightInterface{
  flight_props?: flight,
  flight_id?: string
}

// passing flight_id means the fetching of the flight detaills will be done here
// but if not the flight details will be passed down as props

// const FlightCard:FC<flightInterface> = ({flight_props, button_text, flight_id}):JSX.Element => {
  //     {
  //     id: "",
  //     from: "",
  //     to: "",
  //     price: 0,
  //     takeoff_date: "",
  //     return_date: "",
  //     time: "",
  //     duration: "",
  //     stops: 0,
  //     booked_seats: [],
  //     total_passengers: 0
  // }
  // )



const FlightCard:FC<any> = ({
    id,
    airline, 
    price, 
    departureAirport, 
    arrivalLocation, 
    departureLocation, 
    departureIata, 
    arrivalIata, 
    departureDate, 
    arrivalDate ,
    duration,
    children
  }):JSX.Element => {

    const dispatch = useDispatch()
    const navigationSlice = useSelector((state: RootState) => state.navigation)
    const currentFlightId = navigationSlice.currentFlightId
    


  //
    // fetch the flight that has this id

    // use timestamp and flight time to determine if the flight is active or past or whatever

    //  {/* <p className="abs olute right-[10px] top-5 bg-red-800 text-sm text-white p-2 rounded-full px-4">Expired</p> */}
    //  <p className="abs olute right-[10px] top-5 bg-green-800 text-sm text-white p-2 rounded-full px-4">Active</p>

  // */

  return (
    <div className="flex w-full bg-white bg-opacity-5 backdrop-blur-3xl shadow-xl rounded-tl-3xl rounded-br-3xl flex-col rounded-xl">
    
      {/* remove airlines and any potential long text and keep for details section - consider popup for the flight details */}

      <div className="absolute top-0 left-0 bg-gradient-to-tr from-secondary to-primary opacity-30 h-full w-full z-0 rounded-xl"></div>

      <div className="flex bg-white white bg-opacity-1 0 backdrop-blur-2xl  justify-between gap- divide-x-2 divide-zinc-300 z-10 p-5 min-h-[30vh] m-2 rounded-lg items-center">
        
        
        <div className="w-3/12 flex flex-col gap-3 justify-between">
          <img src={`https://logos.skyscnr.com/images/airlines/favicon/EZ.png`} alt="Airline Image" />
          <h2 className="font-bold">{airline}</h2>

          <div className={`font-bold flex items-center gap-1  w-fit`}>
              {/* <FaNairaSign className="text-sm"/>{FormatPrice(flight?.price || 0)} */}
              <FaNairaSign className="text-sm"/>{FormatPrice(price || 0)}
            </div>
          <p className="underline text-base text-secondary cursor-pointer" onClick={() =>{
            dispatch(setCurrentFlightId(id))
          }}>
            View Details
          </p>
        </div>


        <div className="flex flex-col gap-4 w-full mx-3 px-3">
          <div className="flex justify-between flex-wrap">
            <h3 className="uppercase font-bold">{departureAirport}</h3>
            {children}
          </div>

          <div className="flex flex-col gap-2 mb-3">  

            <div className="flex items-center justify-between relative">
              <div className="absolute left-[50%] translate-x-[-50%] bg-secondary text-white size-12 center rounded-full">
                <FaPlane />
              </div>

              <p className="size-4 bg-primary rounded-full"></p>
              <div className="w-11/12 bg-gradient-to-r from-primary to-secondary h-1 rounded-full"></div>

              <p className="size-4 bg-secondary rounded-full"></p>

            </div>


          </div>
          
          <div className="flex items-center justify-between">

            <div className="flex flex-col gap-3">
              <h3 className="text-sm"><span className="font-bold text-base">
                 {departureLocation}
                </span></h3>
              <p>{departureIata}</p>
              <p className={`${fadedBold}`}>{departureDate}</p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <p className={`text-sm underline mt-4`}>{duration}</p>
              <h3>Stops: null
                {/* <span className="font-bold">{flight?.stops}</span> Stop{flight.stops > 1 || flight.stops == undefined ? "s" : ""} */}
              </h3>
            </div>

            <div className="flex flex-col gap-3 items-end">
              <h3 className="text-sm text-right"> <span className="font-bold text-base"> 
              {arrivalLocation}
              </span></h3>
              <p>{arrivalIata}</p>
              <p className={`${fadedBold}`}>{arrivalDate}</p>
            </div>

          </div>

        </div>     


          {/* {

            currentFlightId === id &&

          } */}

        
      </div>




    </div>
  )
}

export default FlightCard






// Link to={`/flight/${flight?.id || flight_id}`}

