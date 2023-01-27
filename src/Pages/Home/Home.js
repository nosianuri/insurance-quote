import React from 'react'
import { Helmet } from 'react-helmet'
import Banner from '../../Components/Banner/Banner'
import Cta from '../../Components/Cta/Cta'
import Hero from '../../Components/Hero/Hero'
import Footer from '../../Components/Shared/Footer/Footer'
// import Navbar from '../../Components/Shared/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Service from '../../Components/Service/Service'
import Carriers from '../../Components/Carriers/Carriers'
import Offer from '../../Components/Offer/Offer'
import MainBanner from '../../Components/MainBanner/MainBanner';
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import About from '../../Components/About/About'

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insurance Trendy Quote </title>
      </Helmet>
      <div>
        <Header />
        <ShortNav />
        <MainBanner />
        <Service />
        <Cta />
        <Offer />
        <div className='lg:mx-36 mx-5'>
          <div className='lg:w-full w-full h-[1px] bg-gray-300 '></div>
        </div>
        <Carriers />
        <Footer />
      </div>
    </div>
  )
}

export default Home