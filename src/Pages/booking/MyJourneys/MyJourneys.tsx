import { useParams } from "react-router-dom"
import { h2, main, mainChild } from "../../../assets/StyleClasses"
import { BookingInfo, Journeys } from "../../../assets/Constants"
import JourneyCard from "../../../assets/components/JourneyCard"

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

const MyJourneys = () => {
    const userId = useParams()
    console.log(userId.id)

    // fetch all bookings where id == user id

    /*
      journey.number of seats booked 
      update userslice.bookedJourneys

      booked journey
      
      fetching all booked journey and passing the id of the journey along with the number of seats booked as a parameter

    */ 

  return (
    <main className={`${main}`}>

        <div className={`${mainChild}`}>
            
        
        <section className="center flex-col gap-9 mt-9 w-full">
          <h2 className={`${h2} w-full`}>({Journeys.length}) Available journey{Journeys.length > 1 ? 's' : ""}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-9 gap-y-16">
            {
              BookingInfo.map(booking =>(
                <JourneyCard 
                  key={booking.id} 
                  journeyId={booking.journeyId} 
                  button_text={"View Journey"}
                  // no booked seats will be passed down with the fetching of all bookings with the used id
                  noBookedSeats={booking.noBookedSeats}
                />
              ))
            }
          </div>


          UPDATE MY DETAILS
        </section>
        </div>
    </main>
  )
}

export default MyJourneys