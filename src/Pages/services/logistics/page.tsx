import { useEffect } from "react"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import { OtherHeros } from "../../../assets/components/OtherHeros"
import { useDispatch } from "react-redux"
import { ImageText } from "../../../assets/components/ImageText"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaPassport } from "react-icons/fa6"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import naija from "../../../assets/images/naija.jpg"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"


const LogisticsPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentNav(2))
        dispatch(setCurrentDropDownIndex(2))
        dispatch(setCurrentDropDown(""))
    }, [])

    return(
        <>
            <Helmet>
                <title>
                    {`Logistic Services -  Onidson Travels and Logistics Ltd`}
                </title>
                <meta name="description" content={`Discover efficient logistics solutions tailored for seamless delivery operations. From courier services to comprehensive freight management, optimize your logistics with our reliable solutions.`} />
            </Helmet>
            <OtherHeros
                heroHeader={servicesList[2].title}
                desc={servicesList[2].desc}
                img={servicesList[2].img}
                data={servicesList[2].sub}
                dataHeader={`Explore our ${servicesList[2].title} services`}
                breadLinks={["Home", "Services", servicesList[2].title]}
                type="row"
            />


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
                span={"Effortless Interstate Travel"}
                desc={"Simplify your interstate travel with our seamless booking services for buses, car rentals, and train journeys across Nigeria. Whether you're planning a business trip or a leisurely adventure, we ensure your travel arrangements are convenient and stress-free."}
                img={naija}>
                    <div className="absolute -bottom-5 right-[45%]">
                            <ImageExtras 
                                icon={<FaPassport className="text-lg" />}
                                iconBg={"bg-red-700"}
                                topText={<p className="font-bold">100%</p>}
                                bottomText={<p className="text-gray-400">Efficient Services</p>}
                            />
                        </div>
            </ImageText>

            <BeforeFooter 
                text="Contact us now to get started"
            />
        </>
    )
}


export default LogisticsPage