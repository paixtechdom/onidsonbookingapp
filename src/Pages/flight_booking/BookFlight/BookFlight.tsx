import { ChangeEvent, useEffect, useState } from "react";
import {  main, mainChild } from "../../../assets/StyleClasses";
import { BsChevronDown } from "react-icons/bs";
import { Locations, Flights as AllFlights } from "../../../assets/Constants";
import { FlightSearchForm } from "./FlightSearchForm";
import { FlightSearchResults } from "./FlightSearchResults";


const BookFlight = () => {
 



  // fetch all flights that have not expired and pass the flight as an argurment

  return (
    <main className={`${main}`}>
      <div className={`${mainChild} min-h-[100vh]`}>


      <FlightSearchForm />

      <FlightSearchResults />
       

        
      </div>
    </main>
  )
}

export default BookFlight;