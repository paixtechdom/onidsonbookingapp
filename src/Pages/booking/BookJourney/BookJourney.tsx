import { ChangeEvent, useEffect, useState } from "react";
import { InputField } from "../../../assets/components/FormInputs/InputField";
import { Select } from "../../../assets/components/FormInputs/Select";
import { formField, h2, main, mainChild } from "../../../assets/StyleClasses";
import { BsChevronDown } from "react-icons/bs";
import { Locations, MaxBookingNo, Journeys as AllJourneys } from "../../../assets/Constants";
import { ArrayFromNumber } from "../../../assets/Functions";
import DatePicker from "../../../assets/components/DatePicker";
import JourneyCard from "../../../assets/components/JourneyCard";
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../../assets/store/Slices/AlertSlice";
import { useDispatch } from "react-redux";
import { Button } from "../../../assets/components/utils/Button";


const BookJourney = () => {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(toggleShowAlert(true))
  //   dispatch(setAlertMessage("Online flight booking coming soon"))
  //   dispatch(setAlertType("info"))
  // }, [])

  const [ formInputs, setFormInputs ] = useState({
    from: "",
    to: "",
    noOfPersons: 0,
    date: new Date()
  })

  const [ showPopUp, setShowPopUp ] = useState('')
  const [ fromLocations, setFromLocations ] = useState<any>([])
  const [ toLocations, setToLocations ] = useState<any>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputs({
        ...formInputs,
        [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
    })
  }

  useEffect(() => {
    let newFrom = Locations.filter(a=> a.location !== formInputs.to).map( a => a.location)
    setFromLocations(newFrom)

    let newTo = Locations.filter( a => a.location !== formInputs.from).map(a => a.location)
    setToLocations(newTo)

  }, [formInputs.to, formInputs.from])

  useEffect(() => {

    console.log(formInputs.date)

  }, [formInputs.date])


  const clearFormInputs = () => {
    setFormInputs({
      from: "",
      to: "",
      noOfPersons: 0,
      date: new Date()
    })
  }


 const LocationFilteredJourneys = AllJourneys.filter(j => {
    if(formInputs.from === "" && formInputs.to === "" ){
      return j;
    }
    if(formInputs.from === j.from && formInputs.to === ""){
      return j;
    }
    if(formInputs.from === "" && formInputs.to === j.to){
      return j;
    }
    if(formInputs.from === j.from && formInputs.to === j.to){
      return j;
    }    
  })


  const NoOfPersonsFilteredJourney = LocationFilteredJourneys.filter(j => 
    formInputs.noOfPersons <= j.available_seats && j
  )

  // NoOfPersonsFilteredJourney.forEach((j) => {

  //   console.log(formInputs.date.getTime() <= new Date(j.date).getTime() || formInputs.date.getDay() == new Date(j.date).getDay(), j.date)

  //   console.log(formInputs.date.getTime(), "form inputs time")

  //   console.log(new Date(j.date).getTime(), "Jdate.getTime(")
    
  // })



  // if the date of the journey == or greater than the inputed day  
  const dateCondition = (journey:any) => {
    return formInputs.date.getTime() <= new Date(journey.date).getTime() || formInputs.date.getDate() == new Date(journey.date).getDate()
  }


  const Journeys = NoOfPersonsFilteredJourney.filter(j => dateCondition(j) && j)


  // fetch all journeys that have not expired and pass the journey as an argurment

  return (
    <main className={`${main}`}>
      <div className={`${mainChild} min-h-[100vh]`}>

        {/* <h1 className="text-4xl">A LIST OF AVAILABLE SERVICES THEN THE FORM IS A SEARCH</h1>
        ORDER BY DATE, ARRIVAL, DESTINATION

        BOARDING POINTS, DROPPING POINTS, NO OF HOURS FOR JOURNEY */}


        <form className={`${formField}`}>
          <h2 className={`${h2} col-span-2 w-full`}>Enter your travel details</h2>

          <InputField 
            label="Depature"
            type="text"
            name="from"
            handleChange={handleChange}
            value={formInputs.from}
            isRequired={true}
            func={() => setShowPopUp('from')}
            icon={<BsChevronDown />}
            >
              <Select  
                formInputs={formInputs} 
                setShowPopUp={setShowPopUp} 
                showPopUp={showPopUp}
                name={"from"}
                label="Depature"
                options = {fromLocations} />
          </InputField>

          <InputField 
            label="Select Destination"
            type="text"
            name="to"
            handleChange={handleChange}
            value={formInputs.to}
            isRequired={true}
            func={() => setShowPopUp('to')}
            icon={<BsChevronDown />}
            >
              <Select  
                formInputs={formInputs} 
                setShowPopUp={setShowPopUp} 
                showPopUp={showPopUp}
                name={"to"}
                label="Select Destination"
                options = {toLocations} />
          </InputField>
          
          <DatePicker 
            setFormInputs={setFormInputs}
            formInputs={formInputs}
          />

          <InputField 
            label="No of Persons"
            type="text"
            name="noOfPersons"
            handleChange={handleChange}
            value={formInputs.noOfPersons}
            isRequired={true}
            func={() => setShowPopUp('noOfPersons')}
            icon={<BsChevronDown />}
            >
              <Select  
                formInputs={formInputs} 
                setShowPopUp={setShowPopUp} 
                showPopUp={showPopUp}
                name={"noOfPersons"}
                label="No of Persons"
                gridDisplay={'4'}
                options = {ArrayFromNumber(MaxBookingNo)} 
                
                />
          </InputField>

          <div onClick={() => clearFormInputs()} className="col-span-2 center mt-3">
            <Button 
              text="CLEAR INPUTS"  
              className="bg-secondary text-white w-full lg:w-5/12"
            />
          </div>

        </form>

        <section className="center flex-col  gap-9 mt-9 w-full">
          <h2 className={`${h2} w-full`}>({Journeys.length}) Available journey{Journeys.length > 1 ? 's' : ""}</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-9 lg:gap-6 xl:gap-9 gap-y-16">
            {
              Journeys.map(journey =>(
                <JourneyCard 
                  key={journey.id} 
                  journey_props={journey} 
                  button_text={"Book Now"}
                />
              ))
            }
          </div>
        </section>

        
      </div>
    </main>
  )
}

export default BookJourney;