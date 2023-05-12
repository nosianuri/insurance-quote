import React, { useState } from 'react'
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Step5 from './Steps/Step5';
import Final from './Steps/Final';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const StepFprm = () => {
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const { register, reset, formState: { errors }, handleSubmit } = useForm();
    const [AllData, setAllData] = useState({});
    const [age, setAge] = useState();
    const [earning, setEarning] = useState();

    const onSubmit = formData => {
        setLoading(true);

        const data = {
            ...AllData,
            phone_number: formData.phone_number,
            email: formData.email,
            age: age,
            earning: earning,
        }
        // console.log(data, "so good");
        if (Object.keys(data).length > 0) {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: "roofing_lead_submitted",
                "data": data,
            })
            console.log("Form Data Pushed!", data)
        }
        else {
            toast.warning("Input fields can't be empty", {
                position: toast.POSITION.TOP_CENTER
            })
        }

        fetch('https://api.insurancetrendyquote.com/api/post-affordable-health', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })

            .then(data => {
                if (data) {
                    toast.success('Successful post data');
                    reset();
                    setLoading(false)
                    // window.dataLayer = window.dataLayer || [];
                    // window.dataLayer.push({
                    //     "message": "Roofing form submitted",
                    //     event: data
                    //   })

                    setPage(page + 1);
                    // console.log(data);
                } else if (data.errors) {
                    toast.error('Something went wrong', data.errors.message);
                    setLoading(false)
                }
                // console.log(data, "response data");
            })
            .catch(error => {
                // console.error(error);
                toast.error(`Error: ${error.message}`);
                setLoading(false);
            });
    }


    const PageDisplay = () => {
        if (page === 0) {
            return <Step1 page={page} setPage={setPage} />;
        } else if (page === 1) {
            return <Step2 page={page} setPage={setPage} age={age} setAge={setAge} />;
        } else if (page === 2) {
            return <Step3 page={page} setPage={setPage} earning={earning} setEarning={setEarning} />;
        } else if (page === 3) {
            return <Step4 page={page} setPage={setPage} AllData={AllData} setAllData={setAllData} />;
        } else if (page === 4) {
            return <Step5 onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} page={page} setPage={setPage} />;
        } else {
            return <Final page={page} setPage={setPage} onSubmit={onSubmit} setAllData={setAllData} AllData={AllData} />;
        }
    };
    return (
        <div className='sm:w-[800px] mx-auto border'>
            <div className='bg-[#EEE] py-10'>
                <h1 className='text-4xl font-extrabold text-center'>Great News!</h1>
                <p className='font-medium text-xl text-center mt-2'>Congress made it easier for Americans to qualify for discounted health insurance!</p>
            </div>
            <div className='mx-auto rounded-2xl text-gray-900'>

                <div className="progressbar">
                    <div style={{ width: page === 0 ? "0%" : page == 1 ? "40%" : page == 2 ? "55%" : page == 3 ? "65%" : page == 4 ? "75%" : page == 5 ? "100%" : "100%" }}
                    ></div>
                </div>
                <div className="sm:w-[600px] mx-auto ">
                    <div className="form-container pb-5 sm:px-10 px-3 ">
                        <div className="body ">{PageDisplay()}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StepFprm