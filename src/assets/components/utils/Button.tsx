import { FC } from "react"

export interface button {
    text: string,
    className?: string,
    icon?: JSX.Element,
}


export const Button:FC<button> = ({text , className, icon}) => {
    
    return(
       <button className={`py-2 px-6 center gap-3 rounded-tl-xl rounded-br-xl transition-all duration-500 hover:scale-90 active:scale-90 ${className} cursor-pointer`} style={{
        boxShadow: "-2px 2px 6px 0.5px #66CCFFA3"
       }}>
        {text}
        {icon}
       </button>
    )
}