import { useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { main, mainChild } from "../../assets/StyleClasses"
import { Journeys } from "../../assets/Constants"
import { journey } from "../../assets/components/JourneyCard"
import { FormatPrice } from "../../assets/Functions"


const PaymentPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const journey_id = location.search.split('?')[1]
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


  useEffect(() => {
    if(journey_id == undefined){
      navigate(`/Booking/book-journey`)
    }

    let journeys = Journeys.filter(j => j.id == journey_id && j)
    setJourney(journeys[0])
    console.log(journeys[0])

    
  }, [])

  return (
    <main className={`${main}`}>
        <div className={`${mainChild}`}>
            <h2 className="text-xl">
              {journey.from}
            </h2>
            <h2 className="text-xl">
              {journey.to}
            </h2>
            {FormatPrice(journey.price)} Naira


          <p>
            PAYMENT GATEWAY INTEGRATION
            <br />
            confirm Payment
            <br />
            generate a key for the user for the journey
            <br />
            redirect to the journey page
            <br />
            update bookedJourneys under user slice
            <br />
          </p>
        </div>

    </main>
  )
}

export default PaymentPage