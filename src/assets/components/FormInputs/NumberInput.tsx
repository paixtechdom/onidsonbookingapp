import { FC } from "react"
import { BiMinus, BiPlus } from "react-icons/bi"
import { Button } from "../utils/Button"


interface NumberInputsParentInterface{
  children: JSX.Element,
  setShowPopUp: any,
  showPopUp: string,
  name: string,
  
}

export const NumberInputsParent:FC<NumberInputsParentInterface> = ({children, setShowPopUp, showPopUp, name}) => {
  return(
    <div className={`absolute w-full min-w-[400px] flex flex-col bg-primary bg-opacity-5 backdrop-blur-3xl border border-primary shadow-xl rounded-xl h-fit gap-6 p-9 transition-all duration-500 ${showPopUp == name ? 'z-10' : '-z-10 opacity-[0] scale-[0.8] translate-y-32'} max-h-[70vh] overflow-y-auto`}>

      <div className="flex flex-col">

        {children}

        <div className="w-full mt-5 flex justify-end" onClick={() => {
          setShowPopUp('')
        }}>
          <Button 
            text="Close"
            className="bg-secondary text-white min-w-[150px]"
          />

        </div>

      </div>
    </div>
  )
}

interface numberInputInterface {
    label: string,
    desc?: string,
    value: string | number,
    name: string,
    setFormInputs: any,
    formInputs: any,
  }
  
  export const NumberInput:FC<numberInputInterface> = ({label, value, desc, name, setFormInputs, formInputs}) => {

  

    return(
      <div className="flex items-center justify-between gap-9 mb-6">
        <div className="flex items-center gap-3 fle x-col">
          <p className="font-bold text-zinc-800">{label}</p>
          <p className='text-gray-700 text-sm'> {desc}</p>
        </div>
  
        <div className="flex gap-3 items-center">
          <div className="bg-zinc-300 size-8 text-lg center rounded text-zinc-900 cursor-pointer hover:scale-90 hover:bg-opacity-90 active:scale-90 active:bg-opacity-90 transition-all duration-500" onClick={() => {
            console.log('clicked', formInputs[name])

            let newValue = formInputs[name] == 0 ? 0 : formInputs[name] - 1
            
            setFormInputs({
              ...formInputs,
              [name]:  newValue
            })
          }}>
            <BiMinus />
          </div>
          {value}
          <div className="bg-primary size-8 text-lgl center rounded text-zinc-900 cursor-pointer hover:scale-90 hover:bg-opacity-90 active:scale-90 active:bg-opacity-90 transition-all duration-500" onClick={() => {

              console.log('clicked', formInputs[name])
              
              let newValue = formInputs[name] + 1
              
              setFormInputs({
                ...formInputs,
                [name]:  newValue
              })
              
            }}>
            <BiPlus />
          </div>
        </div>
    </div>
    )
  }