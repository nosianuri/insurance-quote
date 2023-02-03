import React from 'react';
import './HiAbout.css';
import HiInfo from './HiInfo';
import HiPolicy from './HiPolicy';

const HiAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
      <div className='lg:mx-28 mx-5'>
        <h1 className='head-title font-semibold lg:text-5xl text-[#201e44] text-2xl text-center mb-5'>Home Insurance Guides & Advice</h1>
        <p className='my-5'>At Insurance Trendy Quote, we strive to provide our customers with the most competitive rates for their home insurance needs. We understand that cost is a major factor in determining coverage and are eager to share valuable information about the factors that will influence this cost. Your home is one of your biggest assets, and it’s important to do all that you can to protect it. We’ll help you plan for the unexpected with insurance coverage that’s just right for you and your family.</p>
        <HiInfo />
        {/* <div className='lg:w-full w-full h-[1px] bg-gray-300'></div> */}
        <p className='my-5'>Your home is both a valuable asset and the center of your life, so it’s extra-important to cover every risk with homeowners insurance. Get the right policy and you’ll take care of the small and large risks related to owning a house at the same time.</p>
        <p>For example, a devastating fire could result in not just the total loss of your home, but financial ruin. Without adequate home insurance you could be left with no way of raising the funds to pay off the balance of the mortgage. Of course, homeowners insurance may also protect you from more common house-related incidents like pipe leaks, burglary of personal possessions, and much more.</p>
        <p className='my-5'>Finding the right home insurance policy for your unique needs can seem overwhelming. Rest assured, we can help make things a bit simpler by creating a homeowners insurance policy that gets you the proper coverage for your house at the right price.</p>
        <p className='mt-5'>When reviewing your home insurance options, consider the following coverages:</p>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
          <ul className='terms-article'>
            <li>Fire</li>
            <li>Personal Property / Contents</li>
            <li>Property Damage</li>
            <li>Additional Living Expense / Loss of Use</li>
            <li>Jewelry, Fine Arts & Collectibles</li>
            <li>Medical Expenses</li>
            <li>Personal Liability</li>
            <li>Miscellaneous Coverage</li>
            <li>Personal Injury</li>
          </ul>
          <ul className='terms-article'>
            <li>Umbrella</li>
            <li>Excess Liability Coverage</li>
            <li>Flood Coverage</li>
            <li>Secondary Home</li>
            <li>Collectible Cars</li>
            <li>Wine Collection</li>
            <li>Water Back-Up</li>
            <li>Off Premises Theft</li>
          </ul>
        </div>
        <HiPolicy />
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='text-[#201e44] head-title font-bold lg:text-3xl text-xl'>Get better home insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>Get a sense of pricing or weigh your coverage options to easily insure your home.</p>
            <a href="#top-form">
              <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/ZhKrpgH/Home-Insurance.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HiAbout