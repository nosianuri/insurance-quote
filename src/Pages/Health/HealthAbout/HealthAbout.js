import React from 'react'

const HealthAbout = () => {
  return (
    <div className='lg:mx-36 my-16'>
        <div className='lg:mx-28 mx-5'>
        <h1 className='font-semibold text-3xl mb-2'>Programs that support your vision.</h1>
        <p className='mb-5'>Employee Benefits help you attract and retain the people you trust to develop your products and deliver your unique message to your clients. Our job is to assist business owners and decision makers ensure the benefits offered to employees help reinforce your goals while protecting your employees – be it health insurance, life insurance, retirement planning or other benefits.</p>
        <div className='lg:w-full w-full h-[1px] bg-gray-300'></div>
        <p className='mt-5'>At Emil Rummel Agency, we understand that years of hard work go into building a business. We know that your Michigan business means the world to you. Protecting something you’ve worked for is important and, at Emil Rummel Agency, we’re here for you. Let us take care of you by finding options that work within your company’s budget. As an independent agency, we have relationships with several insurance and financial service providers. We’ll find the right option tailored to your business’ unique needs.</p>
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='font-bold lg:text-3xl text-xl'>Get better health insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>See what's new in health, care and the community. Explore our health insurance plans.</p>
            <a href="#top-form">
            <button id='service-btn' className='px-4 py-2 text-xl bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/zXBtC4t/Health-Insurance-Under-65.jpg" alt="" />
          </div>
        </div>
        </div>
    </div>
  )
}

export default HealthAbout