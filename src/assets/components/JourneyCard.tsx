import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./utils/Button"
import { format } from "date-fns"
import { fadedBold } from "../StyleClasses"
import { FormatPrice } from "../Functions"
import { Journeys } from "../Constants"

export interface journey{
  id: string,
  from: string,
  to: string,
  price: number,
  date: string,
  time: string,
  availableSeats: number,
  bookedSeats: number[],
  totalPassengers: number
}

export interface journeyInterface{
    journeyProps?: journey,
    button_text: string,
    journeyId?: string,
    noBookedSeats?: number
}

// passing journeyId means the fetching of the journey detaills will be done here
// but if not the journey details will be passed down as props

const JourneyCard:FC<journeyInterface> = ({journeyProps, button_text, journeyId, noBookedSeats}):JSX.Element => {
  const [ journey, setJourney ] = useState<journey>({
    id: "",
    from: "",
    to: "",
    price: 0,
    date: "",
    time: "",
    availableSeats: 0,
    bookedSeats: [],
    totalPassengers: 0
})
  /*
    fetch the journey that has this id
  */

    useEffect(() => {
      if(journeyProps){
        setJourney(journeyProps)
      }else{
        let journeys = Journeys.filter(j => j.id == journeyId && j)
        setJourney(journeys[0])
      }

  }, [])

  return (
    <Link to={`/journey/${journey?.id || journeyId}`} className="flex w-full bg-white bg-opacity-5 backdrop-blur-3xl border border-primary border-opacity-25 shadow-xl rounded-tl-3xl rounded-br-3xl flex-col p-8 gap-3">
      
      <div className="flex flex-col gap-2 mb-3">

        <div className="flex items-center justify-between">

          <p className="size-4 bg-primary rounded-full"></p>
          <div className="w-11/12 bg-gradient-to-r from-primary to-secondary h-1 rounded-full"></div>

          <p className="size-4 bg-secondary rounded-full"></p>

        </div>

        <div className="flex items-center justify-between">

          <h3 className="text-sm"><span className="font-bold text-base"> {journey?.from}</span></h3>

          <h3 className="text-sm text-right"> <span className="font-bold text-base"> {journey?.to}</span></h3>

        </div>
      </div>


      <div className="flex justify-between items-center">
        
        <h3> { noBookedSeats ? "Seats Booked" : "Available Seats"}: <span className="font-bold"> {noBookedSeats || journey?.availableSeats}</span></h3>
        <div className={`font-bold text-sm p-2 px-3 bg-opacity-10 bg-secondary rounded-full flex items-center gap-3 mt-3 w-fit`}>
          <div className="bg-primary size-4 rounded-full"></div>
          #{FormatPrice(journey?.price || 0)}
        </div>
      </div>

      {/* give room for different bus terminals in the same state or ask if there will be different */}
      <div className="flex justify-between items-center">
        <p className={`${fadedBold}`}>{journey?.time}</p>
        <p className={`${fadedBold}`}>{`${journey?.date}` || `${new Date()}`}</p>
      </div>


      <Button 
        text={button_text}
        className="bg-secondary text-white mt-7 w- fit"
      />
    </Link>
  )
}

export default JourneyCard