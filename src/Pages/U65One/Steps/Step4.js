import React from 'react';
import { useForm } from 'react-hook-form';

const Step4 = ({ page, setPage, setAllData, AllData }) => {
  const { register, reset, formState: { errors }, handleSubmit } = useForm();
  const onSubmit = (data) => {
    setAllData({
      ...AllData,
      first_name: data.first_name,
      last_name: data.last_name,
    })
    setPage(page + 1);
    console.log(AllData, data, page);
  }
  // const handleChange = (e) => {
  //   setPage(page + 1);
  // };
  return (
    <div>
      <h1 className='font-extrabold text-3xl text-center'>Great! What's your full name?</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-center mt-5'>

          <div>
            <input type="text" name="first_name" className=" border p-3"
              {...register("first_name", {
                required: {
                  value: true,
                  message: 'First Name is required'
                },
                minLength: {
                  value: 3,
                  message: 'Must be 3 characters longer'
                }
              })}
              placeholder='FIRST NAME' />
          </div>
        </div>
        <div className='text-center mt-5'>
          <div>
            <input name="last_name" type="text" className=" border p-3"
              {...register("last_name", {
                required: {
                  value: true,
                  message: 'Last Name is required'
                },
                minLength: {
                  value: 3,
                  message: 'Must be 3 characters longer'
                }
              })}
              placeholder='LAST NAME' />
          </div>
          <p>
            {errors.last_name?.type === 'required' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
            {errors.last_name?.type === 'minLength' && <span className="text-xs text-red-500">{errors.last_name.message}</span>}
          </p>
        </div>

        <div className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-3 px-8 my-8 sm:text-[23px] text-[20px] sm:w-[240px] flex  justify-center items-center w-4/5 mx-auto'>
          <input className='uppercase text-center font-bold mt-2 !border-none' type='submit' value="Get Started" />
        </div>
      </form>
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

export default Step4