import React from 'react'

const Step2 = ({ page, setPage, setAge }) => {
  const handleChange = (e) => {
    setAge(e);
    setPage(page + 1);
  };
  return (
    <div>
      <h1 className='text-center text-4xl'>Are you over 64 years old?</h1>
      <div className='flex gap-4 mt-5 justify-center items-center'>
        <button onClick={() => handleChange("60+")} className='bg-[#4A94DB] text-[#fff] rounded text-center w-[150px] py-2'>YES</button>
        <button onClick={() => handleChange("60-")} className='bg-[#4A94DB] text-[#fff] rounded text-center w-[150px] py-2'>NO</button>
      </div>
      <p className='text-center mt-8'>Or call:</p>
      <div className='mb-8 mt-2'>
        <a href="tel:+18445942106">
          <div className='flex gap-5 justify-center items-center'>
            <div className='mt-2'>
              <i className="fa-solid fa-phone text-[#4A94DB]"></i>
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

export default Step2