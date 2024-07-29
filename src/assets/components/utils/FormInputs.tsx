import { FC } from "react"
import { BiX } from "react-icons/bi"

export interface InputFieldInterface {
    label: string,
    type: string,
    name: string,
    className?: string
    handleChange: Function,
    value: string,
    placeholder?: string,
    formInputs?: any,
    icon?: JSX.Element,
    children?: JSX.Element,
    isRequired?: boolean, 
    isReadonly?: boolean, 
    func?: Function, 

}


export const InputField:FC<InputFieldInterface> = ({type, label, className, handleChange, name, value, icon, children, isRequired, isReadonly, func }) => {
    return(
        <div className={`flex flex-col w-full gap-2 ${className} relative`}>
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>
                {label}
                {
                isRequired ?
                <span className="text-red-600 ml-1">*</span> : ''
                }
            </label>

            <div className={`flex rounded-tl-xl rounded-br-xl w-full px-3 items-center relative border py-[9px] border-secondary ${value !== "" ? "border focus:border-secondary border-opacity-30 " : " border-secondary"} hover:border hover:border-secondary cursor-pointer
                 ${func ? 'cursor-pointer' : ''}`} onClick={() => func && func()}>
                     
                    <input 
                        type={type}
                        onChange={(e) => handleChange(e)}
                        name={name}
                        required
                        value={value}
                        readOnly={isReadonly}
                        className={`bg-transparent border-none w-full outline-white ${func ? 'cursor-pointer' : ''}`}
                    />
                <div className="text-xl cursor-pointer">{icon}</div>
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

                <div className={`${gridDisplay ? `grid grid-cols-${gridDisplay}` : "flex flex-col"}  gap-3 w-full`}>

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



