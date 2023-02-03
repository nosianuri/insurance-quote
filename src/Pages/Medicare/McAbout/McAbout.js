import React from 'react'
import McInfo from './McInfo'
import MediCarePolicy from './MediCarePolicy'

const McAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
      <div className='lg:mx-28 mx-5'>
      <h1 className='text-[#201e44] head-title lg:text-5xl text-2xl font-semibold text-center lg:mb-10 mb-5'>Healthier happens together</h1>
      <p className='mb-3'>Medicare is our country's health insurance program for people age 65 or older. Certain people younger than age 65 can qualify for Medicare too, including those with disabilities and those who have permanent kidney failure.</p>
      <p>The program helps with the cost of health care, but it does not cover all medical expenses or the cost of most long-term care. You have choices for how you get Medicare coverage. </p>
      <McInfo />
      <p className='text-[#201e44] text-2xl font-semibold mt-5'>Making Sense of Medicare</p>
      <p>Whether you are new to Medicare, approaching age 65, or preparing to retire, you’ll need to make several important decisions about your health insurance coverage. We know that Medicare can be confusing, and the benefits and costs can change every year. That’s why our approach is to educate our consumers, and develop lasting relationships that result in life-long clients. We will help Michigan residents with understanding Original Medicare, Medicare Advantage, Medicare Supplements, and Prescription Drug Plans. As independent agents, we offer a variety of carriers and coverages to complement what you have available through Medicare Parts A and B.
</p>
<MediCarePolicy />
      <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='text-[#201e44] head-title font-bold lg:text-3xl text-xl'>Find medicare insurance plans for the whole family</h1>
            <p className='my-3 lg:text-md text-sm'>Making the Most of Your Medicare Insurance Plan: Get All the Benefits You Deserve.</p>
            <a href="#top-form">
            <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div className=''>
            <img src="https://i.ibb.co/G9vnWLq/MEDICARE.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default McAbout