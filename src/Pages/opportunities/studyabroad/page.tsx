import { Helmet } from "react-helmet-async"
import { Parallax } from '../../../assets/components/Parallax';
import { Button } from '../../../assets/components/Button';
import { BsTelephoneFill } from 'react-icons/bs';
import { ListingCardParent } from "../../../assets/components/Card/ListingCardParent"
import harvard from "../../../assets/images/harvard.jpg"
import stanford from "../../../assets/images/stanford.jpg"
import Cambridge from "../../../assets/images/cambridge.jpg"
import massachusetts from "../../../assets/images/Massachusetts.jpg"
import uocalifornia from "../../../assets/images/uocalifornia.jpg"
import uooxford from "../../../assets/images/uooxford.jpg"
import imperial from "../../../assets/images/imperial.jpg"
import uotoronto from "../../../assets/images/uotoronto.jpg"
import McGill from "../../../assets/images/McGill.jpg"
import lse from "../../../assets/images/lse.jpg"
import Columbia from "../../../assets/images/Columbia.jpg"
import AUD from "../../../assets/images/AUD.jpg"
import UniDubai from "../../../assets/images/UniDubai.jpg"
import Middlesex from "../../../assets/images/Middlesex.jpg"
import Edinburgh from "../../../assets/images/Edinburgh.jpg"
import Glasgow from "../../../assets/images/Glasgow.jpg"
import HeriotWatt from "../../../assets/images/Heriot-Watt.jpg"
import Sorbonne from "../../../assets/images/Sorbonne.jpg"
import Polytechnique from "../../../assets/images/Polytechnique.jpg"
import HEC from "../../../assets/images/HEC.jpg"
import Heidelberg from "../../../assets/images/Heidelberg.jpg"
import Berlin from "../../../assets/images/Berlin.jpg"
import { BeforeFooter } from "../../../assets/components/sections/BeforeFooter"
import Munich from "../../../assets/images/Munich.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import  "react-lazy-load-image-component/src/effects/blur.css"
import  "react-lazy-load-image-component/src/effects/opacity.css"
import { OtherHeros } from "../../../assets/components/sections/OtherHeros";

