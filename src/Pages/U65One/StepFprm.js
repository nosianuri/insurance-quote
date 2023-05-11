import React, { useState } from 'react'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Final from './Steps/Final';

const StepFprm = () => {
    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Step2 page={page} setPage={setPage} />;
        } else if (page === 2) {
            return <Step3 page={page} setPage={setPage} />;
        } else if (page === 3) {
            return <Step4 page={page} setPage={setPage} />;
        } else if (page === 4) {
            return <Step5 page={page} setPage={setPage} />;
        } else {
            return <Final page={page} setPage={setPage} />;
        }
    };
    return (
        <div className='sm:w-[800px] mx-auto border'>
            <div className='bg-[#EEE] py-10'>
                <h1 className='text-4xl font-extrabold text-center'>Great News!</h1>
                <p className='font-medium text-xl text-center mt-2'>Congress made it easier for Americans to qualify for discounted health insurance!</p>
            </div>
            <div className='mx-auto rounded-2xl text-gray-900'>
                <div className="sm:w-[600px] mx-auto ">
                    <div className="progressbar">
                        <div style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "55%" : page == 3 ? "65%" : page == 4 ? "75%" : page == 5 ? "85%" : "100%" }}
                        ></div>
                    </div>
                    <div className="form-container pb-5 sm:px-10 px-3 ">
                        <div className="body ">{PageDisplay()}</div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center px-2 pb-8  sm:w-[700px] mx-auto'>
            <i class="fa-solid fa-circle-check mt-1 mr-1"></i>
                <p className='text-center'>This month we helped 1,438 people from. Plans may be available from the trusted providers above and more.</p>
            </div>
        </div>
    )
}

export default StepFprm