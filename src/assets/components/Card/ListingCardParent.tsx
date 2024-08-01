import { FC } from "react"
import { ListingCardParentInterface } from "../../Interfaces"
import { ListingCard } from "./ListingCard"

export const ListingCardParent:FC<ListingCardParentInterface> = ({data, heading, desc}) => {

    return(
        <div id={heading?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")?.replace(" ", "")} className="w-full center flex-col gap-9 pt-[20vh]">
            <div className="flex flex-col items-center gap-2 w-11/12 xl:w-10/12 text-secondary">   
                <h2 className="font-semibold text-left text-4xl w-full">{heading}</h2>  
                <div className="flex flex-col gap-3 w-full tracking-wide leading-relaxed mt-5">
                    {
                        typeof(desc) == "string" ? 
                        <p className="w-full ">{desc}</p>
                        : 
                        desc?.map((d, i) => (
                            <p key={i} className="w-full ">{d}</p>
                        ))
                    }
                </div>
            </div>


            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-11/12 xl:w-10/12 gap-9`}>
                {
                    data?.map((d, i) => (
                        <ListingCard key={i} data={d}/>
                    ))
                }
            </div>
        </div>
    )
}