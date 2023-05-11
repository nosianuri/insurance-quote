import React from 'react'

const Step1 = () => {
  return (
    <div>
      <ul>
        <li className='flex gap-3 items-center text-lg'><i class="fa-solid fa-circle-check text-[#4A96DC]"></i>Major medical plans</li>
        <li className='flex gap-3  items-center text-lg'><i class="fa-solid fa-circle-check text-[#4A96DC]"></i>Fixed indemnity plans</li>
        <li className='flex gap-3  items-center text-lg'><i class="fa-solid fa-circle-check text-[#4A96DC]"></i>Community/Cost-Sharing plans</li>
      </ul>
        <div className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-3 px-8 my-8 sm:text-[23px] text-[20px] sm:w-[390px] w-4/5 mx-auto'>
            <p className='uppercase text-center font-bold mt-2'>Get Started</p>
        </div>
    </div>
  )
}

export default Step1