const StudyAbroadPage = () => {
    const universities = [
        {
            heading: "United States",
            desc: ["Explore top universities in the United States known for their academic excellence and diverse range of programs.", " Basic requirements typically include a high school diploma or equivalent, English proficiency (TOEFL/IELTS), and standardized test scores (SAT/ACT) for undergraduate admissions."],
            sub: [
                {
                    title: "Harvard University",
                    img: harvard,
                    sub: [
                        "Prestigious reputation worldwide",
                        "Extensive resources and funding opportunities",
                        "High employment prospects post-graduation"
                    ]
                },
                {
                    title: "Stanford University",
                    img: stanford,
                    sub: [
                        "Innovative research environment",
                        "Strong connections with Silicon Valley",
                        "Supportive entrepreneurial ecosystem"
                    ]
                },
                {
                    title: "Massachusetts Institute of Technology (MIT)",
                    img: massachusetts,
                    sub: [
                        "Leadership in STEM fields",
                        "Cutting-edge research facilities",
                        "Global impact through technology and innovation"
                    ]
                },
                {
                    title: "University of California, Berkeley",
                    img: uocalifornia,
                    sub: [
                        "Top-ranked programs in social sciences and environmental studies",
                        "Access to vibrant cultural and social scene in Berkeley",
                        "Diverse student community"
                    ]
                }
            ]
        },
        {
            heading: "United Kingdom",
            desc:[ "Discover prestigious universities in the United Kingdom offering world-class education and research opportunities.", "Basic requirements include secondary school qualifications (A-levels or equivalent), English language proficiency (IELTS/TOEFL), and specific entry requirements for each program."],
            sub: [
                {
                    title: "University of Oxford",
                    img: uooxford,
                    sub: [
                        "World-renowned faculty and research excellence",
                        "Rich history and tradition",
                        "Strong emphasis on tutorial-based learning"
                    ]
                },
                {
                    title: "University of Cambridge",
                    img: Cambridge,
                    sub: [
                        "Exceptional academic reputation across various disciplines",
                        "Cambridge University Press and extensive library resources",
                        "Collegiate system fostering interdisciplinary collaboration"
                    ]
                },
                {
                    title: "London School of Economics and Political Science (LSE)",
                    img: lse,
                    sub: [
                        "Top-ranked programs in economics, finance, and social sciences",
                        "Central London location with access to global business networks",
                        "Strong emphasis on research-led teaching"
                    ]
                },
                {
                    title: "Imperial College London",
                    img: imperial,
                    sub: [
                        "Focus on science, engineering, medicine, and business",
                        "Partnerships with industry and entrepreneurship initiatives",
                        "State-of-the-art facilities and research centers"
                    ]
                }
            ]
        },
        {
            heading: "Canada",
            desc: ["Explore universities in Canada known for their quality education and multicultural environment.", "Basic requirements include secondary school diploma (Grade 12), English language proficiency (IELTS/TOEFL), and specific program prerequisites."],
            sub: [
                {
                    title: "University of Toronto",
                    img: uotoronto,
                    sub: [
                        "Diverse academic programs with strong global rankings",
                        "Research-intensive environment",
                        "Urban campus in a vibrant city"
                    ]
                },
                {
                    title: "McGill University",
                    img: McGill,
                    sub: [
                        "Bilingual environment with English and French instruction",
                        "Strong focus on research and innovation",
                        "Located in the multicultural city of Montreal"
                    ]
                },
                {
                    title: "University of British Columbia",
                    img: Columbia,
                    sub: [
                        "Beautiful campus with Pacific Ocean views",
                        "Highly ranked programs in science, forestry, and sustainability",
                        "Opportunities for co-op programs and industry placements"
                    ]
                }
            ]
        },
        {
            heading: "Dubai",
            desc:[ "Explore universities in Dubai offering a blend of modern education and cultural diversity.", "Basic requirements vary by university and program, typically including secondary school graduation (or equivalent) and English language proficiency (IELTS/TOEFL)."],
            sub: [
                {
                    title: "American University in Dubai",
                    img: AUD,
                    sub: [
                        "AACSB-accredited business programs",
                        "Modern campus facilities",
                        "Close connections to industry and commerce in Dubai"
                    ]
                },
                {
                    title: "University of Dubai",
                    img: UniDubai,
                    sub: [
                        "Management and information technology-focused programs",
                        "Internationally recognized degrees",
                        "Experiential learning opportunities"
                    ]
                },
                {
                    title: "Middlesex University Dubai",
                    img: Middlesex,
                    sub: [
                        "Global network of campuses",
                        "Multicultural environment",
                        "Practical-oriented education"
                    ]
                }
            ]
        },
        {
            heading: "Scotland",
            desc: ["Discover universities in Scotland known for their historic campuses and vibrant student life.", "Basic requirements for undergraduate programs typically include Scottish Highers or A-levels, English language proficiency (IELTS/TOEFL), and specific subject prerequisites."],
            sub: [
                {
                    title: "University of Edinburgh",
                    img: Edinburgh,
                    sub: [
                        "Innovative teaching and research environment",
                        "Strong focus on sustainability and global challenges",
                        "Beautiful historic campus in Edinburgh"
                    ]
                },
                {
                    title: "University of Glasgow",
                    img: Glasgow,
                    sub: [
                        "Broad range of undergraduate and postgraduate programs",
                        "Extensive global network and partnerships",
                        "Active student societies and cultural activities"
                    ]
                },
                {
                    title: "Heriot-Watt University",
                    img: HeriotWatt,
                    sub: [
                        "Specialist programs in engineering, business, and design",
                        "Global campuses and international student body",
                        "Emphasis on industry connections and employability"
                    ]
                }
            ]
        },
        {
            heading: "France",
            desc: ["Explore universities in France known for their rich cultural heritage and academic excellence.", "Basic requirements for undergraduate programs include French Baccalaureate or equivalent, English language proficiency (IELTS/TOEFL), and specific subject prerequisites."],
            sub: [
                {
                    title: "Paris-Sorbonne University",
                    img: Sorbonne,
                    sub: [
                        "Renowned programs in humanities, law, and social sciences",
                        "Historic campus in the heart of Paris",
                        "Strong emphasis on research and critical thinking"
                    ]
                },
                {
                    title: "École Polytechnique",
                    img: Polytechnique,
                    sub: [
                        "Highly selective engineering programs",
                        "Interdisciplinary approach to education",
                        "Cutting-edge research facilities"
                    ]
                },
                {
                    title: "HEC Paris",
                    img: HEC,
                    sub: [
                        "Top-ranked business programs",
                        "Strong alumni network in business and finance",
                        "Focus on leadership and entrepreneurship"
                    ]
                }
            ]
        },
        {
            heading: "Germany",
            desc:[ "Discover universities in Germany known for their research-based education and technological innovation.", "Basic requirements for undergraduate programs include Abitur or equivalent, German language proficiency (TestDaF/DSD), and specific subject prerequisites."],
            sub: [
                {
                    title: "Technical University of Munich",
                    img: Munich,
                    sub: [
                        "Leading programs in engineering and natural sciences",
                        "Strong emphasis on research and innovation",
                        "Collaboration with industry and global universities"
                    ]
                },
                {
                    title: "Heidelberg University",
                    img: Heidelberg,
                    sub: [
                        "Oldest university in Germany with a rich academic tradition",
                        "Interdisciplinary research opportunities",
                        "Highly regarded medical and humanities programs"
                    ]
                },
                {
                    title: "Freie Universität Berlin",
                    img: Berlin,
                    sub: [
                        "Free university model fostering academic freedom",
                        "Diverse programs in social sciences and humanities",
                        "Research-driven education with global impact"
                    ]
                }
            ]
        }
        // Add more countries and universities as needed
    ];
     
    
    

    return(
        <>
              <Helmet>
                <title>
                    Study Abroad with Onidson Travels and Logistics Ltd
                </title>
                <meta name="description" content={"Explore opportunities to study abroad with expert guidance on programs, applications, scholarships, and cultural experiences. Plan your educational journey today."} />
            </Helmet>            


            <main>
            <OtherHeros
                heroHeader={"Explore Opportunities to Study Abroad "}
                desc={" Embark on a transformative educational journey with our study abroad programs. Discover a world of academic excellence, cultural immersion, and personal growth. Whether you're seeking language proficiency, specialized coursework, or international experience, we provide comprehensive guidance and support to help you navigate every step of your study abroad adventure."}
                img={Munich}
                // data={servicesList[1].sub}
                // dataHeader={`Explore our ${servicesList[1].title} services`}
                breadLinks={["Home", "Oppurtunities > Study Abroad"]}
                type="row"
                />
         


        <section id="pageLinks" className="mb-8 center flex-col gap-9 pt-[15vh]">
            <h2 className="font-bold -mb-[10vh] text-3xl">Featured Institutions</h2>
            <div className="flex flex-col gap-[10vh]">
                {
                    universities.map((uni, i) => (
                        <ListingCardParent  
                            key={i}
                            data={uni.sub}
                            heading={uni.heading}
                            desc={uni.desc}
                        />
                    ))
                }
            </div>
        </section>
                
            <BeforeFooter
                text="Study in any school of your choice"
             />


            </main>
        </>
    )
}


export default StudyAbroadPage