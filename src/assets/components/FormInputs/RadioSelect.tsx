import { FC, useEffect, useState } from "react"
import { BiX } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { countries } from "../../Constants"





interface radioSelectInterface {
    options: string[]
    formInputs?:any
    label?: string
    isRequired?:boolean,
    name: string,
    setFormInputs: any,
    flex?: string
}
export const RadioSelect:FC<radioSelectInterface> = ({options, formInputs, label, isRequired, name, setFormInputs, flex }) => {
    return(
        <div className={`flex flex-col w-full gap-2 relative`}>
            {label &&
            <label htmlFor={label} className={`${formInputs[name] !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>
                {label}
                {isRequired ? <span className="text-red-600 ml-1">*</span> : ''}
            </label>
            }
            <div className={`flex ${flex == 'row' ? "gap-5" : "flex-col"} gap-2`}>
                {
                    options.map((o, i) => (
                        <div key={i} className="flex items-center gap-1 cursor-pointer" onClick={() => {
                            setFormInputs({
                                ...formInputs, 
                                [name]: o.replace(' ', '-').toLowerCase()
                            })
                         }}>
                            <div className={`size-4 transition-ll duration-1000 rounded-full ${formInputs[name] == o.replace(' ', '-').toLowerCase() ? "bg-primary border-0" : "bg-gray-100 border border-gray-400"}`}></div>
                            <span className={`${formInputs[name] == o.replace(' ', '-').toLowerCase() ? "font-bold" : ""}`}>{o}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




