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
                        sub: [
                            // "Self-Drive Rentals",
                            // "Chauffeur Services",
                            // "Long-Term Rentals"
                        ]
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

// export const coursesList = [  
//     {
//         title: "Customer and Sales",
//         img: customerandSales,
//         desc: "Enhance customer service and sales skills.",
//         sub: [
//             {
//                 title: "Customer Service",
//                 img: customerService,
//                 sub: [
//                     {
//                         title: "Effective Communication Skills",
//                         img: effectiveCommunication,
//                         sub: [
//                             "Active listening",
//                             "Clear and concise communication",
//                             "Empathy and understanding"
//                         ]
//                     },
//                     {
//                         title: "Handling Customer Complaints",
//                         img: customerComplaints,
//                         sub: [
//                             "Complaint resolution techniques",
//                             "Maintaining professionalism",
//                             "Follow-up procedures"
//                         ]
//                     },
//                     {
//                         title: "Building Customer Relationships",
//                         img: customerRelationships,
//                         sub: [
//                             "Trust-building strategies",
//                             "Personalized service",
//                             "Customer loyalty programs"
//                         ]
//                     }
//                 ]     
//             },
//             {
//                 title: "Sales and Marketing",
//                 img: salesAndMarketing,
//                 desc: "Develop effective sales techniques and marketing strategies.",
//                 sub: [
//                     {
//                         title: "Sales Techniques",
//                         img: salesTechniques,
//                         sub: [
//                             "Effective sales pitches",
//                             "Closing deals",
//                             "Upselling and cross-selling"
//                         ]
//                     },
//                     {
//                         title: "Marketing Strategies",
//                         img: marketingStrategies,
//                         sub: [
//                             "Market research",
//                             "Digital marketing",
//                             "Content creation"
//                         ]
//                     },
//                     {
//                         title: "Lead Generation",
//                         img: leadGeneration,
//                         sub: [
//                             "Identifying prospects",
//                             "Lead nurturing",
//                             "Conversion strategies"
//                         ]
//                     }
//                 ]
                
                
//             },
//         ]
//     },
//     {
//         title: "Operational and Crisis Management",
//         img: operations,
//         desc: "Improve operational efficiency and crisis management skills.",
//         sub: [
//             {
//                 title: "Travel Operations",
//                 img: travelOperations,
//                 sub: [
//                     {
//                         title: "Booking and Reservation Systems",
//                         img: bookingSystems,
//                         sub: [
//                             "Using booking software",
//                             "Managing reservations",
//                             "System troubleshooting"
//                         ]
//                     },
//                     {
//                         title: "Operational Efficiency",
//                         img: operationalEfficiency,
//                         sub: [
//                             "Process optimization",
//                             "Time management",
//                             "Resource allocation"
//                         ]
//                     },
//                     {
//                         title: "Workflow Management",
//                         img: workflowManagement,
//                         sub: [
//                             "Task prioritization",
//                             "Team collaboration",
//                             "Project management tools"
//                         ]
//                     }
//                 ]
                
//             },
//             {
//                 title: "Crisis Management",
//                 img: crisisManagement,
//                 desc: "Learn strategies for effective crisis response and communication.",
//                 sub: [
//                     {
//                         title: "Emergency Response Planning",
//                         img: emergencyPlanning,
//                         sub: [
//                             "Developing response plans",
//                             "Identifying potential risks",
//                             "Staff training"
//                         ]
//                     },
//                     {
//                         title: "Crisis Communication",
//                         img: crisisCommunication,
//                         sub: [
//                             "Effective communication during crises",
//                             "Media management",
//                             "Internal and external communication"
//                         ]
//                     },
//                     {
//                         title: "Risk Assessment",
//                         img: riskAssessment,
//                         sub: [
//                             "Identifying vulnerabilities",
//                             "Risk mitigation strategies",
//                             "Regular risk assessments"
//                         ]
//                     }
//                 ]
                
