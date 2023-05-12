import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ page, setPage, setAge, onSubmit }) => {
    const { register, handleSubmit } = useForm();
    // const age = watch('age'); 
  const handleChange = (e) => {
    setAge(e);
    setPage(page + 1);
    // console.log("press next", e)
  };

    return (
        <div>
            <p className='text-4xl text-center font-extrabold mt-5 step-head'>ARE YOU +25?</p>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex gap-5 my-10 justify-center items-center sm:w-[390px] w-1/2 mx-auto'>
                <div type="button" onClick={() => handleChange("+25")} className='bg-[#F14742] sm:w-[250px] shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8 pointer'>
                    <p className='sm:text-3xl text-center'>YES</p>
                </div>
                <div type="button" onClick={() => handleChange("-25")} className='bg-[#F14742] sm:w-[250px] shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8 pointer'>
                    <p className='sm:text-3xl text-center'>NO</p>
                </div>
            </div>
            {/* <input
          type='hidden'
          {...register('age')} 
        /> */}
            </form>
        </div>
    )
}

export default Step2