import { FC } from "react"
import { Link } from "react-router-dom"
import { Button } from "./utils/Button"
import { format } from "date-fns"
import { timeClass } from "../StyleClasses"
import { FormatPrice } from "../Functions"

interface journey{
    id: string,
    from: string,
    to: string,
    price: number,
    date: string,
    time: string,
    availableSeats: number,
    bookedSeats: number,
    totalPassengers: number

}
interface journeyCardInterface{
    journey: journey
}

const JourneyCard:FC<journeyCardInterface> = ({journey}):JSX.Element => {
  return (
    <Link to={`/journeys/${journey.id}`} className="flex w-full bg-white bg-opacity-5 backdrop-blur-3xl border border-primary border-opacity-25 shadow-xl rounded-tl-3xl rounded-br-3xl flex-col p-8 gap-3">
      
      <div className="flex flex-col gap-2 mb-3">

        <div className="flex items-center justify-between">

          <p className="size-4 bg-primary rounded-full"></p>
          <div className="w-11/12 bg-gradient-to-r from-primary to-secondary h-1 rounded-full"></div>

          <p className="size-4 bg-secondary rounded-full"></p>

        </div>

        <div className="flex items-center justify-between">

          <h3 className="text-sm"><span className="font-bold text-base"> {journey.from}</span></h3>

          <h3 className="text-sm text-right"> <span className="font-bold text-base"> {journey.to}</span></h3>

        </div>
      </div>


      <div className="flex justify-between items-center">
        <h3>Available Seats: <span className="font-bold"> {FormatPrice(journey.availableSeats)}</span></h3>
        <div className={`font-bold text-sm p-2 px-3 bg-opacity-10 bg-secondary rounded-full flex items-center gap-3 mt-3 w-fit`}>
          <div className="bg-primary size-4 rounded-full"></div>
          #{FormatPrice(journey.price)}
        </div>
      </div>


      <div className="flex justify-between items-center">
        <p className={`${timeClass}`}>{journey.time}</p>
        <p className={`${timeClass}`}>{format(journey.date, 'dd/MM/yy')}</p>
      </div>


      <Button 
        text="Book now"
        className="bg-secondary text-white mt-7 w- fit"
      />
    </Link>
  )
}

export default JourneyCard