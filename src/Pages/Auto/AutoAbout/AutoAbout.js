import React from 'react'
import AutoInfo from './AutoInfo'
import AutoPolicy from './AutoPolicy'

const AutoAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
    <div className='lg:mx-28 mx-5'>
        <h1 className='text-[#201e44] head-title font-semibold lg:text-5xl text-2xl text-center lg:mb-10 mb-5'>Auto insurance coverage options to better fit your needs</h1>
        <p>When it comes to car insurance, you’ve got plenty of coverage options. State Farm can help you find the right coverage. We’ll also help you find out how much auto insurance you might need. Coverage varies by state and your selection.</p>
       <AutoInfo />
        <p className='text-[#201e44] lg:text-3xl text-xl text-center mt-5'>Auto insurance that makes saving simple & convenient</p>
        <ul className='terms-article'>
          <li><span className='text-semibold text-lg'>Bundle auto and property insurance</span> <br /> <span>Save an average of 4% on your auto insurance when you combine with home, renters, or condo.ΔRead the associated disclosure for this claim.</span></li>
          <li><span className='text-semibold text-lg'>Snapshot: drive safe and save more</span> <br /> <span>Our Snapshot® program personalizes your car insurance rate based on how you drive. The safer you drive, the more you can save.</span></li>
          <li><span className='text-semibold text-lg'>Compare car insurance quotes</span> <br /> <span>Get a free car insurance quote using AutoQuote Explorer℠ and compare different insurers' prices for the same coverage — see your best rate instantly.</span></li>
          <li><span className='text-semibold text-lg'>Try Name Your Price</span> <br /> <span>Our Name Your Price® Tool lets you tell us what you want to pay for your auto insurance policy. We'll then show coverage options that fit your budget.</span></li>
        </ul>
        <div className='grid lg:grid-cols-2 grid-cols-1 lg:mb-10 mb-5'>
          <div className='p-5'>
            <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>Collision insurance</h1>
            <p>When your vehicle hits another object, or overturns in an accident, you may be covered with collision insurance.</p>
          </div>
          <div className='p-5'>
            <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>Comprehensive insurance</h1>
            <p>Choose comprehensive insurance for when your vehicle's stolen or damaged by something other than collision or rolling over, like damage caused by fire, wind, hail, flood, theft and more.</p>
          </div>
          <div className='p-5'>
            <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>Rental insurance</h1>
            <p>When damage that's covered by your comprehensive or collision insurance has your car undrivable or in the repair shop, car rental reimbursement may help pay the cost to rent a car.</p>
          </div>
          <div className='p-5'>
            <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>Ride share insurance</h1>
            <p>When you use your personal car to drive for a ride sharing company like Uber or Lyft, help protect your vehicle with ride share coverage.</p>
          </div>
          <div className='p-5'>
          <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>Emergency roadside service</h1>
            <p>With emergency road service, we'll pay for the common, reasonable expenses you need to get your covered vehicle back in service.</p>
          </div>
          <div className='p-5'>
            <h1 className='text-[#201e44] font-semibold text-xl lg:mb-2'>More insurance options</h1>
            <p>From uninsured or underinsured motorist coverage to medical payments, and liability coverage, discover all our available options.</p>
          </div>
        </div>
        <AutoPolicy />
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='text-[#201e44] head-title font-bold lg:text-3xl text-xl'>Get better Auto insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>Auto insurance offers the right protection to meet your specific needs.</p>
            <a href="#top-form">
            <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/sy0QBx3/Auto-insurance.jpg" alt="" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default AutoAbout