import { ChangeEvent, useEffect, useState } from "react";
import {  main, mainChild } from "../../../assets/StyleClasses";
import { BsChevronDown } from "react-icons/bs";
import { Locations, Flights as AllFlights } from "../../../assets/Constants";
import { FlightSearchForm } from "./FlightSearchForm";
import { FlightSearchResults, GetAirportLocation } from "./FlightSearchResults";
import { Processing, useProcessing } from "../../../assets/components/Loadings/Processing";
import { FaPlane } from "react-icons/fa6";
import { RootState } from "../../../assets/store/AppStore";
import { useSelector } from "react-redux";
import axios from "axios"



const BookFlight = () => {
  const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)
    const toggleProcessing = useProcessing()

    const [ fetched_flights, set_fetched_flights ] = useState([])


  useEffect(() => {
    // toggleProcessing(true, "searching_for_flights")
    // setTimeout(() => {
      // toggleProcessing(false)
      
    // }, 2000);

    // axios.get("https://api.aviationstack.com/v1/flights?access_key=be74df54fa508341cfe8d35beda0f8ad")
    // .then((response)=>{
    //   set_fetched_flights(response.data.data)
    //   console.log(response.data.data)
    // })
  }, [])


  // fetch all flights that have not expired and pass the flight as an argurment

  return (
    <main className={`${main}`}>
      <div className={`${mainChild}`}>


      {/* <FlightSearchForm /> */}
      
      </div>

      <FlightSearchResults fetched_flights={fetched_flights}/>
       

        
    </main>
  )
}

export default BookFlight;