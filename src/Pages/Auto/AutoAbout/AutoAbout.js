import React from 'react'

const AutoAbout = () => {
  return (
    <div className='mx-36 my-10'>
    <div className='mx-28'>
        <h1 className='font-semibold text-5xl text-center mb-10'>Auto insurance coverage options to better fit your needs</h1>
        <p>When it comes to car insurance, you’ve got plenty of coverage options. State Farm can help you find the right coverage. We’ll also help you find out how much auto insurance you might need. Coverage varies by state and your selection.</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 my-10'>
          <div className='p-5'>
            <h1 className='font-semibold text-xl mb-2'>Collision insurance</h1>
            <p>When your vehicle hits another object, or overturns in an accident, you may be covered with collision insurance.</p>
          </div>
          <div className='p-5'>
            <h1 className='font-semibold text-xl mb-2'>Comprehensive insurance</h1>
            <p>Choose comprehensive insurance for when your vehicle's stolen or damaged by something other than collision or rolling over, like damage caused by fire, wind, hail, flood, theft and more.</p>
          </div>
          <div className='p-5'>
            <h1 className='font-semibold text-xl mb-2'>Rental insurance</h1>
            <p>When damage that's covered by your comprehensive or collision insurance has your car undrivable or in the repair shop, car rental reimbursement may help pay the cost to rent a car.</p>
          </div>
          <div className='p-5'>
            <h1 className='font-semibold text-xl mb-2'>Rideshare insurance</h1>
            <p>When you use your personal car to drive for a ridesharing company like Uber or Lyft, help protect your vehicle with rideshare coverage.</p>
          </div>
          <div className='p-5'>
          <h1 className='font-semibold text-xl mb-2'>Emergency roadside service</h1>
            <p>With emergency road service, we'll pay for the common, reasonable expenses you need to get your covered vehicle back in service.</p>
          </div>
          <div className='p-5'>
            <h1 className='font-semibold text-xl mb-2'>More insurance options</h1>
            <p>From uninsured or underinsured motorist coverage to medical payments, and liability coverage, discover all our available options.</p>
          </div>
        </div>
        <p className='text-3xl text-center'>Auto insurance that makes saving simple & convenient</p>
        <ul className='terms-article'>
          <li><span className='text-semibold text-lg'>Bundle auto and property insurance</span> <br /> <span>Save an average of 4% on your auto insurance when you combine with home, renters, or condo.ΔRead the associated disclosure for this claim.</span></li>
          <li><span className='text-semibold text-lg'>Snapshot: drive safe and save more</span> <br /> <span>Our Snapshot® program personalizes your car insurance rate based on how you drive. The safer you drive, the more you can save.</span></li>
          <li><span className='text-semibold text-lg'>Compare car insurance quotes</span> <br /> <span>Get a free car insurance quote using AutoQuote Explorer℠ and compare different insurers' prices for the same coverage — see your best rate instantly.</span></li>
          <li><span className='text-semibold text-lg'>Try Name Your Price</span> <br /> <span>Our Name Your Price® Tool lets you tell us what you want to pay for your auto insurance policy. We'll then show coverage options that fit your budget.</span></li>
        </ul>
        <div className='flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='font-bold text-3xl'>Get better home insurance today</h1>
            <p className='my-3'>Get a sense of pricing or weigh your coverage options to easily insure your home.</p>
            <button className='px-4 py-2 text-xl bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
          </div>
          <div>
            <img src="https://i.ibb.co/3FRg4xt/Allstate-Library.png" alt="" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default AutoAbout