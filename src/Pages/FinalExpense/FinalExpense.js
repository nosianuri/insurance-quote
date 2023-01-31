import React from 'react'
import { Helmet } from 'react-helmet'
import Carriers from '../../Components/Carriers/Carriers'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import FeAbout from './FeAbout/FeAbout'
import FeBanner from './FeHero/FeBanner'
import FeHero from './FeHero/FeHero'

const FinalExpense = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Final Expense Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <FeBanner />
      <FeAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default FinalExpense