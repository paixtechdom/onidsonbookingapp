import { FC, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "./utils/Button"
import { format } from "date-fns"
import { fadedBold } from "../StyleClasses"
import { FormatPrice } from "../Functions"
import { Journeys } from "../Constants"
import { BiBus } from "react-icons/bi"

export interface journey{
  id: string,
  from: string,
  to: string,
  price: number,
  date: string,
  time: string,
  available_seats: number,
  booked_seats: number[],
  total_passengers: number
}

export interface journeyInterface{
    journey_props?: journey,
    button_text: string,
    journey_id?: string,
    no_booked_seats?: number
}

// passing journey_id means the fetching of the journey detaills will be done here
// but if not the journey details will be passed down as props

const JourneyCard:FC<journeyInterface> = ({journey_props, button_text, journey_id, no_booked_seats}):JSX.Element => {
  const [ journey, setJourney ] = useState<journey>({
    id: "",
    from: "",
    to: "",
    price: 0,
    date: "",
    time: "",
    available_seats: 0,
    booked_seats: [],
    total_passengers: 0
})
  /*
    fetch the journey that has this id
  */

    useEffect(() => {
      if(journey_props){
        setJourney(journey_props)
      }else{
        let journeys = Journeys.filter(j => j.id == journey_id && j)
        setJourney(journeys[0])
      }

  }, [])

  return (
    <Link to={`/journey/${journey?.id || journey_id}`} className="flex w-full bg-white bg-opacity-5 backdrop-blur-3xl border border-primary border-opacity-25 shadow-xl rounded-tl-3xl rounded-br-3xl flex-col p-8 gap-3">
      
      <div className="flex flex-col gap-2 mb-3">

        <div className="flex items-center justify-between">
          <div className="absolute left-[50%] translate-x-[-50%] bg-secondary text-white size-12 center rounded-full">
              <BiBus />
            </div>

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
        
        <h3> { no_booked_seats ? "Seats Booked" : "Available Seats"}: <span className="font-bold"> {no_booked_seats || journey?.available_seats}</span></h3>
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