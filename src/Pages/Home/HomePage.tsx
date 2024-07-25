import { ChangeEvent, useEffect, useState } from "react";
import { InputField, Select } from "../../assets/components/FormInputs";
import { formField, main, mainChild } from "../../assets/StyleClasses";
import { BsChevronDown } from "react-icons/bs";
import { Locations, MaxBookingNo } from "../../assets/Constants";
import { ArrayFromNumber } from "../../assets/Functions";
import DatePicker from "../../assets/components/DatePicker";


const HomePage = () => {
  const [ formInputs, setFormInputs ] = useState({
    from: "",
    to: "",
    noOfPersons: "",
    date: ""
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


 

  return (
    <main className={main + '  '}>
      <div className={mainChild + ' min-h-[100vh] '}>
        
        <form className={formField + ' '}>
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
            formInputs={formInputs}
            selectedDate={formInputs.date}/>

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
                options = {ArrayFromNumber(MaxBookingNo)} 
                
                />
            </InputField>


        {/* /date and no of adults */}
       
        </form>

        
      </div>
    </main>
  )
}

export default HomePage;