import React from 'react'
import MotorForm from './MotorForm'

const MotorHero = () => {
  return (
    <div style={{
        background: `url(https://i.ibb.co/yhMd4B0/Motorcycle-Insurance.jpg)`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-5 bg-white bg-opacity-25 lg:pt-0 pt-16'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-center pt-20'>
                <div className='lg:py-16 py-5 lg:mx-16 '>
                    <h1 className='head-title lg:text-5xl text-[#3e37b7] text-4xl text-center font-semibold uppercase'>Motorcycle INSURANCE </h1>
                    <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                    </h3>

                </div>
                <div>
                    <MotorForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MotorHero