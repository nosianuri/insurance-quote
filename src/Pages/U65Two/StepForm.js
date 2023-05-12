import React, { useState } from 'react'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Final from './Steps/Final';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const StepForm = () => {
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [Insurance, setInsurance] = useState();
    const [Age, setAge] = useState();

    const onSubmit = async () => {
        setLoading(true);
    
        const data = {
            do_you_have_health_insurance: Insurance,
            age: Age,
        };
    
        try {
            if (Object.keys(data).length > 0) {
                const response = await fetch('https://api.insurancetrendyquote.com/api/post-health-insurance', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    toast.success('Successful post data');
                    reset();
                    setLoading(false);
                    setPage(page + 1);
                    console.log(responseData);
                } else {
                    throw new Error('Error submitting data');
                }
            } else {
                toast.warning("Input fields can't be empty", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
        } catch (error) {
            toast.error(`Error: ${error.message}`);
            setLoading(false);
        }
    };

    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 page={page} setPage={setPage} Insurance={Insurance} setInsurance={setInsurance} />;
        } else if (page === 1) {
            return <Step2 page={page} setPage={setPage} Age={Age} setAge={setAge} onSubmit={handleSubmit(onSubmit)} />;
        } else {
            return <Final page={page} setPage={setPage}  />;
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
            <div className='grid sm:grid-cols-7 grid-cols-3  justify-center items-center mt-8 '>
                <img src="https://i.ibb.co/t3rfXGp/humana2.png" alt="" className='u65-shadow mx-auto ' />
                <img src="https://i.ibb.co/bPYcffp/aetna.png" alt="" className='u65-shadow mx-auto' />
                <img src="https://i.ibb.co/rkNCNhN/ambette.png" alt="" className='u65-shadow mx-auto' />
                <img src="https://i.ibb.co/cvKQ26c/Antheme.png" alt="" className='u65-shadow mx-auto' />
                <img src="https://i.ibb.co/hCmZPZK/blue-crus.png" alt="" className='u65-shadow mx-auto' />
                <img src="https://i.ibb.co/CJb1CQR/bright-Health.png" alt="" className='u65-shadow mx-auto' />
                <img src="https://i.ibb.co/Prr3Kx9/Cigna2.png" alt="" className='u65-shadow mx-auto' />
            </div>
            <div className='my-8  text-xs px-2'>
                <p className='mt-2'><span className='font-bold'>DISCLAIMER:</span> ENROLLMENT IN THE DESCRIBED PLAN TYPE MAY BE LIMITED TO CERTAIN TIMES OF THE YEAR UNLESS YOU QUALIFY FOR A SPECIAL ENROLLMENT PERIOD. PLAN AVAILABILITY VARIES BY REGION AND STATE.
                </p>
                <p className='mt-2'>
                    InsuranceTrendyQuote.com is a referral source that provides information and access to a helpline to match consumers with companies that may provide certain insurance coverage to them. InsuranceTrendyQuote.com does not act as an insurance broker and does not make decisions about insurance coverage that may be available to you. InsuranceTrendyQuote.com doesn’t promise a specific outcome or the results you may achieve by calling the helpline. The helpline is free to call but the services or programs that you pursue may have costs associated with them. Neither InsuranceTrendyQuote.com nor any of the supplemental insurance plans to which you may be connected are endorsed by the U.S. Government or the federal Medicare program.
                </p>
                <p className='mt-2'>
                    *Certain beneficiaries may qualify for help paying their Part B Premium ($144.00 as of 2023) as part of each States Medicaid/or Medical Assistance Program. Our partners assists beneficiaries with applications and initial eligibility screening, but only the relevant state agency may determine eligibility. Provision of financial information to our partners is optional and does not affect enrollment eligibility. Residents of certain regions may also qualify for a Part B Buyback Plan covering up to $135 of the Part B Premium.
                </p>
                <p className='mt-2'>
                    This advertisement is a solicitation to sell insurance, and is coming from a licensed health insurance agency, and not from CMS or a government agency.</p>
            </div>
        </div>
    )
}

export default StepForm