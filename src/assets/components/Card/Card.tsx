import { FC } from "react"
import { CardInterface } from "../../Interfaces"
import { Button } from "../Button"
import { BsArrowRight } from "react-icons/bs"
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const Card:FC<CardInterface> = ({data}) => {
    return(
        <div className="flex flex-col gap-6 w-full shadow-lg rounded-xl bg-white h-full bg-gradient-to-b from-primaryFade via-white to-white overflow-hidden">
            <div className="center w-full overflow-hidden min-h-[30px] bg-gradient-to-br from-secondaryFade to-transparent via-transparent p-2">
            <img 
                    src={data?.img} 
                    alt={data?.title} 
                    className="w-full transition-all duration-500 hover:scale-150 active:scale-150 rounded-t-lg"
                />
            </div>

            <div className="flex flex-col gap-3 p-3 px-4 pb-8">
                <h3 className="font-bold">{data?.title}</h3>

                <div className="flex flex-col gap-3">
                    {
                        data?.sub?.map((sub, i) => (
                            <p key={i} className="rounded-full shadow-md center bg-white p-2 text-gray-600 w-fit text-sm pr-4">
                                <span className="mr-2 mt-1 h-3 w-3 rounded-full bg-primary"></span>

                                {sub?.title}
                            </p>
                        ))
                    }
                </div>
                {
                    data?.sub?.map((sub, i) => (
                        i == 0 &&
                        sub?.title ?
                        <Button key={i} text="Read more"
                            className="bg-secondary text-white font-semibold lg:w-full mt-9 text-sm"
                            icon={
                                <BsArrowRight />
                            }
                        /> : ""
                        
                    ))
                }
            </div>
        </div>
    )
}