import passportServices from "../assets/images/passportServices.jpg"
import familyTour from "../assets/images/familyTour.jpg"
import customerService from "../assets/images/customerService.jpg"
import operations from "../assets/images/operations.jpg"
import destinationKnowledge from "../assets/images/destinationKnowledge.jpg"
import travelArrangements from "../assets/images/travelArrangements.jpg"
import travelInsurance from "../assets/images/travelInsurance.jpg"
import flightBooking from "../assets/images/flightBooking.jpg"
import accommodationBooking from "../assets/images/accommodationBooking.jpg"
import transportationServices from "../assets/images/transportationServices.jpg"
import carRentals from "../assets/images/carRentals.jpg"
import airportTransfers from "../assets/images/airportTransfers.jpg"
import tourPackages from "../assets/images/tourPackages.jpg"
import visaandPassportServices from "../assets/images/visaandPassport Services.jpg"
import corporateTravel from "../assets/images/corporateTravel.jpg"
import logisticsServices from "../assets/images/logisticsServices.jpg"
import customerandSales from "../assets/images/customerandSales.jpg"
import salesAndMarketing from "../assets/images/salesAndMarketing.jpg"
import travelOperations from "../assets/images/travelOperations.jpg"
// import effectiveCommunication from "../assets/images/effectiveCommunication.jpg"
// import customerComplaints from "../assets/images/customerComplaints.jpg"
// import customerRelationships from "../assets/images/customerRelationships.jpg"
// import salesTechniques from "../assets/images/salesTechniques.jpg"
// import marketingStrategies from "../assets/images/marketingStrategies.jpg"
// import leadGeneration from "../assets/images/leadGeneration.jpg"
// import bookingSystems from "../assets/images/bookingSystems.jpg"
// import operationalEfficiency from "../assets/images/operationalEfficiency.jpg"
// import workflowManagement from "../assets/images/workflowManagement.jpg"
// import emergencyPlanning from "../assets/images/emergencyPlanning.jpg"
// import crisisCommunication from "../assets/images/crisisCommunication.jpg"
// import riskAssessment from "../assets/images/riskAssessment.jpg"
// import geographicalKnowledge from "../assets/images/geographicalKnowledge.jpg"
// import localCulture from "../assets/images/localCulture.jpg"
// import popularAttractions from "../assets/images/popularAttractions.jpg"
// import bookingSoftware from "../assets/images/bookingSoftware.jpg"
// import travelApps from "../assets/images/travelApps.jpg"
// import technologyTrends from "../assets/images/technologyTrends.jpg"
// import interstateTravelling from "../assets/images/buses/buses 2.jpg"
// import logisticsImg from "../assets/images/logisticsImg.jpg"
// import trainServices from "../assets/images/trainServices.jpg"
import crisisManagement from "../assets/images/crisisManagement.jpg"
import destinationknowledge from "../assets/images/destination-Knowledge.jpg"
import travelTechnology from "../assets/images/travelTechnology.jpg"
import domesticCourier from "../assets/images/domesticCourier.jpg"
import ecommerceFulfillment from "../assets/images/ecommerceFulfillment.jpg"
import internationalCourier from "../assets/images/internationalCourier.jpg"
import airFreight from "../assets/images/airFreight.jpg"
import seaFreight from "../assets/images/seaFreight.jpg"
import landFreight from "../assets/images/landFreight.jpg"
import inventoryManagement from "../assets/images/inventoryManagement.jpg"
import procurementServices from "../assets/images/procurementServices.jpg"
import distributionServices from "../assets/images/distributionServices.jpg"
import interstateTravelling from "../assets/images/buses/hiace.jpg"
import busServices from "../assets/images/busServices.jpg"
import lagos from "../assets/images/lagos.jpg"
import naijaCulture from "../assets/images/naijaCulture.jpg"
import portHarcourt from "../assets/images/portHarcourt.jpg"
import abuja from "../assets/images/abuja.jpg"


// merge courses into services - aviation trainings

