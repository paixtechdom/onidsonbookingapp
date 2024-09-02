import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './Pages/PageNotFound';
import { Navbar } from './assets/components/sections/Navbar';


import logo from "./assets/images/Onidson sm.png"
import JourneyPage from './Pages/booking/AJourney/page';
import LoginPage from './Pages/Auth/LoginPage';
import SignupPage from './Pages/Auth/SignupPage';
import EmailVerificationPage from './Pages/Auth/registration/EmailVerificationPage';
import MyJourneys from './Pages/booking/MyJourneys/MyJourneys';
import Footer from './assets/components/sections/Footer';


import CoursesPage from './Pages/services/courses/page';
import InterStateTrevellingPage from './Pages/services/interstatetravelling/page';
import LogisticsPage from './Pages/services/logistics/page';
import FlightService from './Pages/services/flight/page';
import BookJourney from './Pages/booking/BookJourney/BookJourney';
import PaymentPage from './Pages/Payment/PaymentPage';
import ProfilePage from './Pages/booking/Profile/ProfilePage';
import BookFlight from './Pages/flight_booking/BookFlight/BookFlight';
import FlightPage from './Pages/flight_booking/FlightPage/page';

const HomePage = lazy(() => import('./Pages/home/page'))
// const HomePage = lazy(() => import('./Pages/user/Home/HomePage'))
const AboutPage = lazy(() => import('./Pages/about/page'))
const ServicesPage = lazy(() => import('./Pages/services/page'))
const JobsPage = lazy(() => import('./Pages/opportunities/Jobs/page'))
const StudyAbroadPage = lazy(() => import('./Pages/opportunities/studyabroad/page'))
const ContactPage = lazy(() => import('./Pages/contact/page'))




export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/home" element={<HomePage />}/>

                        <Route path="/about" element={<AboutPage />}/>
                        <Route path="/services" element={<ServicesPage />}/>

                        <Route path='/services/logistics-services' element={<LogisticsPage /> } />

                        <Route path='/services/interstate-travelling' element={<InterStateTrevellingPage />}/>
                        <Route path='/services/flight-services' element={<FlightService />}/>
                        <Route path="/services/aviation-courses" element={<CoursesPage />}/>

                        <Route path="/opportunities/jobs" element={<JobsPage />}/>
                        <Route path="/opportunities/study-abroad" element={<StudyAbroadPage />}/>
                        
                        <Route path="/contact" element={<ContactPage />}/>

                        {/* BOOKINGS */}
                        <Route path="/booking/book-journey" element={<BookJourney />}/>
                        <Route path="/booking/book-flight" element={<BookFlight />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/signup" element={<SignupPage />}/>
                        <Route path="/profile" element={<ProfilePage />}/>
                        <Route path="/email_verification" element={<EmailVerificationPage />}/>
                        <Route path="/booking/my-journeys" element={<MyJourneys />}/>
                        <Route path="/journey/:id" element={<JourneyPage />}/>
                        <Route path="/flight/:id" element={<FlightPage />}/>
                        <Route path="/payment" element={<PaymentPage />}/>


                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer  />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
};



  const Loader = () => {
    return(
        <section className='h-screen w-full bg-white  center flex-col text-4xl  text-center gap-2 text-gray-900'>
           <img src={logo} alt="Onidson Travels and Logistics Ltd Logo" className='animate-bounce w-6/12 md:w-5/12 lg:w-3/12'/>
           {/* <h3 className='font-bold text-3xl uppercase animate-bounce'>Onidson</h3>
           <p className='font-bold text-xl'>travels and tours Ltd</p> */}
            <p className="text-sm">Seamless Travel, Planned for Your Next Journey</p>
        </section>
    )
  }