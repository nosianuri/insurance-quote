import React from 'react'
import LifeInfo from './LifeInfo'
import LifePolicy from './LifePolicy'

const LifeAbout = () => {
  return (
    <div className='lg:mx-36 my-10'>
    <div className='lg:mx-28 mx-5'>
      <h1 className='head-title italic font-semibold lg:text-5xl text-2xl text-center mb-8'>Life insurance helps protect the ones you love</h1>
      <p className='mb-3'>You can’t put a dollar amount on your family, but you can ensure their future is protected. We can’t predict when the unexpected will happen, but we can help you prepare for it when it does.Individual life insurance is arguably the biggest investment you can make in your loved ones’ security. It’s a complicated field, but don’t let that put you off. We’ll be happy to talk you through the options.</p>
      <p className='mb-3'>First, you’ll need to determine the type of life insurance you want to buy, with the most common types being term life insurance, whole life insurance and universal life insurance.</p>
      <p className='mb-3'>To put it very simply, with term life insurance you pay regular premiums for a set period and the policy only pays out if you die during this period.</p>
      <LifeInfo />
      <p>Just about everyone can benefit from some level of life insurance protection for their loved ones. You might be just starting out, raising a family, or preparing for your golden years—as long as you have loved ones you want to protect if you pass away, life insurance can help. The key is finding a policy that fits you. Whether you’re looking for a lot of coverage or just the basics, we have a policy for what you need.</p>
      <p className='text-lg mt-5'>Life insurance can help your loved ones:</p>
      <ul className='terms-article'>
        <li>Cover the rising cost of funeral expenses</li>
        <li>Replace lost wages or the value of your time (e.g., stay-at-home spouse)</li>
        <li>Pay off debt</li>
        <li>Provide for a college education</li>
        <li>Leave an inheritance</li>
      </ul>
      
      <div className='lg:flex space-x-10'>
      <div>
      <p className='mb-3'>With whole life insurance, there’s no set period. You usually pay regular premiums until you die, at which point the policy pays out. Sometimes you have the option to take a lump sum back while you are still alive, but this will reduce the amount paid out when you die.</p>
      <p className='mb-3'>Universal life insurance works in a similar way to whole life insurance, but you have more flexibility about taking money early. You can even borrow money and repay it later; although, if there’s any loan outstanding when you die, the policy’s payout can be significantly affected.</p>
      <p className='mb-3'>The premiums you pay depend heavily on your age and medical history, along with the amount you want the policy to pay out. So, it’s important to seek expert advice before committing to life insurance.</p>
      <p className='mb-3'>Contact us and we’ll walk you through the options and help you to determine if term life insurance, whole life insurance or universal life insurance are right for you.</p>
      </div>
      <img className='border-8 border-indigo-500/75' src="https://i.ibb.co/xLSBmzY/boys-wrestling-with-dad.jpg" alt="" />
      </div>
      
      <div className='lg:flex my-10'>
          <div className='border-4 border-white border-r-gray-300'>
            <h2 className='lg:text-4xl text-2xl mr-5 italic'>What factors shape my life insurance cost?</h2>
          </div>
          
          <div className='mx-5'>
            <p>What you pay for life insurance is affected by a lot of factors. Some of those factors are related to you, others are related to the world around you.</p>
            <p>A standard motorcycle policy will typically cover:</p>
            <ul className='terms-article'>
              <li><span className='font-bold'>Age:</span> Generally, the younger you are when you buy your policy, the lower your premium will be.</li>
              <li><span className='font-bold'>Term vs. Permanent:</span> Term policies are significantly less expensive than permanent plans.</li>
              <li><span className='font-bold'>Length of term:</span> Term policies are available in 10- to 40-year term lengths.</li>
              <li><span className='font-bold'>Coverage amount:</span> A policy with a larger death benefit amount will naturally cost more than a similar policy with a smaller benefit amount.</li>
              <li><span className='font-bold'>Health history:</span> Things like your current health, health history and family medical history all shape your price.</li>
              <li><span className='font-bold'>Lifestyle:</span> Smoking or high-risk hobbies often lead to higher premiums.</li>
            </ul>
            <p>But that’s just the tip of the iceberg. Visit the coverage page for a full list of motorcycle insurance coverage options.</p>
          </div>
        </div>
        <p>Permanent life insurance is a policy that lasts from the time you buy it until the time you pass away—assuming all ongoing payments are made. On top of paying a death benefit to your family, it can also include a separate cash value savings component. Cash value can benefit you while alive by helping you pay your premiums, take out loans on your policy and more.</p>
        <LifePolicy />
      <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='head-title font-bold lg:text-3xl text-xl'>Get better life insurance today</h1>
            <p className='my-3 lg:text-md text-sm'>Get affordable life insurance and financial protection. Affordable life insurance made easier for everyone</p>
            <a href="#top-form">
            <button id='action-btn' className='px-4 py-2 lg:text-xl text-md bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div className=''>
            <img src="https://i.ibb.co/17CTKmY/Life-insurance.jpg" alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default LifeAbout