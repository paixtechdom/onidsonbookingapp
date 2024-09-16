import { FC, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/AppStore'
import { GetAirportLocation } from '../../Functions'

interface AutoCompleteOptionsInterface{
  name: string,
  value: any,
  setValue : any
}

export const AutoCompleteOptions:FC<AutoCompleteOptionsInterface> = ({name, value, setValue}) => {
  const FlightSlice = useSelector((state: RootState) => state.flightSearchInputs)

  

  const [ options, setOptions ] = useState([])

  useEffect(() => {

    console.log(GetAirportLocation(FlightSlice[name], true))

    // const mathingCountries = )

    setOptions(GetAirportLocation(FlightSlice[name], true))

    // setOptions(GetAirportLocation(FlightSlice[name], true))

    // console.log(FlightSlice[name])

  }, [FlightSlice])


  return (
    <>
    {
      options.length > 0 &&
      <div className="absolute w-full lg:min-w-[350px] flex flex-col bg-primary bg-opacity-5 backdrop-blur-3xl border border-primary shadow-xl rounded-xl h-fit gap-6 p-9 transition-all duration-500 top-[15vh] bottom- [100%] z-20">
        
        {/* {FlightSlice.from} */}
          <div className="flex flex-col gap-3 max-h-[40vh] overflow-auto">

            { 
              options?.map((option, i) => (
                <div key={i} className={"py-3 border-l-4 border-primary px-3 w-full rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 transition-all duration-500 active:bg-gray-200 capitalize"} 
                onClick={() => {
                  let val = `${option?.airport_name} (${option?.iata_code})`
                  setValue({
                    ...value, 
                    [name] : val
                  })
                }}
                >
                  {option?.airport_name}, {option?.country_name} {option?.iata_code !== "\\N" && `${(option?.iata_code)}`}
                </div>
              ))
            }
          </div>
      </div>
    }
    </>
  )
}

