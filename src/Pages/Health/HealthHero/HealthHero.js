import React from 'react'
import HealthForm from './HealthForm'
import health from '../../../assets/health.jpg'

const HealthHero = () => {
  return (
    <div style={{
        background: `url(${health})`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-white bg-opacity-25'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-20'>
                <div className='lg:py-16 py-5 lg:mx-16 '>
                    <h1 className='lg:text-5xl text-[#3e37b7] text-4xl text-center font-semibold uppercase'>Health INSURANCE </h1>
                    <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                    </h3>
                </div>
                <div>
                    <HealthForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default HealthHero