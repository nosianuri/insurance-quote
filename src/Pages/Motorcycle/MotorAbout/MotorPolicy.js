import React from 'react'
import affordable from '../../../assets/affordable.png'
import highquality from '../../../assets/High-Quality.png'
import valuable from '../../../assets/Valuable.png'

const MotorPolicy = () => {
    return (
        <div className='my-5'>
            <h2 className='text-[#201e44] text-2xl font-semibold text-center'>Take Advantage Of The Benefits Of Motorcycle Policies With Insurance Trendy Quote</h2>
            <p className='my-5'>Canada is a true motorcyclist’s dream. From coast to coast, there are unique and beautiful riding experiences that can only be fully experienced on the back of a motorcycle. However, these paths come with challenges. Safety should always be a key concern anytime you get on your bike.</p>
            <p className='mb-5'>Unfortunately, no amount of caution can prepare motorcyclists for the poor choices of a reckless driver. The good news is that we are available 24/7 to help with claims. Plus, we have access to many insurance providers to ensure you get the best coverage.</p>
            <h4 className='text-[#201e44] text-xl text-center font-semibold'>Choose Insurance Trendy Quote Broker for Your Motorcycle Insurance</h4>
            <p className='my-3 text-sm'>Insurance Trendy Quote’s insurance brokers are committed to helping you find the best, most comprehensive motorcycle coverage. We compare rates from several companies to find the best rates for your unique situation. With Insurance Trendy Quote, you get policies that are:</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5'>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={affordable} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Affordable</h3>
                    <p className='text-sm mt-2'>Our agents have an extensive professional network that gives us access to the best rates on the market. We provide the right coverage for your financial protection.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={highquality} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>High-Quality</h3>
                    <p className='text-sm mt-2'>We’re committed to finding you the absolute best in motorcycle insurance. We work hard to save you money without sacrificing the quality of your coverage.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={valuable} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Valuable</h3>
                    <p className='text-sm mt-2'>At Insurance Trendy Quote, we understand how much your assets mean to you. You’ve worked hard to afford a motorcycle and want to maintain it for your enjoyment. Our policies protect you financially and give you the peace of mind you deserve.</p>
                </div>
            </div>
        </div>
    )
}

export default MotorPolicy