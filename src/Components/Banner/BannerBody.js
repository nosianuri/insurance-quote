import React from 'react'
import insurance from '../../assets/Home Insurance Remeber Forget .png'

const BannerBody = () => {
  return (
    <div className='bg-[#3b3352] lg:pt-24 md:pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-20 md:pl-5 px-3 lg:gap-32 gap-10 justify-center items-center'>
            <div className='lg:w-[650px] order-last md:order-first lg:order-first'>
                <h1 className='uppercase lg:text-5xl md:text-3xl text-2xl font-semibold !leading-normal text-white lg:text-left text-center'>Protect Yourself, Your Family And The Life You’ve Built</h1>
                <p><span className='text-white mt-3 lg:text-left text-center'>Our comprehensive coverage options ensure you get the coverage you need to protect your most valuable assets. Talk to our expert brokers to get exclusive policy rates that meet your needs.</span>
                <div className='lg:text-left text-center'>
                <a href="/">
                <button id="service-btn" className='bg-[#594c7a] text-white my-10 p-3'>Contact an insurance Professional</button>
                </a>
                </div>
                </p>
            </div>
            <div className='mb-10'>
                <img className='mx-auto order-first md:order-last lg:order-last' src={insurance} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BannerBody