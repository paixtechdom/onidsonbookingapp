import { BeforeFooter } from "../../assets/components/BeforeFooter";
import { ImageListing } from "../../assets/components/ImageListing";
import { ImageText } from "../../assets/components/ImageText";
import { visitablePlaces } from "../home/page";
import img from "../../assets/images/visa.jpg"
import manager from "../../assets/images/manager.jpg"
import { Button } from "../../assets/components/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHeart, FaUsers, FaHandsHelping } from 'react-icons/fa'; // Import icons as needed
import { FaPlane } from "react-icons/fa6";
import { BreadCrumbs } from "../../assets/components/BreadCrumbs";
import { Helmet } from "react-helmet-async";
import { Parallax } from "../../assets/components/Parallax";
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"


const values = [
    {
      title: "Customer Satisfaction",
      desc: "We prioritize customer satisfaction above all else. Your happiness is our success.",
      icon: <FaHeart className="text-4xl text-red-600" />,
    },
    {
      title: "Community Engagement",
      desc: "We believe in giving back to the community and creating positive impacts wherever we go.",
      icon: <FaUsers className="text-4xl text-blue-600" />,
    },
    {
      title: "Support and Assistance",
      desc: "Our dedicated team is here to provide you with support and assistance every step of the way.",
      icon: <FaHandsHelping className="text-4xl text-green-600" />,
    },
    {
      title: "Excellence in Travel Services",
      desc: "We strive for excellence in every aspect of our travel services, ensuring memorable and seamless experiences.",
      icon: <FaPlane className="text-4xl text-purple-600" />,
    },
  ];




const AboutPage = () => {
    return(
        <>  
            <Helmet>
                <title>
                    About Onidson Travels and Logistics Ltd
                </title>
                <meta name="description" content="Welcome to our travel agency, Onidson Travels and Logistics Ltd. Our dedicated team offers personalized travel services, seamless flight bookings, and expert visa assistance. Let us create unforgettable journeys for you!" />
            </Helmet>
            <main className="mb-[15vh]">
                <section className="w-full center min-h-[90vh] bg-white flex-col flex pt-[15vh] md:pt-[10vh] lg:pt-[20vh] pb-[10vh]">
                    <div className="flex flex-col w-11/12 lg:w-10/12 gap-6">
                        <div className="flex flex-col w-full lg:w-9/12 gap-6">

                            <Parallax id="abouthone">

                            <h1 className="text-4xl text-secondary">
                                    Learn About Us and <span className="font-bold">Our Commitment to Excellence</span>
                            </h1>
                            </Parallax>

                            <div className="flex flex-col gap-3 text-gray-900 tracking-wide leading-relaxed">
                                <Parallax id="aboutpon">
                                <p
                                >
                                    Our dedicated team of travel professionals is passionate about creating unforgettable journeys for our clients. With years of experience, we offer personalized services tailored to meet all your travel needs. From seamless flight bookings to comfortable accommodations and comprehensive travel packages, we ensure every aspect of your trip is meticulously planned and executed.
                                </p>
                                </Parallax>

                                <Parallax id="abouthtwo">
                                <p>
                                    We also provide expert visa and passport services, making your travel documentation hassle-free. Whether you're planning a family vacation, a business trip, or an adventure to a new destination, we are here to make your travel experience smooth and enjoyable.
                                </p>
                                </Parallax>
                            </div>



                            <div className="flex gap-3 items-center md:w-9/12">
                                <Button
                                    text="Contact us"
                                    className="bg-secondary shadow-xl text-white lg:w-fit"
                                    navigateTo="contact"
                                    icon={
                                        <BsTelephoneFill />
                                    }
                                />

                                <Button
                                    text="Learn more"
                                    className="border border-secondary bg-transparent text-black  lg:w-fit"
                                    scrollTo="manager"
                                />

                            </div>
                        </div>
                    </div>
                </section>

                <BreadCrumbs links={["Home", "About Us"]} />

                <section id="manager" className="center bg-white py-16 mb-[10vh]">
                    <div className="max-11/12 lg:w-10/12 mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 text-secondary">Our Values</h2>
    
                        <div className="grid grid-cols-1 gap-y-9 gap-x-4 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-white p-3 py-4 rounded-xl shadow-xl">
                            <div className="bg-white rounded-full p-4 shadow-lg">
                                {value.icon}
                            </div>
                            <h3 className="text-lg font-bold mt-4 text-r">{value.title}</h3>
                            <p className="text-gray-700 mt-3 text-sm tracking-wide leading-relaxed">{value.desc}</p>
                            </div>
                        ))}
                        </div>
                    </div>
                    </section>


                <section className="w-full center flex flex-col pt-[10vh]">
                    <div className="w-11/12 lg:w-10/12 flex flex-col lg:flex-row gap-9 md:gap-[50px] shadow-xl p-2 rounded-xl bg-secondary items-center">
                        <LazyLoadImage 
                            src={manager} 
                            placeholderSrc={"Simisoluwa Joseph"} 
                            effect='blur'
                            className="rounded-t-xl lg:rounded-r-none lg:rounded-l-xl w-full h-fit"
                        />
                        
                        <Parallax id="ourmanager" className=" w-full">
                        <div className="flex flex-col justify-center w-full gap-1 text-gray-200 py-6 px-3">

                            <h2 className="font-semi-bold text-2xl ">
                                Our Manager
                            </h2>
                            <p className="font-bold mt-3 text-primary">
                                Simisoluwa Joseph
                            </p>
                            <p className="text-sm">
                                Manager, Eden Travels
                            </p>

                            <p className="tracking-wide leading-relaxed mt-5">
                                Certified Customer Support <br />
                                Expert Educational Consultant <br />
                                Immigration and Travel Consultant with over 7 years of experience and proven track record. Takes joy in producing results for all Travel goals.
                            </p>
                            

                        </div>
                        </Parallax>


                    </div>
                </section>

                <BeforeFooter text="Our team is here to help"/>

                <ImageText 
                    img={img}
                    span="Seamless Travel Documentation"
                    desc="Ensure your travel plans are smooth and hassle-free with our expert visa and passport services. Let us handle the paperwork so you can focus on your journey"
                >
                </ImageText>

                <ImageListing data={visitablePlaces} heading="Explore breathtaking destinations"/>

            </main>
        </>
    )
}


export default AboutPage;