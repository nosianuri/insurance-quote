import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Shared/Footer/Footer'
import ShortNav from '../../Components/Shared/Navbar/ShortNav'
import TermsBody from './TermsBody'


const Terms = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Privacy Policy | Insurance Trendy Quote </title>
            </Helmet>
            <Header />
            <ShortNav />
            <TermsBody />
            <Footer />
        </>
    )
}

export default Terms