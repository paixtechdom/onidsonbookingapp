import { FC } from "react"
import { Card } from "./Card"
import { CardParentInterface } from "../../Interfaces"
import { Link } from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"

export const CardParent:FC<CardParentInterface> = ({data, heading, description,  parentNav }) => {
    
    return(
        <div id={heading?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")} className="w-full center flex-col gap-9 py-[10vh] lg:py-[20vh] z-20">
            <div className="flex flex-col items-center text-center gap-4 w-11/12 lg:w-9/12">
                <h2 className="font-semibold text-center text-4xl md:text-5/12">{heading}</h2>
                <Link to={`/${parentNav}`} className="text-secondary center flex-wrap">
                    {description}
                    <BsArrowRight className="ml-1"/>
                </Link>
                
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 xl:w-10/12 gap-9">
                {
                    data?.map((d, i) => (
                        <Link to={`/${parentNav}/${
                            parentNav == "courses" || parentNav=="services"
                            ?d.title?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase() : ""} 
                            `} key={i} className="h-full">
                            <Card  data={d}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}