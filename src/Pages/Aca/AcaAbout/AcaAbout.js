import React from 'react'

const AcaAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
      <div className='lg:mx-28 mx-5'>
        <h1 className='text-center lg:text-5xl text-2xl font-semibold'>Affordable Care Act (ACA)</h1>
        <p className='my-5'>The comprehensive health care reform law enacted in March 2010 (sometimes known as ACA, PPACA, or “Obamacare”).</p>
        <p>The law has 3 primary goals:</p>
        <ul className='terms-article'>
          <li>Make affordable health insurance available to more people. The law provides consumers with subsidies (“premium tax credits”) that lower costs for households with incomes between 100% and 400% of the federal poverty level (FPL).</li>
          <li>Expand the Medicaid program to cover all adults with income below 138% of the FPL. (Not all states have expanded their Medicaid programs.)</li>
          <li>Support innovative medical care delivery methods designed to lower the costs of health care generally.</li>
        </ul>
        <p className='text-xl font-semibold'>Health Insurance Plans</p>
        <p className='mb-5'>Health insurance helps you pay for medical services and sometimes prescription drugs. You and your insurer each agree to pay a certain dollar amount or percentage of your medical expenses.</p>
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='font-bold lg:text-3xl text-xl'>Get better ACA insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>You can enroll in or change plans if you have certain life
              events or income.</p>
            <a href="#top-form">
              <button className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div className=''>
            <img src="https://i.ibb.co/ZNYxbrp/ACA.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcaAbout