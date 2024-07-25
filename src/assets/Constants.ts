


export const NavInfo = [
    {
        title: 'Home',
        link: '',
    },
    {
        title: 'About Us',
        link: 'about',
    },
    {
        title: 'Services',
        link: 'services',
        sublinks: [
            {
                title: "Flight Services",
                link: "logistics"
            },
            {
                title: "Logistics Services",
                link: "logistics"
            },
            {
                title: "Interstate Travelling",
                link: "interstate-travelling"
            },
            {
                title: "View All",
                link: ""
            }
        ]
        
    },
    {
        title: 'Courses',
        link: 'courses',
        sublinks: [
            {
                title: "Customer and Sales",
                link: "customer-sales"
            },
            {
                title: "Operational and Crisis Management",
                link: "operations-crisis"
            },
            {
                title: "Destination and Technology",
                link: "destination-technology"
            },
            {
                title: "View All",
                link: ""
            }
        ]
        
    },
    {
        title: 'Study Abroad',
        link: 'study-abroad',
    },
    {
        title: 'Jobs',
        link: 'jobs',
    },
    {
        title: 'Contact Us',
        link: 'contact',
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
        id: "from-to-ln",
        from: Locations[0].location,
        to: Locations[1].location,
        price: "30,000",
        date: "12, July 2024",
        time: "07:30 AM",
        availableSeats: 7,
        bookedSeats: 5,
        totalPassengers: 12
    }
]


export const BookingInfo = [
    {
        id: "id-unique-to-the-booker",
        date: "1, July 2024",
        journeyId: Journeys[0].id,
        seat: 4,
        status: "booked"
    }
]

export const MaxBookingNo = 20





