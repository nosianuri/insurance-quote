import React from 'react'
import { Helmet } from 'react-helmet'
import Cta from '../../Components/Cta/Cta'
import Footer from '../../Components/Shared/Footer/Footer'
// import Navbar from '../../Components/Shared/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Service from '../../Components/Service/Service'
import Carriers from '../../Components/Carriers/Carriers'
import MainBanner from '../../Components/MainBanner/MainBanner';
import Coverage from '../../Components/Covarage/Coverage'
import Category from '../../Components/Category/Category'
import CompareCard from '../../Components/Compare/CompareCard'


const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Insurance Trendy Quote </title>
      </Helmet>
      <div className='overflow-hidden'>
        <Header />
        <MainBanner />
        <Service />
        <Coverage />
        <CompareCard />
        <Cta />
        <Category />
        <Carriers />
        <Footer />
      </div>
    </div>
  )
}

export default Home