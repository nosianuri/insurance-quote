import React from 'react'
import aboutBanner from '../../assets/about-bannerpng.png'

const AboutBanner = () => {
  return (
    <div className='bg-[#201e44] lg:pt-28 md:pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-20 md:pl-5 px-3 lg:gap-32 gap-0 justify-center items-center'>
            <div className='lg:w-[650px] order-last md:order-first lg:order-first'>
                <h1 className='head-title uppercase lg:text-5xl md:text-3xl text-2xl font-semibold !leading-normal text-white lg:text-left text-center'>About Insurance Trendy Quote</h1>
                <p><span className='text-white mt-3 lg:text-left text-center'>Trust the insurance brokerage committed to making a difference. The insurance industry is ever-changing, so finding the right coverage can be stressful. Our team focuses on communication to ensure you get the best option for your individual needs.</span>
                <div className='lg:text-left text-center'>
                <a href="tel:18445010362">
                <button id="service-btn" className='bg-[#594c7a] text-white my-10 p-3'>Contact an insurance Professional</button>
                </a>
                </div>
                </p>
            </div>
            <div className='mb-10 mt-8'>
                <img className='mx-auto order-first md:order-last lg:order-last' src={aboutBanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default AboutBanner