import React from 'react'
import MotorInfo from './MotorInfo'
import MotorPolicy from './MotorPolicy'

const MotorAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
      <div className='lg:mx-28 mx-5'>
        <h1 className='head-title text-center font-semibold lg:text-5xl text-2xl mb-10'>Gear up for the road knowing you’re protected</h1>
        <p className='mb-3'>Protect both yourself and your motorcycle with a motorcycle insurance policy. It takes just minutes to get your quote online today.</p>
        <h3 className='lg:text-3xl text-xl text-center mb-5'>Start a motorcycle insurance quote online</h3>
        <p className='mb-5'>We didn't become the best motorcycle insurance company by giving our riders "the basics." You’re passionate about your bike, so we dig deeper to offer a wide range of coverages and discounts for customized protection. Get a free motorcycle insurance quote, buy online, and see why nearly 1 in 3 insured motorcycle riders choose Progressive.</p>
        <MotorInfo />
        <h5 className='text-2xl font-semibold mt-5 text-center'>If it's cool enough to ride, it's cool enough to cover</h5>
        <p>Whether you ride a sport bike, touring bike, cruiser, moped, standard motorcycle, or custom hog, we have you covered. Here are a few common types of motorcycles that we insure:</p>

        <div className='flex my-10'>
          <div className='border-4 border-white border-r-gray-300'>
            <h2 className='lg:text-5xl mr-5 italic'>What does motorcycle insurance cover?</h2>
          </div>
          
          <div className='mx-5'>
            <p>Motorcycle insurance was designed to protect your bike…and you.</p>
            <p>A standard motorcycle policy will typically cover:</p>
            <ul className='terms-article'>
              <li>Bodily injury liability coverage</li>
              <li>Property damage liability coverage</li>
              <li>Medical payments coverage</li>
            </ul>
            <p>But that’s just the tip of the iceberg. Visit the coverage page for a full list of motorcycle insurance coverage options.</p>
          </div>
        </div>
        <MotorPolicy />
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl lg:p-10 p-5 lg:mr-[-335px] relative mt-8'>
            <h1 className='head-title font-bold lg:text-3xl text-xl'>Get Progressive motorcycle insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>Get covered and get riding. Get a quick, personalized motorcycle insurance quote today, and then hit the open road.</p>
            <a href="#top-form">
            <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/pRBRDQP/motor-cycle-insurance.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MotorAbout