/* 


    1. view journey details 
    2. view available seats
    3. button to book now
    add on - 
        map of the journey - destination
        skeleton of seats


    if logged in
        if ticket is bought
            remove buy ticket button
        else
            show buy ticket which will direct to payment if loggedin and logged in if not
    else
        go to login page
        
*/

import { Link, useParams } from "react-router-dom"
import { availableSeat, bookedSeat, fadedBold, formField, h2, main, mainChild, selectedSeat } from "../../../assets/StyleClasses"
import { useEffect, useState } from "react"
import { BookingInfo, Journeys } from "../../../assets/Constants"
import { journey } from "../../../assets/components/JourneyCard"
import { format, formatDate } from "date-fns"
import { ArrayFromNumber, FormatPrice } from "../../../assets/Functions"
import { Button } from "../../../assets/components/utils/Button"
import { GiSteeringWheel } from "react-icons/gi"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../assets/store/AppStore"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../../assets/store/AlertSlice"
import AnInfo from "../../../assets/components/utils/AnInfo"


interface bookingDetailsInterface {
    id: string,
    journeyId: string,
    userId: string,
    date: string,
    noBookedSeats: number,
    status: string,
    time: string
}

const JourneyPage = () => {
    const user = useSelector((state: RootState) => state.user)
    const dispatch = useDispatch()

    const sessionToken = user.sessionToken
    const bookedJourneys = user.bookedJourneys

    const id = useParams()
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

    const [ selectedSeats, setSelectedSeats ] = useState<number[]>([])
    const [ bookingDetails, setBookingDetails ] = useState({
        id: "",
        journeyId: "",
        userId: "",
        date: "",
        noBookedSeats: 0,
        status: "",
        time: "",
    })


    


    useEffect(() => {
        let journeys = Journeys.filter(j => j.id == id.id && j)
        setJourney(journeys[0])
        // console.log(journeys[0])

        if(bookedJourneys.includes(journeys[0].id)){

            // fetch booking details
            let matched_booking_info = BookingInfo.filter(info => info.journeyId == journeys[0].id)
            setBookingDetails(matched_booking_info[0])
            
        }


        
    }, [])


    // const addSeatNumber = (a : number) : void => {
    //     if(selectedSeats.includes(a)){
    //         let filteredSeats = selectedSeats.filter(seat => seat !== a)
    //         setSelectedSeats(filteredSeats)
    //     }else{
    //         setSelectedSeats([...selectedSeats, a])
    //     }
    // }

    // faith based 


    // Email subscription
    // No fixed timing
    // No joining - work on your own
    // There will be meeting at the end of week
    // I wanna see some messages before sending
    // When do i start


    // we are messaging them for money money
    // anyone who is not ready to pay should F off



  return (
    <>
        <main className={`${main}`}>
            <div className={`${mainChild} center min-h-screen`}>
                <div className="center flex-col w-full">

                    {
                        sessionToken !== undefined && 
                        bookingDetails.id !== ""  ?
                        <section className={`${formField} w-full`}>
                            <h2 className={`${h2} w-full col-span-2`}>Booking Details</h2>
                            <AnInfo 
                                title="Booking Status"
                                info={bookingDetails.status}
                            />
                            <AnInfo 
                                title="Date Booked"
                                info={formatDate(bookingDetails.date|| new Date(), 'dd-MM-yy')}
                            />
                            <AnInfo 
                                title="Time Booked"
                                info={bookingDetails.time}
                            />
                            <AnInfo 
                                title="Seats Booked"
                                info={bookingDetails.noBookedSeats}
                            />
                        </section> : ""
                    } 

                    {/* BOOKING INFO */}                

                    
                    <h2 className={`${h2} w-full mb-[8vh]`}>Journey Details</h2>

                    {/* JOURNEY INFO */}
                    <div className="flex flex-col lg:flex-row gap-x-[150px] w-full relative">
                        <section className="flex flex-col gap-6 w-full min-h-[80vh]">

                        <div className="flex flex-col gap-2 mb-3">

                            <div className="flex items-center justify-between">

                                <p className="size-7 bg-primary rounded-full"></p>
                                <div className="w-11/12 bg-gradient-to-r from-primary to-secondary h-1 rounded-full"></div>
                                <p className="size-7 bg-secondary rounded-full"></p>

                            </div>

                            <div className="flex items-center justify-between">
                                <h3 className="text-sm"><span className="font-bold text-base"> {journey.from}</span></h3>

                                <h3 className="text-sm text-right"> <span className="font-bold text-base"> {journey.to}</span></h3>
                            </div>
                        </div>


                        <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1 w-6/12">
                                <p>Departure</p>
                                <p className="font-bold">
                                    Iyanapaja, Oki Village, Lagos
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-1 w-6/12">
                                <p>Destination</p>
                                <p className="font-bold text-right">
                                    Olulu, Kogba, Abuja
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p>Boarding Time</p>
                                <p className="font-bold">
                                    {journey.time}
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                                <p>Boarding Date</p>
                                <p className="font-bold">
                                    {journey.date}
                                </p>
                            </div>
                        </div>


                        <div className="flex items-center justify-between">
                            <div className="flex flex-col gap-1">
                                <p>Price</p>
                                <p className="font-bold">
                                    {FormatPrice(journey.price)}
                                </p>
                            </div>

                            <div className="flex flex-col items-end gap-1">
                                <p>Available Seats</p>
                                <p className="font-bold">
                                    {journey.availableSeats}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-6 w-full">

                            {/* <Button 
                                text="View seats"
                                className="bg-white border border-secondary mt-8 text-secondary text-lg lg:w-fit w-full"
                            /> */}
                             { 
                                sessionToken == undefined ? 
                                <Link to={`/Login?${journey.id}`} className="w-full lg:w-fit" 
                                onClick={() => {
                                    dispatch(toggleShowAlert(true))
                                    dispatch(setAlertMessage("Login to continue"))
                                    dispatch(setAlertType("info"))
                                }}>
                                    <Button 
                                        text="Buy ticket"
                                        className="bg-secondary mt-8 text-white text-lg lg:w-fit"
                                    />
                                </Link> : 
                                
                                bookingDetails.id !== "" &&

                                <Link to={`/payment?${journey.id}`} className="w-full lg:w-fit">
                                    <Button 
                                        text={"Buy ticket" }
                                        className="bg-secondary mt-8 text-white text-lg lg:w-fit"
                                    />
                                </Link> 
                            }
                        </div>

                        </section>

                        <div className="w-full h-[50vh] bg-secondary center text-white sticky top-[20vh]">
                            MAP
                        </div>
                    </div>
                        


                    LIST OF ALL THE PEOPLE WHO BOOKED THE JOURNEY IF ADMIN
                    {/* IMAGE OF SEATS */}
                    {/* buses structures differ */}
                    {/* <section className="flex flex-col justify-center gap-6 w-full mt-[19vh]">
                        <div className="center gap-6 w-full">
                            <div className="flex flex-col items-center gap-3">
                                <p className={"size-8 bg-gray-300 rounded-lg shadow-lg"}></p>
                                <span className={`${fadedBold} text-center`}>Available</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <p className={"size-8 bg-secondary rounded-lg shadow-lg"}></p>
                                <span className={`${fadedBold} text-center`}>Booked</span>
                            </div>
                            <div className="flex flex-col items-center gap-3">
                                <p className={"size-8 bg-primary rounded-lg shadow-lg"}></p>
                                <span className={`${fadedBold} text-center`}>Selected</span>
                            </div>
                        </div>
                        
                        <div className="bg-primaryFade w-full border border-secondary h-[75vh] rounded-t-[70px] rounded-b-3xl py-4 flex justify-center">
                            <div className="flex flex-col w-9/12 justify-between h-[70%] mt-[15%]"> 
                                <div className="grid grid-cols-3 mb-9 gap-4">
                                    <GiSteeringWheel className="text-5xl w-fit"/>
                                 

                                    <p className={`${availableSeat} w-fit`} onClick={() => addSeatNumber(0)}>0</p>
                                    <p className={`${availableSeat} w-fit`} onClick={() => addSeatNumber(0)}>0</p>
                                </div>

                                <div className="grid grid-cols-3 gap-4 w-full">
                                    {
                                       ArrayFromNumber(journey.totalPassengers).map((a, i) => (
                                            i !== 0 ?
                                            journey.bookedSeats.includes(a) ?
                                            <p className={`${bookedSeat} text-white size-[60px] w-full center`}>{a}</p>
                                            :
                                            <p className={`${selectedSeats.includes(a) ?selectedSeat : availableSeat}`} onClick={() =>{addSeatNumber(a)}}>{a}</p> : ''
                                       ))
                                    }     
                                </div>
                            </div>
                        </div>

                    </section> */}
                </div>


                {/* 

                    from
                    to
                    pickup location
                    detination
                    price
                    takeoff / boarding time
                    takeoff date
                    available seats
                    booked seats
                    total seats

                */}
            </div>
        </main>
    </>
  )
}

export default JourneyPage