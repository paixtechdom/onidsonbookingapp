import { BsAirplaneFill, BsTelephoneFill } from "react-icons/bs"
import { Button } from "../../../assets/components/Button"
import { Parallax } from "../../../assets/components/Parallax"
import airplane from "../../../assets/images/airplane.png"
import bus from "../../../assets/images/buses/bus 1.png"
import bus2 from "../../../assets/images/buses/bus 4.png"
import bus3 from "../../../assets/images/buses/bus 2.png"
// import bus3 from "../../../assets/images/buses/bus 2.jpg"
import { ImageExtras } from "../../../assets/components/ImageExtras"
import { PiCheck, PiPackageFill } from "react-icons/pi"
import { FaPlane } from "react-icons/fa6"
import { FC, useEffect, useRef, useState } from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { FaBus } from "react-icons/fa"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"


const HeroContent= [
    {
        preTitle: "Your adventure begins at",
        title: "Onidson Travels and Logistics Ltd",
        desc: "Embark on your adventure with curated travel experiences and aviation courses offered by Onidson Travels and Logistics Ltd.",
        img: bus2,
        button: {
            learn: "/Services/interstate-travelling",
            cta : {
                text: "Get ticket",
                link: "contact",
                icon: <FaBus />
            }
        },
        topImgExtra: { 
            text: "Safe Travels",
        },
        bottomImgExtra: {
            text: "Trusted Services",
            icon: <FaBus />
        }
    },
    {
        preTitle: "Seamless travel for you",
        title: "Book your next flight here and now",
        desc: "From flight booking, visa and ticket acquitistion, schooling abroad to international tours, we got everything covered for you.",
        img: airplane,
        button: {
            learn: "/services/flight-services",
            cta : {
                text: "Book flight",
                link: "contact",
                icon: <BsAirplaneFill />
            }
        },
        topImgExtra: { 
            text: "Successful Travels",
        },
        bottomImgExtra: {
            text: "Easy Booking",
            icon: <FaPlane />
        }
        
    }, 
    {
        preTitle: "Travel safely and swiftly",
        title: "Interstate Travelling within Nigeria",
        desc: "Toggle to and fro between Lagos, Port Harcourt and Abuja",
        img: bus,
        button: {
            learn: "/Services/interstate-travelling",
            cta : {
                text: "Get ticket",
                link: "contact",
                icon: <FaBus />
            }
        },
        topImgExtra: { 
            text: "Comfort",
        },
        bottomImgExtra: {
            text: "Easy Booking",
            icon: <FaBus />
        }
    },
    {
        preTitle: "Taking courier services to another level",
        title: "We handle the movement of your packages",
        desc: "Do you want to send packages internationally? We've got you covered.",
        img: bus3,
        button: {
            learn: "/Services/logistics-services",
            cta : {
                text: "Contact Us",
                link: "contact",
                icon: <BsTelephoneFill />
            }
        },
        topImgExtra: { 
            text: "Swift Delivery",
        },
        bottomImgExtra: {
            text: "International Deliveries",
            icon: <PiPackageFill />
        }
    },
]



