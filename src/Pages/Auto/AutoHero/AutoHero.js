import React from 'react'
import AutoForm from './AutoForm'
import auto from '../../../assets/private-auto-insurance-bg.webp'

const AutoHero = () => {
  return (
    <div style={{
        background: `url(${auto})`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-white bg-opacity-25'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 pt-20'>
                <div className='lg:py-16 py-5 lg:mx-16 '>
                    <h1 className='lg:text-5xl text-[#3e37b7] text-4xl text-center font-semibold'>Auto INSURANCE </h1>
                    <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                    </h3>
                </div>
                <div>
                    <AutoForm />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AutoHero