import React from 'react';
import coverage from '../../assets/coverage.png';

const Coverage = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className=' mx-5 py-10 my-16 px-5'>
        <div className='lg:flex justify-center items-center space-y-5 gap-10 '>
          <img className='lg:order-last w-96' src={coverage} alt="" />
          <div className='order-last' data-aos='fade-left' data-aos-delay='500'>
            <h2 className='head-title font-semibold lg:text-4xl text-[#201e44] text-2xl'>Get The Coverage You Need</h2>
            <p className='my-3'>With Affordable Prices that Won’t Break the Bank!</p>
            <p className='mb-3'>When it comes to your insurance policies, premium rates aren’t always your first concern. You need the right coverage options to protect your assets thoroughly. While other insurance agencies offer savings and discounts that seem promising, they typically break down your coverage to the bare minimum. That’s where Insurance Trendy Quote Insurance makes a difference. </p>
            <p>Insurance Trendy Quote brings clients affordable rates with policies that don’t sacrifice your coverage and protection. When you meet with our brokers, you’ll see exactly what you get with your policy. We’ll help you compare your options, sort through various premium rates, and pick the right coverage for your unique needs. With Insurance Trendy Quote, we’re dedicated to ensuring every one of our clients walks away with confidence and peace of mind with the right coverage at the best prices. </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Coverage