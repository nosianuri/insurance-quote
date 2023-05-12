import React from 'react'

const Step1 = ({ page, setPage }) => {
  const handleChange = (e) => {
    setPage(page + 1);
  };
  return (
    <div>
      <ul>
        <li className='flex gap-3 items-center text-lg'><i className="fa-solid fa-circle-check text-[#4A96DC]"></i>Major medical plans</li>
        <li className='flex gap-3  items-center text-lg'><i className="fa-solid fa-circle-check text-[#4A96DC]"></i>Fixed indemnity plans</li>
        <li className='flex gap-3  items-center text-lg'><i className="fa-solid fa-circle-check text-[#4A96DC]"></i>Community/Cost-Sharing plans</li>
      </ul>
      <div onClick={() => handleChange("start")} className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-3 px-8 my-8 sm:text-[23px] text-[20px] sm:w-[390px] w-4/5 mx-auto'>
        <p className='uppercase text-center font-bold mt-2'>Get Started</p>
      </div>
      <div className='flex gap-4 justify-center items-center'>
        <img src="https://i.ibb.co/ph7GWJz/Cigna.png" alt="" />
        <img src="https://i.ibb.co/6HwXCV7/humana.png" alt="" />
        <img src="https://i.ibb.co/WxP4Sjy/Anthem.png" alt="" />
      </div>
      <div className='flex justify-center px-2 pb-8 sm:w-[500px] mx-auto mt-5'>
        <i className="fa-solid fa-circle-check mt-1 mr-1"></i>
        <p className='text-center'>This month we helped 1,438 people from. Plans may be available from the trusted providers above and more.</p>
      </div>
    </div>
  )
}

export default Step1