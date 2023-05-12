import React from 'react'

const Step1 = ({ page, setPage, setInsurance, register }) => {
    const handleChange = (e) => {
        // setInsurance(e);
        setPage(page + 1);
    };
    return (
        <div className=''>
            <p className='sm:text-4xl text-2xl text-center font-extrabold !leading-snug sm:w-[590px] mx-auto mt-5 step-head'>DO YOU HAVE HEALTH INSURANCE?</p>
            <div className='flex gap-5 my-10 justify-center items-center sm:w-[390px] w-1/2 mx-auto'>
                <div onClick={() => handleChange("YES")} className='bg-[#F14742] sm:w-[250px]  mx-auto shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8 '>
                    <p className='sm:text-3xl text-center pointer'>YES</p>
                </div>
                <div onClick={() => handleChange("NO")} className='bg-[#F14742] sm:w-[250px] mx-auto shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8 pointer'>
                    <p className='sm:text-3xl text-center '>NO</p>
                </div>
            </div>
            <div>
        <input
          type='hidden'
          {...register('insurance')} // Register the input field with the name 'insurance'
        />
      </div>
        </div>
    )
}

export default Step1