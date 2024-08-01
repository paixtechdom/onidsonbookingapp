import { useEffect } from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { OtherHeros } from "../../../assets/components/OtherHeros"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaPlane } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import planaTakeOff from "../../../assets/images/planaTakeOff.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { useDispatch } from "react-redux"
import { Helmet } from "react-helmet-async"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../../assets/store/AlertSlice"
import { ImageListing } from "../../../assets/components/ImageListing"
import bus1 from "../../../assets/images/buses/buses 1.jpg"
import bus2 from "../../../assets/images/buses/buses 2.jpg"
import bus3 from "../../../assets/images/buses/buses 3.jpg"
import siena1 from "../../../assets/images/buses/siena 2.png"


const buses = [
    {
        img: bus2,
        text: "Safe"
    },
    {
        img: bus3,
        text: "Fast"
    },
    {
        img: siena1,
        text: "Comfort"
    },
    {
        img: bus1,
        text: "Experienced Drivers"
    },
]



const InterStateTrevellingPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentNav(2))
        dispatch(setCurrentDropDownIndex(0))
        dispatch(setCurrentDropDown(""))

        dispatch(toggleShowAlert(true))
        dispatch(setAlertMessage("Online booking coming soon"))
        dispatch(setAlertType("info"))
    }, [])
    


    return(
        <>
            <Helmet>
                <title>
                    {`Interstate Travelling - Onidson Travels and Logistics Ltd`}
                </title>
                <meta name="description" content={`Explore seamless interstate travel services across Nigeria. From bus and car rentals to train services, travel comfortably and conveniently with our reliable transportation solutions`} />
            </Helmet>

            <OtherHeros
                heroHeader={servicesList[0].title}
                desc={servicesList[0].desc}
                img={servicesList[0].img}
                data={servicesList[0].sub}
                dataHeader={`Explore our ${servicesList[0].title} services`}
                breadLinks={["Home", "Services", servicesList[0].title]}
                type="row"
            >
            <div className="-mt-[10vh] mb-[20vh]">
                <ImageListing data={buses} heading="Book your next journey now"/>    
            </div>
            </OtherHeros>

            {/* In this is image listing conponent inside the OtherHeros Page */}


            {
                servicesList[0]?.sub?.map((service, i) => (
                <ListingCardParent 
                    key={i}
                    data={service.sub}
                    heading={service.title}
                    desc={service.desc}
                    parentNav={"services/"+service.title.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-")?.replace(" ", "-").toLowerCase()}
                />

                ))
            }

            <ImageText 
                span={"Effortless Flight Arrangements"}
                desc={"Book flights, accommodations, and transportation with ease. Our team ensures your travel arrangements are seamless and hassle-free."}
                img={planaTakeOff}>

                <div className="absolute -bottom-5 right-[45%]">
                    <ImageExtras 
                        icon={<FaPlane className="text-lg" />}
                        iconBg={"bg-blue-700"}
                        topText={<p className="font-bold">100%</p>}
                        bottomText={ <p className="text-gray-400">Easy Booking</p>}
                    />
                </div>

            </ImageText>

            <BeforeFooter 
                text="Book your next travel now"
            />
        </>
    )
}


export default InterStateTrevellingPage