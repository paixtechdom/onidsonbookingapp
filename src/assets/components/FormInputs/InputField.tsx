import { FC } from "react"


export interface InputFieldInterface {
    label?: string,
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
            {label &&
            <label htmlFor={label} className={`${value !== "" ? "font-bold text-secondary" : "text-gray-600"}`}>
                {label}
                {
                    isRequired ?
                    <span className="text-red-600 ml-1">*</span> : ''
                }
            </label>
            }

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
                        className={`bg-white border-none w-full py-[9px] px-3 outline-white ${func && children !== undefined ? 'cursor-pointer' : ''}`}
                    />
                    {
                        icon &&
                        <div className="text-xl cursor-pointer px-3 bg-white">{icon}</div>
                    }
            </div>



            {children}
        </div>
    )
}

