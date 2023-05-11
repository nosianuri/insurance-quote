import React from 'react';

const Step2 = ({ page, setPage }) => {
    const handleChange = (e) => {
        setPage(page + 1);
    };

    return (
        <div>
            <p className='text-4xl text-center font-extrabold'>ARE YOU +25?</p>
            <div className='flex gap-5 my-10 sm:w-[390px] mx-auto'>
                <div onClick={() => handleChange("YES")} className='bg-[#F14742] w-[250px] shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8'>
                    <p className='text-3xl text-center'>YES</p>
                </div>
                <div onClick={() => handleChange("NO")} className='bg-[#F14742] w-[250px] shadow-2xl hover:shadow-md text-[#fff] rounded-full py-5 px-8'>
                    <p className='text-3xl text-center'>NO</p>
                </div>
            </div>
        </div>
    )
}

export default Step2