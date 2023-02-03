import React from 'react'
import contactBanner from '../../assets/contact-bannr.png'

const ContactHero = () => {
  return (
    <div className='bg-[#201e44] lg:pt-24 md:pt-28'>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:pl-20 md:pl-5 px-3 lg:gap-32 gap-0 justify-center items-center'>
            <div className='lg:w-[650px] order-last md:order-first lg:order-first'>
                <h1 className='uppercase lg:text-5xl md:text-3xl text-2xl font-semibold !leading-normal text-white lg:text-left text-center'>Contact For A Quick Quote</h1>
                <p><span className='text-white mt-3 lg:text-left text-center'>Work with our local insurance agents and find the best coverage to fit your lifestyle. <br /> Need assistance?</span>
                <div className='lg:text-left text-center'>
                <a href="/">
                <button id="service-btn" className='bg-[#594c7a] text-white my-10 p-3'>Contact an insurance Professional</button>
                </a>
                </div>
                </p>
            </div>
            <div className='mb-10'>
                <img className='mx-auto order-first md:order-last lg:order-last' src={contactBanner} alt="" />
            </div>
        </div>
    </div>
  )
}

export default ContactHero