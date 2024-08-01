import { FC } from "react"
import { ListingCardInterface } from "../../Interfaces"
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const ListingCard:FC<ListingCardInterface> = ({data}) => {
    return(
        <div className="flex flex-col gap-6 w-full shadow-lg rounded-xl bg-gradient-to-b from-primaryFade via-white to-white overflow-hidden">
            <div className="center w-full overflow-hidden min-h-[30px] bg-gradient-to-br from-secondaryFade to-transparent via-transparent p-2">
            <img 
                src={data?.img} 
                alt={data?.title} 
                className="w-full transition-all duration-500 hover:scale-150 active:scale-150 rounded-t-lg"
            />
            </div>

            <div className="flex flex-col gap-4 p-3 px-6 pb-8">
                <h3 className="font-semibold text-lg">{data?.title}</h3>
                <div className="flex flex-col gap-3">
                    {
                        data?.sub?.map((sub: any, i) => (
                            <div key={i} className="flex items-center text-gray-700 w-fit text-sm">
                                <span className="mr-2 h-3 w-3 rounded-full bg-primary"></span>
                                <span>{sub}</span>
                            </div>
                        ))
                    }
                </div>
   

            </div>
        </div>
    )
}