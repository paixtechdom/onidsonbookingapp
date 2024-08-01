import { useNavigate } from "react-router-dom"
import { button } from "../Interfaces"
import { FC } from "react"


export const Button:FC<button> = ({text , navigateTo, className, icon, scrollTo}) => {
    const navigate = useNavigate()
    return(
       <button onClick={() => {
        if(navigateTo){
            navigate(`/${navigateTo.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}`)
        }else{
            document.querySelector(`#${scrollTo}`)?.scrollIntoView({
                behavior: "smooth"
            })
        }
       }}
       className={`py-3 px-6 center gap-3 rounded-tl-xl rounded-br-xl transition-all duration-500 hover:scale-90 active:scale-90 ${className} cursor-pointer`} style={{
        boxShadow: "-2px 2px 6px 0.5px #66CCFFA3"
       }}>
        {text}
        {icon}
       </button>
    )
}