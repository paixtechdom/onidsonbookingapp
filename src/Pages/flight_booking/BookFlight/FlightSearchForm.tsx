import { ChangeEvent, useEffect, useState, FC } from 'react'
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
import { setFlightSearch_ClassInput, setFlightSearch_FromInput, setFlightSearch_NoOfAdultsInput, setFlightSearch_NoOfChildrenInput, setFlightSearch_NoOfInfantsInput, setFlightSearch_ReturnDateInput, setFlightSearch_TakeOffDateInput, setFlightSearch_ToInput, setFlightSearch_TripTypeInput } from '../../../assets/store/Slices/flightSearchInputsSlice'
import { NumberInput, NumberInputsParent } from "../../../assets/components/FormInputs/NumberInput"


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
      no_of_children: 0,
      no_of_infants: 0,
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
        dispatch(setFlightSearch_NoOfChildrenInput(formInputs.no_of_children))
        dispatch(setFlightSearch_NoOfInfantsInput(formInputs.no_of_infants))
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
          no_of_children: 0,
          no_of_infants: 0,
          takeoff_date: todaysDate.getTime(),
          return_date: todaysDate.getTime(),
          flexible_dates: false

        })
      }
    
  return (
    <form className={`${formField} w-full`}>
          {/* <h2 className={`${h2} col-sp an-2 w-full`}>Enter your flight details</h2> */}
          <>
            <div className="flex items-center gap-4"> 
              <div className="flex items-center gap-4 w-full"> 
                <RadioSelect
                  options={['One way', 'Round trip']}
                  formInputs={formInputs}
                  label=''
                  name='tripType'
                  setFormInputs={setFormInputs}
                  flex={'row'}
                />

              </div>

              <div className="flex items-center w-full gap-3">
                <input type="checkbox" name="flexible_dates" id="" className='scale-[1.3] bg-red-300 text-red-300' checked={formInputs.flexible_dates} onChange={(e) => {setFormInputs({
                  ...formInputs, 
                  ['flexible_dates']: e.target.checked
                })}}/>

                <p className={`${formInputs.flexible_dates ? "font-bold text-secondary" : "text-gray-600"} cursor-pointer`} >Flexible Dates (+/-3 days)</p>
              </div>
            </div>

            <div className="flex items-center gap-3 flex-col lg:flex-row w-full">
            <InputField 
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
              type="text"
              name="no_of_persons"
              isReadonly={true}
              handleChange={handleChange}
              value={FlightSlice.no_of_adults + FlightSlice.no_of_children + FlightSlice.no_of_infants + " Persons"}
              func={() => setShowPopUp('no_of_persons')}
              icon={<BsChevronDown />}
              >
              <NumberInputsParent
               setShowPopUp={setShowPopUp} 
               showPopUp={showPopUp}
               name={"no_of_persons"}
               > 
                <>
                  <NumberInput 
                    label={"Adults"}
                    desc={'> 12 years'}
                    name={"no_of_adults"}
                    value={FlightSlice.no_of_adults}
                    setFormInputs={setFormInputs}  
                    formInputs={formInputs} 
                    />
                  <NumberInput 
                    label={"Children"}
                    desc={'2 - 12 years'}
                    name={"no_of_children"}
                    value={FlightSlice.no_of_children}
                    setFormInputs={setFormInputs}  
                    formInputs={formInputs} 
                    />
                  <NumberInput 
                    label={"Infants"}
                    desc={'< 2 years'}
                    name={"no_of_infants"}
                    value={FlightSlice.no_of_infants}
                    setFormInputs={setFormInputs}  
                    formInputs={formInputs} 
                  />
                </>
              </NumberInputsParent>
            </InputField>
              </div>

            <div className="flex items-center gap-3 lg:gap-3 flex-col lg:flex-row w-full">
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
            </div>

            <div className="flex w-full gpa-9 lg:gap-3 flex-col lg:flex-row items-center">
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
           
       
   

          <div onClick={(e) =>{ 
            e.preventDefault()
            document.querySelector('#searchResults')?.scrollIntoView({
              behavior: "smooth"
            })
          }}
          className="col-span -2 cent er mt-3 w-full">
            <Button 
              text="Search"  
              className="bg-secondary text-white w-full lg:w-7/12 uppercase font-bold text-xl"
            />
          </div>
          </>

        </form>
  )
}

