import React from 'react'
import { Helmet } from 'react-helmet'
import TopHead from '../../Components/Header/TopHead'
import Footer from '../../Components/Shared/Footer/Footer'
import StepFormBody from './StepFormBody'

const StepForm = () => {
  return (
    <div>
        <Helmet>
        <meta charSet="utf-8" />
        <title>StepForm Insurance | Insurance Trendy Quote </title>
      </Helmet>
      <div>
      <TopHead />
      <StepFormBody />
      <Footer />
      </div>
    </div>
  )
}

export default StepForm