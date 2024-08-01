import { useEffect} from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { OtherHeros } from "../../../assets/components/OtherHeros"
import { useDispatch} from "react-redux"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaSuitcase } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import logisticsImg from "../../../assets/images/logisticsImg.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"
import { setAlertMessage, setAlertType, toggleShowAlert } from "../../../assets/store/AlertSlice"
import { ImageListing } from "../../../assets/components/ImageListing"
import dubai from "../../../assets/images/dubai.jpg"
import paris from "../../../assets/images/paris.jpg"
import canada from "../../../assets/images/canada.jpg"
import newYork from "../../../assets/images/new york.jpg"

export const travelPlaces = [
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

const FlightService = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentNav(2))
        dispatch(setCurrentDropDownIndex(1))
        dispatch(setCurrentDropDown(""))

        dispatch(toggleShowAlert(true))
        dispatch(setAlertMessage("Online booking coming soon"))
        dispatch(setAlertType("info"))
    }, [])

    return(
        <>
            <Helmet>
                <title>
                    {`Flight Services - Onidson Travels and Logistics Ltd`}
                </title>
                <meta name="description" content={`Discover top-notch flight services including flight training, aircraft maintenance, and charter services. Enhance your aviation career with our expert solutions.`} />
            </Helmet>


            <OtherHeros
                heroHeader={servicesList[1].title}
                desc={servicesList[1].desc}
                img={servicesList[1].img}
                data={servicesList[1].sub}
                dataHeader={`Explore our ${servicesList[1].title} services`}
                breadLinks={["Home", "Services", servicesList[1].title]}
                type="row"
            >
                <div className="-mt-[10vh] mb-[20vh]">
                    <ImageListing data={travelPlaces} heading="Book your next flight now"/>
                </div>
            </OtherHeros>

            {/* In this is image listing conponent inside the OtherHeros Page */}


            {
                servicesList[1]?.sub?.map((service, i) => (
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
                span={"Efficient Logistics Solutions"}
                desc={"Simplify your logistics with our comprehensive solutions. From courier services to freight management, we streamline your delivery operations for optimal efficiency and reliability."}
                img={logisticsImg}>
                    <div className="absolute -bottom-5 right-[45%]">
                        <ImageExtras 
                            icon={<FaSuitcase className="text-lg" />}
                            iconBg={"bg-yellow-700"}
                            topText={ <p className="font-bold">100%</p>}
                            bottomText={<p className="text-gray-400">Insurance</p>}
                        />
                    </div>
            </ImageText>

            <BeforeFooter 
                text="Book your next flight now"
            />
        </>
    )


}


export default FlightService