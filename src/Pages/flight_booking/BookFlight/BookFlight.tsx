import { ChangeEvent, useEffect, useState } from "react";
import {  main, mainChild } from "../../../assets/StyleClasses";
import { BsChevronDown } from "react-icons/bs";
import { Locations, Flights as AllFlights } from "../../../assets/Constants";
import { FlightSearchForm } from "./FlightSearchForm";
import { FlightSearchResults } from "./FlightSearchResults";
import { Processing, useProcessing } from "../../../assets/components/Loadings/Processing";
import { FaPlane } from "react-icons/fa6";
import { RootState } from "../../../assets/store/AppStore";
import { useSelector } from "react-redux";


const BookFlight = () => {
  const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)
  const toggleProcessing = useProcessing()
  const a = 

    <div className="flex flex-col gap-4 center">
      <h2 className="text-secondary-text-xl font-bold">
        Searching for Flights
      </h2>

      <div className="flex flex-col">

        {FlightSlice.from}
        <FaPlane className="text-secondary text-2xl"/>
        {FlightSlice.to}
      </div>
    </div>


  useEffect(() => {
    // toggleProcessing(true, a)
    setTimeout(() => {
      // toggleProcessing(false)
      
    }, 2000);
  }, [])


  // fetch all flights that have not expired and pass the flight as an argurment

  return (
    <main className={`${main}`}>
      <div className={`${mainChild}`}>


      <FlightSearchForm />
      
      </div>

      <FlightSearchResults />
       

        
    </main>
  )
}

export default BookFlight;