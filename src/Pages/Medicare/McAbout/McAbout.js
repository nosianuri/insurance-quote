import React from 'react'

const McAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
      <div className='lg:mx-28 mx-5'>
      <h1 className='lg:text-5xl text-2xl font-semibold text-center lg:mb-10 mb-5'>Healthier happens together</h1>
      <p className='mb-3'>Medicare is our country's health insurance program for people age 65 or older. Certain people younger than age 65 can qualify for Medicare too, including those with disabilities and those who have permanent kidney failure.</p>
      <p>The program helps with the cost of health care, but it does not cover all medical expenses or the cost of most long-term care. You have choices for how you get Medicare coverage. </p>
      <p className='text-2xl font-semibold mt-5'>Making Sense of Medicare</p>
      <p>Whether you are new to Medicare, approaching age 65, or preparing to retire, you’ll need to make several important decisions about your health insurance coverage. We know that Medicare can be confusing, and the benefits and costs can change every year. That’s why our approach is to educate our consumers, and develop lasting relationships that result in life-long clients. We will help Michigan residents with understanding Original Medicare, Medicare Advantage, Medicare Supplements, and Prescription Drug Plans. As independent agents, we offer a variety of carriers and coverages to complement what you have available through Medicare Parts A and B.
</p>
      <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='font-bold lg:text-3xl text-xl'>Get better home insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>Get a sense of pricing or weigh your coverage options to easily insure your home.</p>
            <button className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
          </div>
          <div className=''>
            <img src="https://i.ibb.co/3FRg4xt/Allstate-Library.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default McAbout