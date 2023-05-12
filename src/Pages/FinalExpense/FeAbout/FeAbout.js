import React from 'react'
import FeInfo from './FeInfo'
import feimg1 from '../../../assets/aflac-final-expense-insurance-emergency-room.jpg'
import feimg2 from '../../../assets/aflac-final-expense-insurance-legal-and-accounting-documents.jpg'
import feimg3 from '../../../assets/aflac-final-expense-insurance-flowers-for-funeral.jpg'

const FeAbout = () => {
  return (
    <div className='max-w-7xl mx-auto my-10'>
      <div className='lg:mx-28 mx-5'>
        <h1 className='head-title font-semibold lg:text-5xl text-2xl text-center lg:mx-24 text-[#201e44]'>Protection for when your family needs it most.</h1>
        <p className='my-10'>With the average funeral costing $10,000 or more, a final expense insurance policy is a type of life insurance that can help minimize financial stress for your family during a difficult time. Let your family focus on what’s important with final expense coverage.</p>
        <FeInfo />
        <h3 className='text-center font-bold lg:text-3xl text-xl text-[#201e44] my-5'>Understanding Final Expense Insurance</h3>
        <p className='mb-3'>The average funeral today costs $10,000 or more. These and other end-of-life costs are often overwhelming to families after losing a loved one. A final expense insurance policy can help minimize that stress. Instead of having to drain their savings, your family can have the comfort of knowing there’s a plan in place after your death.</p>
        <p className='mb-3'>Also sometimes called burial insurance or funeral insurance, final expense insurance can help cover costs like medical bills or even credit card debt, or add to any other life insurance coverage you may already have.</p>
        <p className='mb-3'>With quick approval times and no required medical exam, final expense life insurance is a simple way to add important protection for your family. In many cases, coverage is available even if you have a pre-existing health condition. If you’re between the ages of 50 and 85, final expense insurance can offer tax-free protection and peace of mind to the people you love most.</p>
        <div>
          <h3 className='text-3xl text-[#201e44] mb-3'>How can Final Expense Insurance help you?</h3>
          <div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
            <div>
              <img src={feimg1} alt="" />
              <h5 className='font-semibold text-[#201e44] mb-2'>Out-of-Pocket Medical Bills:</h5>
              <p>Despite Medicare or private insurance coverage, elderly households may still face considerable financial risk from out-of-pocket health care expenses at the end of life.</p>
            </div>
            <div>
              <img src={feimg2} alt="" />
              <h5 className='text-[#201e44] font-semibold mb-2'>Legal and Accounting Costs:</h5>
              <p>The legal proceedings referred to as probate, and related accounting fees, can be a shock to family and loved ones. Probate costs vary by state while the probate process can take months, or years.</p>
            </div>
            <div>
              <img src={feimg3} alt="" />
              <h5 className='text-[#201e44] font-semibold mb-2'>Funeral and Burial Expenses:</h5>
              <p>A funeral can be one of your family’s largest expenses. The average cost of a funeral is $7,848.1 While many believe that cremation is a far less expensive option, data shows that the cost is only 15% less than the traditional funeral.</p>
            </div>
          </div>
        </div>
        <h5 className='text-[#201e44] font-semibold text-2xl text-center my-5'>Final Expense Whole Life Insurance</h5>
        <p>Final expense life insurance is a type of whole life insurance policy, but it’s less expensive and made to help loved ones prepare for the costs that come in the final stage of life. Surprisingly, final expenses can quickly add up to thousands of dollars. Having a final expense insurance plan can ease the financial burden and allow your family to focus on healing.</p>
        <p className='my-3'>If you find yourself in a situation where you want to provide better financial support for your loved ones, but the cost of a traditional whole life insurance policy is a little too high, final expense insurance may be the right choice for you. Experience the relief that comes with knowing your family can be cared for with Aflac’s Final Expense Whole Life Insurance and celebrate every moment left together.</p>
        <div className='lg:flex mt-10'>
          <div className='bg-base-100 shadow-2xl p-10 lg:mr-[-335px] relative mt-8'>
            <h1 className='text-[#201e44] head-title font-bold lg:text-3xl text-xl'>Get a final expense insurance quote</h1>
            <p className='my-3 lg:text-md text-sm'>Get a final expense insurance quote and compare rates in as little as 60 seconds.</p>
            <a href="#top-form">
              <button id='action-btn' className='px-4 py-2 text-xl bg-[#3e37b7] text-white font-semibold'>Get a Quote</button>
            </a>
          </div>
          <div>
            <img src="https://i.ibb.co/M8yyK8h/Final-Expense-Insurance.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  )
}

export default FeAbout