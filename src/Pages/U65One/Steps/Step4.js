import React from 'react'

const Step4 = ({ page, setPage }) => {
  const handleChange = (e) => {
    setPage(page + 1);
  };
  return (
    <div>
      <h1 className='font-extrabold text-3xl text-center'>Great! What's your full name?</h1>
      <div className='text-center mt-5'>
      <input type="text" className='border p-3' placeholder='FIRST NAME' required />
      </div>
      <div className='text-center mt-5'>
      <input type="text" className='border p-3' placeholder='LAST NAME' required />
      </div>
      
      <div onClick={() => handleChange("next")} className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-3 px-8 my-8 sm:text-[23px] text-[20px] sm:w-[240px] flex  justify-center items-center w-4/5 mx-auto'>
        <p className='uppercase text-center font-bold mt-2'>Get Started</p>
      </div>
      <p className='text-center mt-8'>Or call:</p>
      <div className='mb-8 mt-2'>
        <a href="tel:+18445942106">
          <div className='flex gap-5 justify-center items-center'>
            <div className='mt-2'>
              <i class="fa-solid fa-phone text-[#4A94DB]"></i>
            </div>
            <p className='text-2xl text-center mt-2'>18445942106</p>
          </div>
        </a>
      </div>
      <div className='flex justify-center items-center gap-4'>
        <img src="https://i.ibb.co/sm9JKMb/pulse-60x60.gif" alt="" className='w-5' />
        <p className='text-center sm:text-sm'>Call for free real-time assistance</p>
      </div>
    </div>
  )
}

export default Step4