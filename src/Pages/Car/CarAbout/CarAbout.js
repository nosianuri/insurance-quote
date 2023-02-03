import React from 'react'
import CarInfo from './CarInfo'
import CarPolicy from './CarPolicy'

const CarAbout = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
    <div className='lg:mx-28 mx-5'>
    <div>
      <h1 className='text-[#201e44] head-title font-bold text-center lg:text-4xl text-2xl mb-5'>Affordable Car insurance on and off the road</h1>
      <p className='mb-3'>Car insurance policies offer fast, easy access to knowledgeable agents and innovative tools—like Drivewise®—to help safe drivers save money. Get a car insurance quote and stay protected on the road ahead.</p>
      <p className='mb-5'>Depending on the type of car insurance coverages included in your policy, covered vehicles may include most standard 2-door and 4-door vehicles, hybrid and electric cars, and rentals. Classic car insurance policies offer specialized coverage for collector or antique cars.</p>
      <CarInfo />
      <h1 className='text-[#201e44] font-bold text-center lg:text-3xl text-xl my-5'>Why do you need car insurance?</h1>
      <p className='mb-3'>Car insurance can help pay medical bills, repairs, certain legal defense costs, and more, if you’re involved in a covered accident.</p>
      <h5 className='text-[#201e44] font-semibold lg:text-2xl text-xl mb-2'>Examples of risks a driver may face</h5>
      <p className='text-[#201e44] font-bold'>You cause an accident</p>
      <p className='mb-5'>Sometimes, the unexpected happens. Liability coverage takes care of expenses related to injury, death or damage to property of others when you’re at fault.</p>
      <p className='text-[#201e44] font-bold'>You accidentally damage your own car</p>
      <p className='mb-5'>Don’t get stuck with the bill after an incident. Collision coverage helps repair your vehicle when it is damaged in an accident or other collision.</p>
      <p className='text-[#201e44] font-bold'>Hail dents your car</p>
      <p className='mb-2'>Accidents don’t always involve another vehicle. Comprehensive coverage helps repair your car if it is involved in a non-collision incident, including hail damage, theft, or fire.</p>
      <p className='mb-2'>An uninsured driver hits you</p>
      <p className='mb-5'>Uninsured and underinsured motorist coverage helps pay for your injuries and may help repair your vehicle when the other driver is at fault and doesn’t have insurance.</p>
    </div>
    <CarPolicy />
    <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='text-[#201e44] head-title font-bold lg:text-3xl text-xl'>Get a car insurance quote</h1>
            <p className='my-3 lg:text-md text-sm'>Select your car’s make and model to find discounts, safety ratings and auto insurance information for cars, trucks, electric vehicles and more.</p>
            <a href="#top-form">
            <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div className=''>
            <img src="https://i.ibb.co/ncLmv86/Car-Insurance.jpg" alt="" />
          </div>
        </div>
    </div>
    
    </div>
  )
}

export default CarAbout