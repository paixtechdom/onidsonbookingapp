import { BsArrowRight } from "react-icons/bs"
import { Button } from "./Button"
import { ImageTextInterface } from "../Interfaces"
import { FC } from "react"
// import { LazyLoadImage } from "react-lazy-load-image-component"
// import  "react-lazy-load-image-component/src/effects/blur.css"
// import  "react-lazy-load-image-component/src/effects/opacity.css"


export const ImageText:FC<ImageTextInterface> = ({heading, span, desc, children, img}) => {
    return(
        <section className={`w-full center mt-[10vh] pt-[10vh] pb-9 mb-[20vh] lg:mb-0 lg:pb-[20vh] lg:py-[20vh] overflow-hidden relative flex-col lg:flex-row gap-[50px] lg:gap-[25px] xl:gap-[50px] bg-gradient-to-tl from-white via-white to-primaryFade shadow-lg`}>
                
                    <div className="w-11/12 lg:w-6/12 flex items-center justify-end">
                        <div className="flex flex-col gap-5  w-full lg:w-10/12">

                            <h2 className="text-3xl text-secondary">
                                {heading}<span className="font-bold">
                                    {span}
                                </span>
                            </h2>

                            <p className="leading-relaxed tracking-wide text-secondary">
                                {desc}
                            </p>


                            <Button 
                                className="text-white bg-secondary flex items-center h-fit py-3 font-bold w-fit px-9"
                                text="Contact Us" 
                                navigateTo="contact"
                                icon={<BsArrowRight className="ml-3 "/>}
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-6/12 relative min-h-[30px]">
                        {children}
                        {/* <div className="-z-1"> */}

                        <img 
                            src={img} 
                            alt={heading} 
                            // effect='blur'
                            className="w-full z-[-1] lg:rounded-l-xl"  
                            /> 
                        
                        {/* </div> */}
                    </div>
                

            </section>
    )
}