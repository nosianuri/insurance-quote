import React from 'react'
import TopHead from '../../Components/Header/TopHead'
import Footer from '../../Components/Shared/Footer/Footer'
import StepFprm from './StepFprm'
import U65Footer from './U65Footer'
import U65Head from './U65Head'

const U65One = () => {
  return (
    <div>
    <U65Head />
      <div className='pt-24 pb-5'>
      <StepFprm />
      </div>
    <div className='flex gap-4 justify-center items-center'>
      <img src="https://i.ibb.co/ph7GWJz/Cigna.png" alt="" />
      <img src="https://i.ibb.co/6HwXCV7/humana.png" alt="" />
      <img src="https://i.ibb.co/WxP4Sjy/Anthem.png" alt="" />
    </div>
      <U65Footer />
    </div>
  )
}

export default U65One