export const servicesList = [
    {
        title: "Interstate Travelling",
        img: interstateTravelling,
        desc: "Seamless, comfortable and hassle-free interstate travel services covering Lagos, Abuja and Port Harcourt",
        sub: [
            {
                title: "Travel Booking",
                img: busServices,
                desc: "Seamless booking services for interstate travel in Nigeria.",
                sub: [
                    {
                        title: "One way Trip",
                        img: busServices,
                        desc: "Comfortable and affordable bus services across states.",
                        sub: [
                            // "Cost effective travel"
                        ]
                    },
                    {
                        title: "Round Trip",
                        img: carRentals,
                        desc: "Convenient car rental options for interstate travel.",
                        sub: []
                    },
                    // {
                    //     title: "Train Services",
                    //     img: trainServices,
                    //     desc: "Efficient and comfortable train services for travel across states.",
                    //     sub: [
                    //         "First-Class",
                    //         "Economy Class",
                    //         "Sleeper Coaches"
                    //     ]
                    // }
                ]
            },
            {
                title: "CIty Travelling",
                img: naijaCulture,
                desc: "Discover Nigeria with our customizable tour packages.",
                sub: [
                    {
                        title: "Lagos",
                        img: lagos,
                        desc: "Exciting adventure tours to explore Nigeria's natural beauty.",
                        sub: [
                            "Lekki",
                            "Lagos Island",
                            "National Museum"
                        ]
                    },
                    {
                        title: "Abuja",
                        img: abuja,
                        desc: "Experience Nigeria's rich cultural heritage with our guided tours.",
                        sub: [
                           "Aso Rock",
                           "Usuma Dam",
                           "Jabi Lake"
                        ]
                    },
                    {
                        title: "Port Harcourt",
                        img: portHarcourt,
                        desc: "Explore major cities in Nigeria with our organized city tours.",
                        sub: [
                            "Tourist Beach",
                            "Isaac Boro Park",
                            "Bonny Island"
                        ]
                    }
                ]
            },
           
        ]
    },
    {
        title: "Flight Services",
        img: airportTransfers,
        desc: "Comprehensive flight services including booking, accommodations, transportation, travel packages, insurance, and documentation to ensure a seamless and stress-free travel experience.",
        sub: [
            {
                title: "Flight Arrangements",
                img: travelArrangements,
                desc: "Hassle-free booking for flights, accommodations, and transportation.",
                sub: [
                    {
                        title: "Flight Booking",
                        img: flightBooking,
                        desc: "Efficient booking solutions for domestic and international flights, group bookings, and charter flights.",
                        sub: [
                            "Domestic Flights",
                            "International Flights",
                            "Group Bookings",
                            "Charter Flights"
                        ]  
                    },
                    {
                        title: "Accommodation Booking",
                        img: accommodationBooking,
                        desc: "Convenient booking options for hotels, vacation rentals, and budget lodging.",
                        sub: [
                            "Hotel Reservations",
                            "Vacation Rentals",
                            "Hostels and Budget Lodging"
                        ]
                    },
                    {
                        title: "Transportation Services",
                        img: transportationServices,
                        desc: "Comprehensive transportation solutions including car rentals, airport transfers, train and bus tickets, and cruise bookings.",
                        sub: [
                            "Car Rentals",
                            "Airport Transfers",
                            "Train and Bus Tickets",
                            "Cruise Bookings"
                        ]
                    }
                ]
            },
            {
                title: "Flight Packages and Insurance",
                img: familyTour,
                desc: "Tailored travel packages and comprehensive insurance coverage.",
                sub: [
                    {
                        title: "Tour Packages",
                        img: tourPackages,
                        desc: "Explore customizable travel packages, group tours, adventure tours, and cultural heritage tours.",
                        sub: [
                            "Customizable Travel Packages",
                            "Group Tours",
                            "Adventure Tours",
                            "Cultural and Heritage Tours"
                        ]
                    },
                    {
                        title: "Travel Insurance",
                        img: travelInsurance,
                        desc: "Protect your travel with medical, trip cancellation, and baggage loss insurance.",
                        sub: [
                            "Medical Travel Insurance",
                            "Trip Cancellation Insurance",
                            "Baggage Loss Insurance"
                        ]
                    }
                ]
            },
            {
                title: "Flight Documentation and Corporate Services",
                img: passportServices,
                desc: "Visa, passport services, and efficient corporate travel solutions.",
                sub: [
                    {
                        title: "Visa and Passport Services",
                        img: visaandPassportServices,
                        desc: "Simplify your travel with visa application assistance, passport renewal services, and travel document guidance.",
                        sub: [
                            "Visa Application Assistance",
                            "Passport Renewal Services",
                            "Travel Document Guidance"
                        ]
                    },
                    {
                        title: "Corporate Travel",
                        img: corporateTravel,
                        desc: "Efficient business travel management, conference and event planning, and incentive travel programs.",
                        sub: [
                            "Business Travel Management",
                            "Conference and Event Planning",
                            "Incentive Travel Programs"
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Logistics Services",
        img: logisticsServices,
        desc: "Comprehensive logistics services to meet all your delivery needs, both locally and internationally.",
        sub: [
            {
                title: "Courier Services",
                img: domesticCourier,
                desc: "Reliable and efficient courier solutions for local and international deliveries.",
                sub: [
                    {
                        title: "Domestic Courier",
                        img: domesticCourier,
                        desc: "Fast and secure courier services within the country.",
                        sub: [
                            "Same-Day Delivery",
                            "Next-Day Delivery",
                            "Express Delivery"
                        ]
                    },
                    {
                        title: "International Courier",
                        img: internationalCourier,
                        desc: "Global courier services for documents and parcels.",
                        sub: [
                            "Document Delivery",
                            "Parcel Delivery",
                            "Freight Services"
                        ]
                    },
                    {
                        title: "E-commerce Fulfillment",
                        img: ecommerceFulfillment,
                        desc: "Comprehensive solutions for online businesses including warehousing and shipping.",
                        sub: [
                            "Warehousing",
                            "Order Processing",
                            "Shipping Solutions"
                        ]
                    }
                ]
            },
            {
                title: "Freight Services",
                img: landFreight,
                desc: "Efficient freight services for bulk goods and cargo.",
                sub: [
                    {
                        title: "Air Freight",
                        img: airFreight,
                        desc: "Fast and reliable air freight services for urgent deliveries.",
                        sub: [
                            "Express Air Freight",
                            "Standard Air Freight",
                            "Charter Services"
                        ]
                    },
                    {
                        title: "Sea Freight",
                        img: seaFreight,
                        desc: "Cost-effective sea freight services for large shipments.",
                        sub: [
                            "Full Container Load (FCL)",
                            "Less than Container Load (LCL)",
                            "Bulk Shipping"
                        ]
                    },
                    {
                        title: "Land Freight",
                        img: landFreight,
                        desc: "Reliable land freight services for domestic and cross-border deliveries.",
                        sub: [
                            "Truckload (TL)",
                            "Less than Truckload (LTL)",
                            "Specialized Freight"
                        ]
                    }
                ]
            },
            {
                title: "Supply Chain Solutions",
                img: inventoryManagement,
                desc: "Comprehensive supply chain solutions to streamline your logistics operations.",
                sub: [
                    {
                        title: "Inventory Management",
                        img: inventoryManagement,
                        desc: "Efficient inventory management solutions to keep your stock organized.",
                        sub: [
                            "Stock Control",
                            "Order Management",
                            "Warehouse Solutions"
                        ]
                    },
                    {
                        title: "Procurement Services",
                        img: procurementServices,
                        desc: "Professional procurement services to manage your purchasing needs.",
                        sub: [
                            "Supplier Management",
                            "Contract Negotiation",
                            "Sourcing Solutions"
                        ]
                    },
                    {
                        title: "Distribution Services",
                        img: distributionServices,
                        desc: "Effective distribution services to ensure timely delivery of goods.",
                        sub: [
                            "Last-Mile Delivery",
                            "Fulfillment Centers",
                            "Reverse Logistics"
                        ]
                    }
                ]
            }
        ]
    },
    {
        title: "Aviation Courses",
        img: accommodationBooking,
        desc: "Enhance your skills and advance your career with our professional courses. Whether mastering new technologies, developing business acumen, or gaining certifications, our programs help you achieve your goals. Join us and take the next step towards success with confidence",
        sub: [

            {
                title: "Customer and Sales",
                img: customerandSales,
                desc: "Enhance customer service and sales skills.",
                sub: [
                    {
                        title: "Customer Service",
                        img: customerService,
                        sub: [
                            "Effective Communication Skills",
                            "Handling Customer Complaints",
                            "Building Customer Relationships"
                        ]     
                    },
                    {
                        title: "Sales and Marketing",
                        img: salesAndMarketing,
                        desc: "Develop effective sales techniques and marketing strategies.",
                        sub: [
                            "Sales Techniques",
                            "Marketing Strategies",
                            "Lead Generation"
                        ]
                        
                        
                    },
                ]
            },
            {
                title: "Operational and Crisis Management",
                img: operations,
                desc: "Improve operational efficiency and crisis management skills.",
                sub: [
                    {
                        title: "Travel Operations",
                        img: travelOperations,
                        sub: [
                            "Booking and Reservation Systems",
                            "Operational Efficiency",
                            "Workflow Management"
                        ]
                        
                    },
                    {
                        title: "Crisis Management",
                        img: crisisManagement,
                        desc: "Learn strategies for effective crisis response and communication.",
                        sub: [
                            "Emergency Response Planning",
                            "Crisis Communication",
                            "Risk Assessment"
                        ]
                        
                    },
                ]
            },
            {
                title: "Destination and Technology",
                img: destinationKnowledge,
                desc: "Gain knowledge on destinations and travel technology.",
                sub: [
                    {
                        title: "Destination Knowledge",
                        img: destinationknowledge,
                        sub: [
                            "Geographical Knowledge",
                            "Local Customs and Culture",
                            "Popular Attractions"
                        ]
                        
                        
                    },
                    {
                        title: "Travel Technology",
                        img: travelTechnology,
                        desc: "Explore travel booking software, popular travel apps, and technology trends.",
                        sub: [
                            "Booking Software",
                            "Travel Apps",
                            "Technology Trends in Travel"
                        ]
                    }
                ]
            }
        ]
    }
    
    
];




export const NavInfo = [
    {
        title: 'Home',
        link: '',
    },
    {
        title: 'About',
        link: 'about',
    },
    {
        title: 'Services',
        link: 'services',
        sublinks: [
            {
                title: "Interstate Travelling",
                link: "interstate-travelling"
            },
            {
                title: "Flight Services",
                link: "logistics"
            },
            {
                title: "Logistics Services",
                link: "logistics"
            },
            {
                title: "Aviation Courses",
                link: "aviation-courses"
            },
            {
                title: "View All",
                link: ""
            }
        ]
        
    },
    {
        title: 'Booking',
        link: '',
        sublinks: [
            // {
            //     title: 'Book Journey',
            //     link: 'book-journey',
            // },
            {
                title: 'Book Flight',
                link: 'book-flight',
            },
            {
                title: 'My Journeys',
                link: 'my-journeys',
            },
        ]
        
    },

    {
        title: 'Opportunities',
        link: '',
        sublinks: [
            {
                title: 'Study Abroad',
                link: 'study-abroad',
            },
            {
                title: 'Jobs',
                link: 'jobs',
            }
        ] 
    },
    
  
    {
        title: 'Contact',
        link: 'contact',
    },
]



export const AccountNavInfo = [
    {
        title: 'Journeys',
        link: '',
    },
    {
        title: 'History',
        link: 'history',
    },
    {
        title: 'Profile',
        link: 'profile',
    },
]

export const Locations = [
    {
        id: "lagos",
        location: "Lagos",
        terminal: ''

    },
    {
        id: "abuja",
        location: "Abuja",
        terminal: ''
    },
    {
        id: "port-harcourt",
        location: "Port Harcourt",
        terminal: ''
    }
]

export const Journeys = [
    {
        id: "lagos-abuja",
        from: Locations[0].location,
        to: Locations[1].location,
        price: 30000,
        date: "8-15-2024",
        time: "07:30 AM",
        available_seats: 7,
        booked_seats: [1, 3, 5, 7, 8, 10],
        total_passengers: 12
    },
    {
        id: "abuja-port",
        from: Locations[1].location,
        to: Locations[2].location,
        price: 45000,
        date: "8-20-2024",
        time: "07:30 AM",
        available_seats: 6,
        booked_seats: [2, 3, 5, 6, 8, 9],
        total_passengers: 12
    },
    {
        id: "abuja-lagos",
        from: Locations[1].location,
        to: Locations[0].location,
        price: 30000,
        date: "8-21-2024",
        time: "07:30 AM",
        available_seats: 5,
        booked_seats: [2, 4, 5, 6, 7, 8, 9],
        total_passengers: 12
    },
    {
        id: "port-lagos",
        from: Locations[2].location,
        to: Locations[0].location,
        price: 40000,
        date: "8-22-2024",
        time: "07:30 AM",
        available_seats: 10,
        booked_seats: [2, 6],
        total_passengers: 12
    },
    {
        id: "port-abuja",
        from: Locations[2].location,
        to: Locations[1].location,
        price: 45000,
        date: "8-23-2024",
        time: "07:30 AM",
        available_seats: 3,
        booked_seats: [1, 2, 3, 4, 5, 6, 9, 10, 12],
        total_passengers: 12
    },
    {
        id: "lagos-port",
        from: Locations[0].location,
        to: Locations[2].location,
        price: 40000,
        date: "8-24-2024",
        time: "07:30 AM",
        available_seats: 8,
        booked_seats: [4, 6, 7, 8],
        total_passengers: 12
    },

]




export const BookingInfo = [
    {
        id: "id of this new booked journey",
        // journey id is to get the details of the journey
        journey_id: Journeys[0].id,
        user_id: "to get the details of the user",
        date: "1, July 2024",
        no_booked_seats: 4,
        status: "booked",
        time: "should be based on time of payment confirmation"
    },
    {
        id: "id of this new",
        // journey id is to get the details of the journey
        journey_id: Journeys[1].id,
        user_id: "to get the details of the user",
        date: "1, July 2024",
        no_booked_seats: 8,
        status: "booked",
        time: "should be based on time of payment confirmation"
    },
]



export const Flights = [
    {
        id: "lagos-abuja",
        from: Locations[0].location,
        to: Locations[1].location,
        price: 3000000,
        takeoff_date: "8-15-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 0,
        available_seats: 7,
        booked_seats: [1, 3, 5, 7, 8, 10],
        total_passengers: 12
    },
    {
        id: "abuja-port",
        from: Locations[1].location,
        to: Locations[2].location,
        price: 4500000,
        takeoff_date: "8-20-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 1,
        available_seats: 6,
        booked_seats: [2, 3, 5, 6, 8, 9],
        total_passengers: 12
    },
    {
        id: "abuja-lagos",
        from: Locations[1].location,
        to: Locations[0].location,
        price: 3000000,
        takeoff_date: "8-21-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 2,
        available_seats: 5,
        booked_seats: [2, 4, 5, 6, 7, 8, 9],
        total_passengers: 12
    },
    {
        id: "port-lagos",
        from: Locations[2].location,
        to: Locations[0].location,
        price: 4000000,
        takeoff_date: "8-22-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 2,
        available_seats: 10,
        booked_seats: [2, 6],
        total_passengers: 12
    },
    {
        id: "port-abuja",
        from: Locations[2].location,
        to: Locations[1].location,
        price: 4500000,
        takeoff_date: "8-23-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 2,
        available_seats: 3,
        booked_seats: [1, 2, 3, 4, 5, 6, 9, 10, 12],
        total_passengers: 12
    },
    {
        id: "lagos-port",
        from: Locations[0].location,
        to: Locations[2].location,
        price: 4000000,
        takeoff_date: "8-24-2024",
        return_date: "10-20-2024",
        time: "07:30 AM",
        duration: "69h 20m",
        stops: 2,
        available_seats: 8,
        booked_seats: [4, 6, 7, 8],
        total_passengers: 12
    },

]


export const ClassOfService = [
    'Economy', 
    'Premium Economy', 
    'Business', 
    'First Class']

/*
    flight booking info
        id
        user id
        flight id
        payment id
        seats booked
    
*/

export const MaxBookingNo = 100



export const countries = [
    { country: "Afghanistan", flag: "fi fi-af" },
    { country: "Albania", flag: "fi fi-al" },
    { country: "Algeria", flag: "fi fi-dz" },
    { country: "Andorra", flag: "fi fi-ad" },
    { country: "Angola", flag: "fi fi-ao" },
    { country: "Argentina", flag: "fi fi-ar" },
    { country: "Armenia", flag: "fi fi-am" },
    { country: "Australia", flag: "fi fi-au" },
    { country: "Austria", flag: "fi fi-at" },
    { country: "Azerbaijan", flag: "fi fi-az" },
    { country: "Bahamas", flag: "fi fi-bs" },
    { country: "Bahrain", flag: "fi fi-bh" },
    { country: "Bangladesh", flag: "fi fi-bd" },
    { country: "Barbados", flag: "fi fi-bb" },
    { country: "Belarus", flag: "fi fi-by" },
    { country: "Belgium", flag: "fi fi-be" },
    { country: "Belize", flag: "fi fi-bz" },
    { country: "Benin", flag: "fi fi-bj" },
    { country: "Bhutan", flag: "fi fi-bt" },
    { country: "Bolivia", flag: "fi fi-bo" },
    { country: "Botswana", flag: "fi fi-bw" },
    { country: "Brazil", flag: "fi fi-br" },
    { country: "Brunei", flag: "fi fi-bn" },
    { country: "Bulgaria", flag: "fi fi-bg" },
    { country: "Burkina", flag: "fi fi-bf" },
    { country: "Burundi", flag: "fi fi-bi" },
    { country: "Cambodia", flag: "fi fi-kh" },
    { country: "Cameroon", flag: "fi fi-cm" },
    { country: "Canada", flag: "fi fi-ca" },
    { country: "Cape Verde", flag: "fi fi-cv" },
    { country: "Chad", flag: "fi fi-td" },
    { country: "Chile", flag: "fi fi-cl" },
    { country: "China", flag: "fi fi-cn" },
    { country: "Colombia", flag: "fi fi-co" },
    { country: "Comoros", flag: "fi fi-km" },
    { country: "Costa Rica", flag: "fi fi-cr" },
    { country: "Croatia", flag: "fi fi-hr" },
    { country: "Cuba", flag: "fi fi-cu" },
    { country: "Cyprus", flag: "fi fi-cy" },
    { country: "Czech Republic", flag: "fi fi-cz" },
    { country: "Denmark", flag: "fi fi-dk" },
    { country: "Djibouti", flag: "fi fi-dj" },
    { country: "Dominica", flag: "fi fi-dm" },
    { country: "Dominican Republic", flag: "fi fi-do" },
    { country: "Ecuador", flag: "fi fi-ec" },
    { country: "Egypt", flag: "fi fi-eg" },
    { country: "El Salvador", flag: "fi fi-sv" },
    { country: "Equatorial Guinea", flag: "fi fi-gq" },
    { country: "Eritrea", flag: "fi fi-er" },
    { country: "Estonia", flag: "fi fi-ee" },
    { country: "Ethiopia", flag: "fi fi-et" },
    { country: "Fiji", flag: "fi fi-fj" },
    { country: "Finland", flag: "fi fi-fi" },
    { country: "France", flag: "fi fi-fr" },
    { country: "Gabon", flag: "fi fi-ga" },
    { country: "Gambia", flag: "fi fi-gm" },
    { country: "Georgia", flag: "fi fi-ge" },
    { country: "Germany", flag: "fi fi-de" },
    { country: "Ghana", flag: "fi fi-gh" },
    { country: "Greece", flag: "fi fi-gr" },
    { country: "Grenada", flag: "fi fi-gd" },
    { country: "Guatemala", flag: "fi fi-gt" },
    { country: "Guinea", flag: "fi fi-gn" },
    { country: "Guinea-Bissau", flag: "fi fi-gw" },
    { country: "Guyana", flag: "fi fi-gy" },
    { country: "Haiti", flag: "fi fi-ht" },
    { country: "Honduras", flag: "fi fi-hn" },
    { country: "Hungary", flag: "fi fi-hu" },
    { country: "Iceland", flag: "fi fi-is" },
    { country: "India", flag: "fi fi-in" },
    { country: "Indonesia", flag: "fi fi-id" },
    { country: "Iran", flag: "fi fi-ir" },
    { country: "Iraq", flag: "fi fi-iq" },
    { country: "Ireland", flag: "fi fi-ie" },
    { country: "Israel", flag: "fi fi-il" },
    { country: "Italy", flag: "fi fi-it" },
    { country: "Ivory Coast", flag: "fi fi-ci" },
    { country: "Jamaica", flag: "fi fi-jm" },
    { country: "Japan", flag: "fi fi-jp" },
    { country: "Jordan", flag: "fi fi-jo" },
    { country: "Kazakhstan", flag: "fi fi-kz" },
    { country: "Kenya", flag: "fi fi-ke" },
    { country: "Kiribati", flag: "fi fi-ki" },
    { country: "Kuwait", flag: "fi fi-kw" },
    { country: "Kyrgyzstan", flag: "fi fi-kg" },
    { country: "Laos", flag: "fi fi-la" },
    { country: "Latvia", flag: "fi fi-lv" },
    { country: "Lebanon", flag: "fi fi-lb" },
    { country: "Lesotho", flag: "fi fi-ls" },
    { country: "Liberia", flag: "fi fi-lr" },
    { country: "Libya", flag: "fi fi-ly" },
    { country: "Liechtenstein", flag: "fi fi-li" },
    { country: "Lithuania", flag: "fi fi-lt" },
    { country: "Luxembourg", flag: "fi fi-lu" },
    { country: "Macedonia", flag: "fi fi-mk" },
    { country: "Madagascar", flag: "fi fi-mg" },
    { country: "Malawi", flag: "fi fi-mw" },
    { country: "Malaysia", flag: "fi fi-my" },
    { country: "Maldives", flag: "fi fi-mv" },
    { country: "Mali", flag: "fi fi-ml" },
    { country: "Malta", flag: "fi fi-mt" },
    { country: "Marshall Islands", flag: "fi fi-mh" },
    { country: "Mauritania", flag: "fi fi-mr" },
    { country: "Mauritius", flag: "fi fi-mu" },
    { country: "Mexico", flag: "fi fi-mx" },
    { country: "Micronesia", flag: "fi fi-fm" },
    { country: "Moldova", flag: "fi fi-md" },
    { country: "Monaco", flag: "fi fi-mc" },
    { country: "Mongolia", flag: "fi fi-mn" },
    { country: "Montenegro", flag: "fi fi-me" },
    { country: "Morocco", flag: "fi fi-ma" },
    { country: "Mozambique", flag: "fi fi-mz" },
    { country: "Myanmar", flag: "fi fi-mm" },
    { country: "Namibia", flag: "fi fi-na" },
    { country: "Nauru", flag: "fi fi-nr" },
    { country: "Nepal", flag: "fi fi-np" },
    { country: "Netherlands", flag: "fi fi-nl" },
    { country: "New Zealand", flag: "fi fi-nz" },
    { country: "Nicaragua", flag: "fi fi-ni" },
    { country: "Niger", flag: "fi fi-ne" },
    { country: "Nigeria", flag: "fi fi-ng" },
    { country: "North Korea", flag: "fi fi-kp" },
    { country: "Norway", flag: "fi fi-no" },
    { country: "Pakistan", flag: "fi fi-pk" },
    { country: "Palau", flag: "fi fi-pw" },
    { country: "Panama", flag: "fi fi-pa" },
    { country: "Papua New Guinea", flag: "fi fi-pg" },
    { country: "Paraguay", flag: "fi fi-py" },
    { country: "Peru", flag: "fi fi-pe" },
    { country: "Philippines", flag: "fi fi-ph" },
    { country: "Poland", flag: "fi fi-pl" },
    { country: "Portugal", flag: "fi fi-pt" },
    { country: "Romania", flag: "fi fi-ro" },
    { country: "Russia", flag: "fi fi-ru" },
    { country: "Rwanda", flag: "fi fi-rw" },
    { country: "Saint Kitts and Nevis", flag: "fi fi-kn" },
    { country: "Saint Lucia", flag: "fi fi-lc" },
    { country: "Saint Vincent and the Grenadines", flag: "fi fi-vc" },
    { country: "Samoa", flag: "fi fi-ws" },
    { country: "San Marino", flag: "fi fi-sm" },
    { country: "Sao Tome and Principe", flag: "fi fi-st" },
    { country: "Saudi Arabia", flag: "fi fi-sa" },
    { country: "Senegal", flag: "fi fi-sn" },
    { country: "Serbia", flag: "fi fi-rs" },
    { country: "Seychelles", flag: "fi fi-sc" },
    { country: "Sierra Leone", flag: "fi fi-sl" },
    { country: "Singapore", flag: "fi fi-sg" },
    { country: "Slovakia", flag: "fi fi-sk" },
    { country: "Solomon Islands", flag: "fi fi-sb" },
    { country: "Somalia", flag: "fi fi-so" },
    { country: "South Africa", flag: "fi fi-za" },
    { country: "South Korea", flag: "fi fi-kr" },
    { country: "South Sudan", flag: "fi fi-ss" },
    { country: "Spain", flag: "fi fi-es" },
    { country: "Sri Lanka", flag: "fi fi-lk" },
    { country: "Sudan", flag: "fi fi-sd" },
    { country: "Suriname", flag: "fi fi-sr" },
    { country: "Swaziland", flag: "fi fi-sz" },
    { country: "Sweden", flag: "fi fi-se" },
    { country: "Switzerland", flag: "fi fi-ch" },
    { country: "Syria", flag: "fi fi-sy" },
    { country: "Taiwan", flag: "fi fi-tw" },
    { country: "Tajikistan", flag: "fi fi-tj" },
    { country: "Tanzania", flag: "fi fi-tz" },
    { country: "Thailand", flag: "fi fi-th" },
    { country: "Togo", flag: "fi fi-tg" },
    { country: "Tonga", flag: "fi fi-to" },
    { country: "Trinidad and Tobago", flag: "fi fi-tt" },
    { country: "Tunisia", flag: "fi fi-tn" },
    { country: "Turkey", flag: "fi fi-tr" },
    { country: "Turkmenistan", flag: "fi fi-tm" },
    { country: "Tuvalu", flag: "fi fi-tv" },
    { country: "Uganda", flag: "fi fi-ug" },
    { country: "Ukraine", flag: "fi fi-ua" },
    { country: "United Arab Emirates", flag: "fi fi-ae" },
    { country: "United Kingdom", flag: "fi fi-gb" },
    { country: "United States", flag: "fi fi-us" },
    { country: "Uruguay", flag: "fi fi-uy" },
    { country: "Uzbekistan", flag: "fi fi-uz" },
    { country: "Vanuatu", flag: "fi fi-vu" },
    { country: "Vatican City", flag: "fi fi-va" },
    { country: "Venezuela", flag: "fi fi-ve" },
    { country: "Vietnam", flag: "fi fi-vn" },
    { country: "Yemen", flag: "fi fi-ye" },
    { country: "Zambia", flag: "fi fi-zm" },
    { country: "Zimbabwe", flag: "fi fi-zw" }
];







