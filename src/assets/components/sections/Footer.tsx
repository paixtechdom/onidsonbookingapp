import { BsEnvelopeFill, BsGeoAltFill, BsTelephoneFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import logo from "../../images/Onidson sm.png"
import { RiWhatsappFill } from "react-icons/ri"


const FooterLinks = [
    {
        header: "Links",
        to: "",
        links: ["Home", "About", "Services", "Courses", "Jobs", "Contact"]
    },
    {
        header: 'Services',
        to: "services",
        links: ["Flight Services", "Logistics Services", "Interstate Travelling"]
    },
    {
        header: "Courses",
        to: "courses",
        links: ["Customer and Sales", "Operational and Crisis Management", "Destination and Technology"]
    },
]

export const ContactInfo = [
    {
        icon: <BsGeoAltFill />,
        text: "Location",
        contact: 'Lagos, Nigeria',
        link: "#"
    },
    {
        icon: <BsEnvelopeFill />,
        text: "Email",
        contact: 'info@onidsontravels.com',
        link: "mailto:info@onidsontravels.com"
    },
    {
        icon: <RiWhatsappFill />,
        text: "Whatsapp",
        contact: '+234 815 788 6733',
        link: "https://api.whatsapp.com/send?phone=2348157886733"
    },
    // business development
    {
        icon: <BsTelephoneFill />,
        text: "Business Development",
        contact: '+234 903 818 0112',
        link: "https://api.whatsapp.com/send?phone=2348157886733"
    },
    // customer service experience
    {
        icon: <BsTelephoneFill />,
        text: "Customer Service",
        contact: '+234 708 869 6489',
        link: "https://api.whatsapp.com/send?phone=2348157886733"
    },
]


const Footer = () => {
    return(
        <footer className="w-full center flex-col bg-primary bg-opacity-5 pt-[10vh] lg:pt-[15vh] border-t border-primary">
            <div className="w-11/12 xl:w-10/12 flex flex-col gap-6 text-gray-900 z-10">
                <div className="flex flex-col md:grid md:grid-cols-4 xl:grid-cols-8 gap-y-9 md:gap-9">

                    <div className="flex flex-col gap-2 col-span-2 xl:col-span-3">
                        <img src={logo} alt="Company's Logo" className="w-4/12"/>
                        {/* <h2 className="text-2xl text-black font-bold">Onidson travels & and tours</h2> */}
                     

                        <div className="flex flex-col gap-3 mt-6 ">
                        {
                            ContactInfo.map((info, i) => (
                                <div key={i} className="flex flex-col gap-2 w-full">

                                    <div key={i} className="flex items-center gap-2">
                                        {info.icon}
                                        <p>
                                            {info.text}
                                        </p>

                                    </div>
                                    <a href={info.link} className="pl-6">{info.contact}</a>
                                </div>
                            ))
                        }
                </div>
                    </div>


                    {
                        FooterLinks.map((link, i) => (
                            <div key={i} className={`flex flex-col gap-4 w-full ${i ==0 ? "" : "col-span-2"}`}>
                                <h3 className="text-black font-semibold text-lg">{link.header}</h3>

                                <div className="flex flex-col gap-4 text-sm text-gray-900">
                                    {
                                        link.links.map((l, i) => (
                                            <Link key={i} to={`${link.to}/${l.replace(" ", "-").replace(" ", "-").replace(" ", "-").replace(" ", "-").toLowerCase()}`}>
                                                {l}
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>

               

            </div>
            <div className="justify-center w-full items-center text-center flex flex-col gap-3 mt-[10vh] py-6 bg-secondary border-t border-primary text-white">
                <p className="w-full lg:w-fit">Copyright © {new Date().getFullYear()} <strong>Onidson Travels & Logistics Ltd</strong></p>


                <a target="_blank" href="https://paixtechdom.com" className="">Developed By <strong>Paix Techdom</strong></a>
            </div>
        </footer>
    )
}

export default Footer