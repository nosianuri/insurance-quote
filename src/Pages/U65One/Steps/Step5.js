import React from 'react'

const Step5 = ({ page, setPage }) => {
  const handleChange = (e) => {
    setPage(page + 1);
  };
  return (
    <div>
    <h1 className='font-extrabold text-3xl text-center'>Tiha almost there! Where do we send your eligibility confirmation?</h1>
    <div className='flex justify-center items-center gap-4 mt-5'>
    <i class="fa-solid fa-circle-check text-[#4A96DC]"></i>
      <p className='text-center sm:text-sm'>Call for free real-time assistance</p>
    </div>
    <div className='text-center mt-5'>
    <input type="email" className='border p-3' placeholder='EMAIL' required />
    </div>
    <div className='text-center mt-5'>
    <input type="text" className='border p-3' placeholder='PHONE NUMBER' required />
    </div>
    <p className='text-sm text-center sm:w-[350px] mx-auto mt-8'>By clicking the 'Get My Free Quotes' Button, I agree to the consents below the button.</p>
    
    <div onClick={() => handleChange("next")} className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-3 px-8 my-8 sm:text-[20px] text-[18px] sm:w-[300px] w-4/5 mx-auto'>
      <p className='uppercase text-center font-bold mt-2'>Get MY FREE QUOTES</p>
    </div>
    <div className='text-xs'>
    By clicking the Get My Free Quotes button and submitting this form, I agree that I am 18+ years old and I provide my signature expressly consenting to receive emails, calls, postal mail, text messages and other forms of marketing communication regarding Health Insurance, or other offers from the listed companies and agents to the number(s) I provided, including a mobile phone, even if I am on a state or federal Do Not Call and/or Do Not Email registry. The list of companies participating are subject to change. I will receive calls and/or texts from multiple companies in the list. Such calls and text messages may use automated telephone dialing systems, artificial or pre-recorded voices. I understand my wireless carrier may impose charges for calls or texts. I understand that my consent to receive communications is not a condition of purchase and I may revoke my consent at any time by calling us at 833-637-0318
    </div>
    
  </div>
  )
}

export default Step5