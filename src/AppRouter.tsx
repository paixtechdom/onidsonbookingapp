import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './Pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import Footer from './assets/components/Footer';


import logo from "./assets/images/Onidson sm.png"

const HomePage = lazy(() => import('./Pages/Home/HomePage'))



export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/home" element={<HomePage />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
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