export const Hero: React.FC = () => {
    const [ currentSlide, setCurrentSlide ] = useState(1)
    const [startX, setStartX ] = useState(0)
    const sliderRef = useRef(null)
    
    useEffect(() => {
        const int = setInterval(() => {
            slide()
        }, 10000);
        return () => clearInterval(int)
    }, [currentSlide])

    const slide = () => {
        setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
    }


    const handleTouchStart = (e:any) => {
        setStartX(e.touches[0].clientX)
    }
    const handleTouchEnd = (e:any) => {
        const deltaX = e.changedTouches[0].clientX - startX
        const threshold = 100;
        if(Math.abs(deltaX) > threshold){
            slide()
        }else if(deltaX< 0 && currentSlide < HeroContent.length - 1){
            setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )
        }
    }

    const arrowClass = "text-5xl text-secondary cursor-pointer h-[80px] center rounded-full w-[80px] p-4 transition-all duration-500 ease-in-out bg-primary bg-opacity-15 shadow-xl backdrop-blur-3xl hover:bg-opacity-30 hover:lg:w-[150px] hover:h-[150px]"


    return(
        <section className="min-h-screen h-fit bg-white heroGradient2 -heroGradient bg-cover bg-center w-full center relative pb-[15vh] lg:pb-0 pt-[15vh] lg:py-0 overflow-hidden"> 
            {/* ARROWS */}
            <>
           <div className="absolute hidden lg:flex w-full [105%] justify-between items-center z-20 ">

            <div className={` ${arrowClass}`} onClick={() => setCurrentSlide(currentSlide == 0 ? HeroContent.length - 1 : prev => prev - 1)}>
                <BiChevronLeft />
            </div>

            <div className={` ${arrowClass}`}  onClick={() => 
                setCurrentSlide(currentSlide === HeroContent.length - 1 ? 0 : prev => prev + 1 )}>
                    <BiChevronRight />
                </div>


            </div>
            {/*  */}

            <div className="center absolute top-[85vh] z-30">
                <div className="center gap-3 bg-secondary backdrop-blur-xl border border-secondary p-4 rounded-full px-9">
                    {
                        HeroContent.map((i, j) => (
                            <p key={j} className={`${currentSlide == j ? 'h-4 lg:h-5 w-4 lg:w-5 bg-primary ' : 'w-3 h-3 bg-white'} border border-primary  rounded-full transition-all duration-500 cursor-pointer`} onClick={() => setCurrentSlide(j)}>
                               <span className="hidden">{i.title}</span></p>
                        ))
                    }
                </div>
            </div>
            </>
            <div className="relative flex justify-center lg:items-center min-h-screen h-fit w-full">

                {
                    HeroContent.map((content, i) =>(
                        <div key={i} className={`absolute w-11/12 lg:w-10/12 xl:w-9/12 flex flex-col lg:flex-row items-center justify-center z-10 gap-[50px] lg:gap-0 transition-all duration-1000 ease-in-out ${currentSlide == i ? "": "opacity-0 scale-[0.8]" }`}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        ref={sliderRef}
                        >
                        
                            <div className="flex flex-col w-full lg:w-8/12 pr-[40px]">
                                <Parallax id="heroadve">
                                    <p className="leading-relaxed tracking-wide text-gray-800">
                                        {content.preTitle}
                                    </p>
                                </Parallax>

                                <Parallax id="herohone">
                                    <h1 className="text-4xl tracking-wide lg:leading-[60px] md:text-5xl text-secondary font-bold md:w-9/12 lg:w-full">
                                        {content.title}
                                    </h1>
                                </Parallax>

                                <Parallax id="heropdesc">
                                    <p className="leading-relaxed tracking-wide text-gray-900 mt-6 md:w-9/12 lg:w-full">
                                        {content.desc}
                                    </p>
                                </Parallax>

                                <Parallax id="herobtns">
                                    <div className="flex gap-3 items-center justify-ce nter mt-6">
                                        <Button
                                            text={content.button.cta.text}
                                            className="bg-secondary shadow-xl text-white w-fit"
                                            navigateTo={content.button.cta.link}
                                            icon={content.button.cta.icon}
                                        />

                                        <Button
                                            text="Learn more"
                                            className="border border-secondary bg-transparent text-secondary w-fit"
                                            scrollTo={content.button.learn!.includes('/') ? content.button.learn : ''}

                                            navigateTo={content.button.learn.includes('/') ? content.button.learn.replace('/','') : ''}
                                            />

                                    </div>
                                </Parallax>
                            </div>
                        
                            <div className="center lg:w-6/12 relative md:absolute md:right-0 md:z-[-1] md:opacity-90 md:scale-[0.6] md:h-[40vh] md:top-[30vh] lg:relative lg:opacity-100 lg:scale-[1] lg:top-0 lg:h-fit ">
                                <LazyLoadImage 
                                    src={content.img} 
                                    placeholderSrc={"Airplane and destinations"} 
                                    effect='blur'
                                    className="w-full z-[50] min- h- [45px]  g-red-500"
                                
                                />

                            <div className="absolute -top-5 right-[45%] z-[50]">
                                <ImageExtras 
                                    icon={<PiCheck />}
                                    iconBg={"bg-green-700"}
                                    topText={<p className="font-bold">100%</p>}
                                    bottomText={<p className="text-gray-400">
                                        {content.topImgExtra.text}
                                    </p>}
                                />
                            </div>
                            <div className="absolute -bottom-[10%] left-[35%] z-[50]">
                                <ImageExtras 
                                    icon={content.bottomImgExtra?.icon}
                                    iconBg={"bg-purple-700"}
                                    topText={<p className="font-bold">100%</p>}
                                    bottomText={<p className="text-gray-400">
                                        {content.bottomImgExtra.text}
                                    </p>}
                                />
                            </div>




                            </div>
                        </div>
                    ))
                }
            </div>



            {/* BLOD - VISIBLE FROM LG */}
            <div className="absolute lg:-right-[20%] bottom-0 lg:bottom-auto z-[5] w-full scale-[0.4] lg:scale-[0.2] hidden lg:block">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full scale-[3] opacity-50">
                <path fill="#93C5FD" d="M37.5,-49.2C50.5,-42.2,64.1,-33.8,72.5,-20.6C80.9,-7.4,84,10.4,77.4,23.4C70.7,36.3,54.4,44.4,39.9,44.5C25.4,44.7,12.7,36.9,1,35.6C-10.8,34.3,-21.6,39.4,-33.5,38.4C-45.4,37.4,-58.5,30.4,-63.5,19.6C-68.5,8.8,-65.3,-5.7,-59.7,-18.2C-54,-30.8,-45.9,-41.4,-35.5,-49.2C-25.2,-57,-12.6,-61.9,-0.2,-61.7C12.3,-61.5,24.6,-56.1,37.5,-49.2Z" transform="translate(100 100)"/>
                </svg>
                
            </div>




            {/* </div> */}


        </section>
    )
}

// add image extras
// not cumpolsory it is behind the image
type BlobType = {
    path: string
}

export const BlobOne:FC<BlobType> = ({path}) => {
    return(
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={path} d="M45.9,-39.9C59.7,-32.2,71.2,-16.1,71.7,0.6C72.3,17.2,62,34.5,48.3,39.1C34.5,43.8,17.2,35.9,2.3,33.5C-12.6,31.2,-25.2,34.5,-38.1,29.8C-51,25.2,-64.2,12.6,-66.2,-2C-68.2,-16.6,-59,-33.1,-46.1,-40.9C-33.1,-48.7,-16.6,-47.7,-0.2,-47.4C16.1,-47.2,32.2,-47.7,45.9,-39.9Z" transform="translate(100 100)"/>
        </svg>
    )
}
export const BlobTwo:FC<BlobType> = ({path}) => {
    return(
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill={path} d="M20.1,-4.9C23.7,4.7,22.8,17.5,13.8,25.6C4.8,33.7,-12.4,37.2,-28.1,28.2C-43.8,19.3,-58,-2.1,-53.1,-13.5C-48.2,-25,-24.1,-26.4,-7.9,-23.8C8.2,-21.3,16.4,-14.6,20.1,-4.9Z" transform="translate(100 100)" />
        </svg>
    )
}


