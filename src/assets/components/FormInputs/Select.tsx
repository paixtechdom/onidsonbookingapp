import { FC } from "react"
import { BiX } from "react-icons/bi"

interface selectInterface {
    options?: any[],
    showPopUp?: string,
    setShowPopUp?: any, 
    formInputs?: any,
    name: string,
    label: string,
    gridDisplay?: string,
    setFormInputs? : any
}


export const Select:FC<selectInterface> = ({setShowPopUp, showPopUp, options, formInputs, name, label, gridDisplay, setFormInputs}) => {
   
    return(
        <div className={`absolute w-full lg:min-w-[350px] flex flex-col bg-primary bg-opacity-5 backdrop-blur-3xl border border-primary shadow-xl rounded-xl h-fit gap-6 p-9 transition-all duration-500 ${showPopUp == name ? 'z-10' : '-z-10 opacity-[0] scale-[0.8] translate-y-32'} max-h-[70vh] overflow-y-auto`}>

            <div className="text-xl w-full flex justify-between items-center cursor-pointer sticky top-0 bg-primary bg-opacity-5 backdrop-blur-3xl z-20 p-3 px-6 rounded-full" onClick={() => {setShowPopUp(false)}}>
                <label htmlFor={label} className="font-bold text-black">
                    {label}
                </label>
                <BiX className="text-3xl bg-white rounded-full p-1 size-8 btn"/>
            </div>

            <div className={`${gridDisplay ? `grid grid-cols-5` : "flex flex-col"}  gap-3 w-full`}>

                {
                    options?.map((o, i) => (
                        <div key={i} className={`py-3 border-l-4 border-primary px-3 w-full rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 transition-all duration-500 active:bg-gray-200 capitalize ${formInputs[name] == o ? "bg-white" : ""}`} onClick={() => {
                            setFormInputs({
                                ...formInputs,
                                [name]: o
                            })
                            setShowPopUp('')
                        }}>
                            {o.replace("-", " ")}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}



