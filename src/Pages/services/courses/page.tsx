import { useEffect } from "react"
import { ImageText } from "../../../assets/components/ImageText"
import { OtherHeros } from "../../../assets/components/OtherHeros"
import agent from "../../../assets/images/agent.jpg"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { FaPlaneDeparture } from "react-icons/fa"
import { PiCheck } from "react-icons/pi"
import { BeforeFooter } from "../../../assets/components/BeforeFooter"
import { Helmet } from "react-helmet-async"
import { useDispatch } from "react-redux"
import { setCurrentDropDown, setCurrentDropDownIndex, setCurrentNav } from "../../../assets/store/navigation/navigationSlice"
import { servicesList } from "../../../assets/Constants"
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"




const CoursesPage = () => {

   const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCurrentNav(2))
        dispatch(setCurrentDropDownIndex(3))
        dispatch(setCurrentDropDown(""))
    }, [])

   return(
      <>
          <Helmet>
                <title>
                    Aviation Courses at Onidson Travels and Logistics Ltd
                </title>
                <meta name="description" content={"Elevate your skills and advance your career with our professional courses at Brave. Master new technologies, develop business acumen, or gain certifications in various fields. Join us and unlock your potential today!"} />
            </Helmet>  
         <main className="center w-full flex-col">
            
         <OtherHeros
                heroHeader={servicesList[3].title}
                desc={servicesList[3].desc}
                img={servicesList[3].img}
                data={servicesList[3].sub}
                dataHeader={`Explore our ${servicesList[3].title} services`}
                breadLinks={["Home", "Aviaation Courses", servicesList[3].title]}
                type="row"
            />

{
                servicesList[3]?.sub?.map((service, i) => (
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
               heading="Unlock Your Potential with Expert-Led Training"
               desc="Our courses are designed to equip you with the skills needed to excel in today's job market. Led by industry experts, each course offers practical experience and theoretical learning. Explore our courses and start your journey towards professional excellence"
               img={agent}>
                  <>
                     <div className="absolute -bottom-5 right-[50%]">
                        <ImageExtras 
                              icon={<PiCheck className="text-lg"/>}
                              iconBg={"bg-green-700"}
                              topText={<p className="font-bold">100+</p>}
                              bottomText={<p className="text-gray-400">
                                 Successful Flights
                              </p>}
                        />
                     </div>
                     <div className="absolute -top-5 left-[50%]">
                        <ImageExtras 
                              icon={<FaPlaneDeparture className="text-lg"/>}
                              iconBg={"bg-secondary"}
                              topText={<p className="font-bold">100+</p>}
                              bottomText={<p className="text-gray-400">
                                 Successful Flights
                              </p>}
                        />
                     </div>
                  </>
                  
               </ImageText>
      
            <BeforeFooter text="Register for a professional aviation course today!"/>
            
      

         </main>
      </>
   )
}


export default CoursesPage