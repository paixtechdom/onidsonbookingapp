import { FC } from "react"

export interface button {
    text: string,
    className?: string,
    icon?: JSX.Element,
}


export const Button:FC<button> = ({text , className, icon}) => {
    
    return(
       <button className={`py-3 px-6 center gap-3 rounded-tl-xl rounded-br-xl transition-all duration-500 hover:scale-90 active:scale-90 ${className} cursor-pointer`}>
        {text}
        {icon}
       </button>
    )
}