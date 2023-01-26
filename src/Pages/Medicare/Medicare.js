import React from 'react';
import { Helmet } from 'react-helmet';
import Carriers from '../../Components/Carriers/Carriers';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Shared/Footer/Footer';
import ShortNav from '../../Components/Shared/Navbar/ShortNav';
import McAbout from './McAbout/McAbout';
import McHero from './McHero/McHero';

const Medicare = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>medicare Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <Header />
      <McHero />
      <McAbout />
      <Carriers />
      <Footer />
    </div>
  )
}

export default Medicare