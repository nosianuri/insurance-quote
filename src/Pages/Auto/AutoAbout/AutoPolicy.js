import React from 'react'
import affordable from '../../../assets/affordable.png'
import highquality from '../../../assets/High-Quality.png'
import valuable from '../../../assets/Valuable.png'
const AutoPolicy = () => {
    return (
        <div className='my-5'>
            <h2 className='text-[#201e44] text-2xl font-semibold text-center'>Take Advantage Of The Benefits Of Private Auto Policies With Insurance Trendy Quote</h2>
            <p className='my-5'>Private auto insurance offers the right protection to meet your specific needs. In addition to the popular add-ons, our policies can also include roadside assistance and other VIP perks. With our policies, you can be sure you’ll never be left in a bad situation if your vehicle breaks down.</p>

            <h4 className='text-[#201e44] text-xl text-center font-semibold'>Choose Insurance Trendy Quote Brokers for Your Private Auto Insurance</h4>
            <p className='my-3 text-sm'>Insurance Trendy Quote’s insurance brokers are committed to helping you find the best, most comprehensive private auto coverage. We compare rates from several companies to find the best rates for your unique situation. With Insurance Trendy Quote, you get policies that are:</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-5'>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={affordable} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Affordable</h3>
                    <p className='text-sm mt-2'>Our agents have an extensive professional network that gives us access to the best rates on the market. Trust our team to find you a policy that fits within your budget and meets your requirements.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={highquality} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>High Quality</h3>
                    <p className='text-sm mt-2'>We’re committed to finding you the absolute best in private auto insurance. We work hard to save you money without sacrificing the quality of your coverage.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={valuable} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Valuable</h3>
                    <p className='text-sm mt-2'>At Insurance Trendy Quote, we understand how much your assets mean to you. Our policies protect you financially and give you the peace of mind you deserve.</p>
                </div>
            </div>
        </div>
    )
}

export default AutoPolicy