//             },
//         ]
//     },
//     {
//         title: "Destination and Technology",
//         img: destinationKnowledge,
//         desc: "Gain knowledge on destinations and travel technology.",
//         sub: [
//             {
//                 title: "Destination Knowledge",
//                 img: destinationknowledge,
//                 sub: [
//                     {
//                         title: "Geographical Knowledge",
//                         img: geographicalKnowledge,
//                         sub: [
//                             "Country and city information",
//                             "Geopolitical awareness",
//                             "Travel routes"
//                         ]
//                     },
//                     {
//                         title: "Local Customs and Culture",
//                         img: localCulture,
//                         sub: [
//                             "Cultural norms and etiquette",
//                             "Local traditions",
//                             "Language basics"
//                         ]
//                     },
//                     {
//                         title: "Popular Attractions",
//                         img: popularAttractions,
//                         sub: [
//                             "Top tourist destinations",
//                             "Hidden gems",
//                             "Seasonal attractions"
//                         ]
//                     }
//                 ]
                
                
//             },
//             {
//                 title: "Travel Technology",
//                 img: travelTechnology,
//                 desc: "Explore travel booking software, popular travel apps, and technology trends.",
//                 sub: [
//                     {
//                         title: "Booking Software",
//                         img: bookingSoftware,
//                         sub: [
//                             "Software features",
//                             "User training",
//                             "Troubleshooting common issues"
//                         ]
//                     },
//                     {
//                         title: "Travel Apps",
//                         img: travelApps,
//                         sub: [
//                             "Popular travel apps",
//                             "App functionalities",
//                             "Integration with booking systems"
//                         ]
//                     },
//                     {
//                         title: "Technology Trends in Travel",
//                         img: technologyTrends,
//                         sub: [
//                             "Latest technology in travel",
//                             "Future trends",
//                             "Tech adoption strategies"
//                         ]
//                     }
//                 ]
//             },
//         ]
//     }
// ];


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
            {
                title: 'Book Journey',
                link: 'book-journey',
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
        date: "12-07-2024",
        time: "07:30 AM",
        availableSeats: 7,
        bookedSeats: [1, 3, 5, 7, 8, 10],
        totalPassengers: 12
    },
    {
        id: "abuja-port",
        from: Locations[1].location,
        to: Locations[2].location,
        price: 45000,
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 6,
        bookedSeats: [2, 3, 5, 6, 8, 9],
        totalPassengers: 12
    },
    {
        id: "abuja-lagos",
        from: Locations[1].location,
        to: Locations[0].location,
        price: 30000,
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 5,
        bookedSeats: [2, 4, 5, 6, 7, 8, 9],
        totalPassengers: 12
    },
    {
        id: "port-lagos",
        from: Locations[2].location,
        to: Locations[0].location,
        price: 40000,
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 10,
        bookedSeats: [2, 6],
        totalPassengers: 12
    },
    {
        id: "port-abuja",
        from: Locations[2].location,
        to: Locations[1].location,
        price: 45000,
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 3,
        bookedSeats: [1, 2, 3, 4, 5, 6, 9, 10, 12],
        totalPassengers: 12
    },
    {
        id: "lagos-port",
        from: Locations[0].location,
        to: Locations[2].location,
        price: 40000,
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 8,
        bookedSeats: [4, 6, 7, 8],
        totalPassengers: 12
    },

]


export const BookingInfo = [
    {
        id: "id of this new booked journey",
        // journey id is to get the details of the journey
        journeyId: Journeys[0].id,
        userId: "to get the details of the user",
        date: "1, July 2024",
        noBookedSeats: 4,
        status: "booked",
        time: "should be based on time of payment confirmation"
    },
    {
        id: "id of this new",
        // journey id is to get the details of the journey
        journeyId: Journeys[1].id,
        userId: "to get the details of the user",
        date: "1, July 2024",
        noBookedSeats: 8,
        status: "booked",
        time: "should be based on time of payment confirmation"
    },
]

export const MaxBookingNo = 20








