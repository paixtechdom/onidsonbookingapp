import { ImageExtras } from "../../assets/components/ImageExtras"
import { ImageText } from "../../assets/components/sections/ImageText"
import planeRun from "./../../assets/images/planeRun.jpg"
import { CardParent } from "../../assets/components/Card/CardParent"
import { servicesList } from "../../assets/Constants"
import { FaPlaneArrival } from "react-icons/fa6"
import { Button } from "../../assets/components/Button"
import { BeforeFooter } from "../../assets/components/sections/BeforeFooter"
import { Helmet } from "react-helmet-async"
import { Parallax } from "../../assets/components/Parallax"
import { BsTelephoneFill } from "react-icons/bs"
import { Hero } from "./sections/Hero"
import { ImageListing } from "../../assets/components/sections/ImageListing"
import dubai from "../../assets/images/dubai.jpg"
import paris from "../../assets/images/paris.jpg"
import canada from "../../assets/images/canada.jpg"
import newYork from "../../assets/images/new york.jpg"
import bus1 from "../../assets/images/buses/buses 1.jpg"
import bus2 from "../../assets/images/buses/buses 2.jpg"
import bus3 from "../../assets/images/buses/buses 3.jpg"
import siena1 from "../../assets/images/buses/siena 2.png"


const buses = [
    {
        img: bus2,
        text: "Safe Jourmey"
    },
    {
        text: "Experienced Drivers",
        img: bus1,
    },
    {
        img: bus3,
        text: "Safe Vehicles"
    },
    {
        img: siena1,
        text: "Comfortable Jourmey"
    },
]

export const visitablePlaces = [
    {
        img: dubai,
        text: "Dubai"
    },
    {
        img: newYork,
        text: "USA"
    },
    {
        img: paris,
        text: "Paris"
    },
    {
        img: canada,
        text: "Canada"
    },
]


const HomePage: React.FC = () => {
    return(
        <>
         <Helmet>
                <title>
                Onidson Travels and Logistics Ltd
                </title>
                <meta name="description" content="Explore the world with Onidson Travels and Logistics Ltd - personalized tour packages, flight bookings, travel insurance, and professional training. Discover seamless journeys and exceptional travel experiences. Contact us today!" />
            </Helmet>
        <main className="center bg-white flex-col w-full">

            <Hero />

            <h1 className="font-bol text-3xl text-primary">
                A CTA TO BOOK FLIGHT
            </h1>
            


            <ImageListing data={buses} heading="Book your next journey now"/>
            

            <section className="bg-white blue-50 border-y border-primary shado w-xl py-[10vh] center text-center flex-col gap-5 min-h-[30vh] w-full mt-[20vh] mb-[10vh] lg:mb-0 relative">


                    <Parallax id="atartplanning" className="w-full center z-20">
                    <h2 className="text-black font-semibold text-4xl md:text-5/12 w-11/12 lg:w-6/12">
                        Start Planning for Your Next Journey
                    </h2>
                    </Parallax>

                    <Parallax id="atartplanningbtn" className="w-full center z-20">
                    <Button 
                        text="Contact us now"
                        className="bg-white border border-secondary shadow-xl text-black w-fit"
                        navigateTo="contact"
                        icon={
                            <BsTelephoneFill />
                        }
                        />

                    </Parallax>


            </section>

            <CardParent 
                data={servicesList}
                heading="Our Services"
                description="View all services tailored to your needs"
                parentNav={"services"}
            />
            <div className="mb-[15vh] -mt-[5vh] lg:-mt-[10vh]">

            <ImageListing data={visitablePlaces} heading="Travel anywhere, anytime!"/> 
            </div>

            <ImageText
                heading={"Elevate Your Travel Experience with Our"} 
                span={" Expert Services"}
                desc={"Whether you need help with flight bookings, personalized tour packages, or professional travel training, we are here to make your journeys seamless and memorable. Discover the difference with our dedicated team of travel experts."}
                img={planeRun}
            >



                <div className="absolute -bottom-5 left-[45%] z-10">
                    <ImageExtras 
                        icon={<FaPlaneArrival className="text-lg"/>}
                        iconBg={"bg-secondary"}
                        topText={<p className="font-bold">100+</p>}
                        bottomText={<p className="text-gray-400">
                            Successful Flights
                        </p>}
                    />
                </div>
            </ImageText>


           <BeforeFooter 
            text="Contact us now to book your next flight"
           />



            {/* 
                Visitable Places

                Call to action

                who we are - about us  not compulsory

                our services - read more

                trainings

                jobs - read more            
            */}
        </main>
        </>
    )
}


export default HomePage