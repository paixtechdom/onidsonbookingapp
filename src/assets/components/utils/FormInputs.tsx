import { FC, useEffect, useState } from "react"
import { BiX } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"
import { countries } from "../../Constants"


export interface InputFieldInterface {
    label: string,
    type: string,
    name: string,
    className?: string
    handleChange: Function,
    value: string | number,
    placeholder?: string,
    formInputs?: string,
    icon?: JSX.Element,
    children?: JSX.Element,
    isRequired?: boolean, 
    isReadonly?: boolean, 
    func?: Function, 

}


export const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value, icon, children, isRequired, isReadonly, func, placeholder }) => {
    return(
        <div className={`flex flex-col w-full gap-2 ${className} relative`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>
                {label}
                {
                isRequired ?
                <span className="text-red-600 ml-1">*</span> : ''
                }
            </label>

            <div className={`flex rounded-tl-xl rounded-br-xl w-full  items-center relative border border-secondary ${value !== "" ? "border focus:border-secondary border-opacity-30 " : " border-secondary"} hover:border hover:border-secondary cursor-pointer overflow-hidden
                 ${func ? 'cursor-pointer' : ''}`} onClick={() => func && func()}>
                     
                    <input 
                        type={type}
                        onChange={(e) => handleChange(e)}
                        name={name}
                        required
                        value={value}
                        readOnly={isReadonly}
                        placeholder={placeholder}
                        className={`bg-transparent border-none w-full py-[9px] px-3 outline-white ${func && children !== undefined ? 'cursor-pointer' : ''}`}
                    />
                <div className="text-xl cursor-pointer px-3">{icon}</div>
            </div>



            {children}
        </div>
    )
}


interface selectInterface {
    options?: any[],
    showPopUp?: string,
    setShowPopUp?: any, 
    formInputs?: any,
    name: string,
    label: string,
    gridDisplay?: string
}


export const Select:FC<selectInterface> = ({setShowPopUp, showPopUp, options, formInputs, name, label, gridDisplay}) => {
   
    return(
        <div className={`absolute w-full flex flex-col bg-primary bg-opacity-5 backdrop-blur-3xl border border-primary shadow-xl rounded-xl h-fit gap-6 p-9 transition-all duration-500 ${showPopUp == name ? 'z-10' : '-z-10 opacity-[0] scale-[0.8] translate-y-32'} max-h-[70vh] overflow-y-auto`}>

            <div className="text-xl w-full flex justify-between items-center cursor-pointer sticky top-0 bg-primary bg-opacity-5 backdrop-blur-3xl z-20 p-3 px-6 rounded-full" onClick={() => {setShowPopUp(false)}}>
                <label htmlFor={label} className="font-bold text-black">
                    {label}
                </label>
                <BiX className="text-3xl bg-white rounded-full p-1 size-8 btn"/>
            </div>

            <div className={`${gridDisplay ? `grid grid-cols-5` : "flex flex-col"}  gap-3 w-full`}>

                {
                    options?.map((o, i) => (
                        <div key={i} className={`py-3 border-l-4 border-primary px-3 w-full rounded-lg shadow-xl cursor-pointer hover:bg-gray-200 transition-all duration-500 active:bg-gray-200 ${formInputs[name] == o ? "bg-white" : ""}`} onClick={() => {
                            formInputs[name] = o
                            setShowPopUp('')
                        }}>
                            {o}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}




interface radioSelectInterface {
    options: string[]
    formInputs?:any
    label: string
    isRequired:boolean,
    name: string,
    setFormInputs: any
}
export const RadioSelect:FC<radioSelectInterface> = ({options, formInputs, label, isRequired, name, setFormInputs }) => {
    return(
        <div className={`flex flex-col w-full gap-2 relative`}>
            <label htmlFor={label} className={`${formInputs[name] !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>
                {label}
                {isRequired ? <span className="text-red-600 ml-1">*</span> : ''}
            </label>
            <div className="flex flex-col gap-2">
                {
                    options.map((o, i) => (
                        <div key={i} className="flex items-center gap-2 cursor-pointer" onClick={() => {
                            setFormInputs({
                                ...formInputs, 
                                [name]: o
                            })
                         }}>
                            <div className={`size-5 transition-ll duration-1000 rounded-full ${formInputs[name] == o ? "bg-primary border-0" : "bg-gray-100 border border-gray-400"}`}></div>
                            <span className={`${formInputs[name] == o ? "font-bold" : "last:"}`}>{o}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}




// ******** SELECT COUNTRIES ***********

export const CountriesOption:FC<any> = ({setFormInputs, setShowCountries, showCountries, searchInput, setSearchInput, formInputs }) => {
    const [ Countries, setCountries ] = useState<any>([])

    useEffect(() => {
        const newCountriesList = countries.filter((c) => c.country.toLowerCase().includes(searchInput.toLowerCase()))

        setCountries(newCountriesList)
    }, [searchInput])

    return(
            <div className={`absolute w-full z-20 flex flex-col shadow-xl rounded-xl h-fit gap-6 transition-all duration-500 max-h-[70vh] overflow-y-scroll border border-primary border-opacity-50 ${showCountries ? '' : 'opacity-[0] scale-[0]'}`}>

            <div className={`w-full center flex-col bg-secondary backdrop-blur-3xl h-fit gap-6`}>
                <div className="text-sm w-full flex flex-col  justify-between items-center cursor-pointer sticky top-0 bg-primary bg-opacity-80 backdrop-blur-xl z-20 gap-4 px-9 pt-9 pb-4" >
                    <div className="flex justify-between items-center w-full font-bold text-xl" onClick={() => {
                    setShowCountries(false)
                }}>
                        Select Country
                        <BiX className="text-3xl"/>
                    </div>
                    <div className="flex bg-secondary bg-opacity-50 w-full rounded-full border border-primary overflow-hidden border-opacity-40">
                        <div className="p-3">
                            <BsSearch className="text-lg text-zinc-900"/>
                        </div>
                        <input type="text"  placeholder="Search Countries" 
                        className="bg-transparent outline-none w-full p-3" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>

                    </div>

                </div>

                <div className="flex flex-col gap-3 w-full px-9 pb-9">

                    {
                        Countries.map((c:any, i:number) => (
                            <div key={i} className="py-3 border border-primary px-5 w-full rounded-full border-opacity-30 text-sm cursor-pointer hover:bg-primary transition-all duration-500 active:bg-primary flex items-center gap-3" onClick={() => {
                                setFormInputs({
                                    ...formInputs,
                                    ["country"]: c.country
                                })
                                setShowCountries(false)
                            }}> 
                                <i className={c.flag}></i>
                                {c.country}
                            </div>
                        ))
                    }
                    {
                        Countries.length == 0 ? 
                        <p className="text-sm">Not Found</p> : ''
                    }

                </div>
            </div>
            </div>
    )
}