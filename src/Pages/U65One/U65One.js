import React from 'react'
import TopHead from '../../Components/Header/TopHead'
import Footer from '../../Components/Shared/Footer/Footer'
import StepFprm from './StepFprm'
import U65Footer from './U65Footer'

const U65One = () => {
  return (
    <div>
      <TopHead />
      <div className='pt-24'>
      <StepFprm />
      </div>
      <U65Footer />
    </div>
  )
}

export default U65One