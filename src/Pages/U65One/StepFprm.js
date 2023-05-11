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
        <div>
            <div className='mx-auto rounded-2xl text-gray-900'>
                <div className="form  container ">
                    <div className="progressbar">
                        <div style={{ width: page === 0 ? "20%" : page == 1 ? "40%" : page == 2 ? "55%" : page == 3 ? "65%" : page == 4 ? "75%" : page == 5 ? "85%" : "100%" }}
                        ></div>
                    </div>
                    <div className="form-container pb-5 sm:px-10 px-3 ">
                        <div className="body ">{PageDisplay()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepFprm