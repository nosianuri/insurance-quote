import React, { useState } from 'react'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Final from './Steps/Final';

const StepForm = () => {
    const [page, setPage] = useState(0);

    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Step2 page={page} setPage={setPage} />;
        } else {
            return <Final page={page} setPage={setPage} />;
        }
    };
    return (
        <div className='max-w-7xl mx-auto'>
        <div className='mx-auto rounded-2xl text-gray-900 bg-[#EEE] py-5'>
                <div className="  ">
                    {/* <div className="progressbar">
                        <div style={{ width: page === 0 ? "25%" : page == 1 ? "45%" : page == 2 ? "75%" : "100%" }}
                        ></div>
                    </div> */}
                    <div className=" pb-5 sm:px-10 px-3 ">
                        <div className="body ">{PageDisplay()}</div>
                    </div>
                </div>
            </div>
            <div className='my-8  text-xs px-2'>
                <p className='mt-2'><span className='font-bold'>DISCLAIMER:</span> ENROLLMENT IN THE DESCRIBED PLAN TYPE MAY BE LIMITED TO CERTAIN TIMES OF THE YEAR UNLESS YOU QUALIFY FOR A SPECIAL ENROLLMENT PERIOD. PLAN AVAILABILITY VARIES BY REGION AND STATE.
                </p>
                <p className='mt-2'>
                    InsuranceTrendyQuote.com is a referral source that provides information and access to a helpline to match consumers with companies that may provide certain insurance coverage to them. InsuranceTrendyQuote.com does not act as an insurance broker and does not make decisions about insurance coverage that may be available to you. InsuranceTrendyQuote.com doesn’t promise a specific outcome or the results you may achieve by calling the helpline. The helpline is free to call but the services or programs that you pursue may have costs associated with them. Neither InsuranceTrendyQuote.com nor any of the supplemental insurance plans to which you may be connected are endorsed by the U.S. Government or the federal Medicare program.
                </p>
                <p className='mt-2'>
                    *Certain beneficiaries may qualify for help paying their Part B Premium ($144.00 as of 2022) as part of each States Medicaid/or Medical Assistance Program. Our partners assists beneficiaries with applications and initial eligibility screening, but only the relevant state agency may determine eligibility. Provision of financial information to our partners is optional and does not affect enrollment eligibility. Residents of certain regions may also qualify for a Part B Buyback Plan covering up to $135 of the Part B Premium.
                </p>
                <p className='mt-2'>
                    This advertisement is a solicitation to sell insurance, and is coming from a licensed health insurance agency, and not from CMS or a government agency.</p>
            </div>
        </div>
    )
}

export default StepForm