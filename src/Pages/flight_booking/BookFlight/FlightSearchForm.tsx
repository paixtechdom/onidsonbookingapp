import { ChangeEvent, useEffect, useState } from 'react'
import { InputField } from '../../../assets/components/FormInputs/InputField'
import { Select } from '../../../assets/components/FormInputs/Select'
import { RadioSelect } from '../../../assets/components/FormInputs/RadioSelect'
import { formField, h2 } from '../../../assets/StyleClasses'
import DatePicker from '../../../assets/components/DatePicker'
import { BsChevronDown } from 'react-icons/bs'
import { ArrayFromNumber } from '../../../assets/Functions'
import { ClassOfService, MaxBookingNo } from '../../../assets/Constants'
import { Button } from '../../../assets/components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../assets/store/AppStore'
import { setFlightSearch_ClassInput, setFlightSearch_FromInput, setFlightSearch_NoOfAdultsInput, setFlightSearch_ReturnDateInput, setFlightSearch_TakeOffDateInput, setFlightSearch_ToInput, setFlightSearch_TripTypeInput } from '../../../assets/store/Slices/flightSearchInputsSlice'

export const FlightSearchForm = () => {
    const dispatch = useDispatch()
    const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)
    const todaysDate = new Date()
    const [formInputs, setFormInputs ] = useState({
      from: "",
      to: "",
      tripType: "one-way",
      class: "Economy",
      no_of_adults: 1,
      takeoff_date: todaysDate.getTime(),
      return_date: todaysDate.getTime(),
      flexible_dates: false
    })
    const [ showPopUp, setShowPopUp ] = useState('')
    const [ activeDatePicker, setActiveDatePicker ] = useState('')


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setFormInputs({
        ...formInputs,
        [e.target.name]: (e.target.value).replace(/\n/g, '<br>')
      })
    }
    
    useEffect(() => {
        dispatch(setFlightSearch_FromInput(formInputs.from))
        dispatch(setFlightSearch_ToInput(formInputs.to))
        dispatch(setFlightSearch_TripTypeInput(formInputs.tripType))
        dispatch(setFlightSearch_ClassInput(formInputs.class))
        dispatch(setFlightSearch_NoOfAdultsInput(formInputs.no_of_adults))
        dispatch(setFlightSearch_TakeOffDateInput(formInputs.takeoff_date))
        dispatch(setFlightSearch_ReturnDateInput(formInputs.return_date))
      }, [formInputs])

     const clearFormInputs = () => {
        setFormInputs({
          from: "",
          to: "",
          tripType: "one-way",
          class: "Economy",
          no_of_adults: 1,
          takeoff_date: todaysDate.getTime(),
          return_date: todaysDate.getTime(),
          flexible_dates: false

        })
      }
    
  return (
    <form className={`${formField} w-full`}>
          <h2 className={`${h2} col-sp an-2 w-full`}>Enter your flight details</h2>
          <>
            <RadioSelect
              options={['One way', 'Round trip']}
              formInputs={formInputs}
              label=''
              name='tripType'
              setFormInputs={setFormInputs}
              flex={'row'}
            />

          <InputField 
            label="From"
            type="text"
            name="from"
            handleChange={handleChange}
            value={formInputs.from}
            isRequired={true}

            />

          <InputField 
            label="To"
            type="text"
            name="to"
            handleChange={handleChange}
            value={formInputs.to}
            isRequired={true}
           
          />

          <div className="flex gap-9 flex-col lg:flex-row items-center">
          <DatePicker
            label={'Takeoff Date'} 
            name={'takeoff_date'}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            activeDatePicker={activeDatePicker}
            setActiveDatePicker={setActiveDatePicker}
            />
          {
            formInputs.tripType == "round-trip" &&
            <DatePicker
            label={'Return Date'} 
            name={'return_date'}
            setFormInputs={setFormInputs}
            formInputs={formInputs}
            activeDatePicker={activeDatePicker}
            setActiveDatePicker={setActiveDatePicker}
              />
            }
          </div>

          <InputField 
            label="Class of Service"
            type="text"
            name="class"
            handleChange={handleChange}
            value={formInputs.class}
            func={() => setShowPopUp('class')}
            icon={<BsChevronDown />}
            >
              <Select
              setFormInputs={setFormInputs}  
                formInputs={formInputs} 
                setShowPopUp={setShowPopUp} 
                showPopUp={showPopUp}
                name={"class"}
                label="Class of Service"
                options = {ClassOfService} 
                
                />
          </InputField>
          
          <InputField 
            
            label="No of Persons"
            type="text"
            name="no_of_adults"
            handleChange={handleChange}
            value={formInputs.no_of_adults}
            func={() => setShowPopUp('no_of_adults')}
            icon={<BsChevronDown />}
            >
              <Select
              setFormInputs={setFormInputs}  
                formInputs={formInputs} 
                setShowPopUp={setShowPopUp} 
                showPopUp={showPopUp}
                name={"no_of_adults"}
                label="No of Persons"
                gridDisplay={'4'}
                options = {ArrayFromNumber(MaxBookingNo)} 
                
                />
          </InputField>
       
          <div className="flex items-center w-full gap-3">
            <input type="checkbox" name="flexible_dates" id="" className='scale-[1.3] bg-red-300 text-red-300' checked={formInputs.flexible_dates} onChange={(e) => {setFormInputs({
              ...formInputs, 
              ['flexible_dates']: e.target.checked
            })}}/>
            <p className={`${formInputs.flexible_dates ? "font-bold text-secondary" : "text-gray-600"}`}>Flexible Dates (+/-3 days)</p>
          </div>

          <div onClick={(e) =>{ 
            e.preventDefault()
            document.querySelector('#searchResults')?.scrollIntoView({
              behavior: "smooth"
            })
          }}
          className="col-span-2 center mt-3 w-full">
            <Button 
              text="Search"  
              className="bg-secondary text-white w-full lg:w-4/12 uppercase font-bold text-xl"
            />
          </div>
          </>

        </form>
  )
}
