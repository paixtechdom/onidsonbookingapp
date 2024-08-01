import { BsTelephoneFill } from "react-icons/bs"
import { Button } from "./Button"
import { FC } from "react"

interface text {
     text: string
    }

export const BeforeFooter:FC<text> = ({text}) => {
    return(
        <section className="bg-white py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full mt-[20vh] mb-[0vh] relative border-y border-primary">

            <h2 className="text-secondary font-semibold text-4xl md:text-5/12 w-11/12 lg:w-8/12 tracking-wide z-10">
                {text}
            </h2>
        

            <Button 
                text="Contact us now"
                className="bg-white border border-secondary shadow-xl text-black min-w-[200px]"
                navigateTo="contact"
                icon={
                    <BsTelephoneFill />
                }
                />


        </section>
    )
}