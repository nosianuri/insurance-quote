import React from 'react'
import experience from '../../../assets/experience.png'
import commitment from '../../../assets/commitment.png'
import value from '../../../assets/value.png'

const MediCarePolicy = () => {
    return (
        <div className='my-5'>
            <h2 className='text-[#201e44] text-2xl font-semibold text-center'>Shop Our Medicare Insurance Policies With Our Specialized Insurance Brokers</h2>
            <p className='my-5'>For many, buying Medicare insurance is a tough and complicated process, and it’s okay to feel overwhelmed when looking for the right policy. Take your time when considering how much Medicare insurance is necessary for you and which policy is best for your family.</p>
            <p className='mb-5'>BC Medicare insurance policies cover many different scenarios that you may or may not be interested in, so it’s crucial to review your options carefully with someone who knows Medicare insurance in British Columbia extensively. At Insurance Trendy Quote, our brokers can help you find the right policy for your unique needs.</p>
            <h4 className='text-[#201e44] text-xl text-center font-semibold'>Choose Insurance Trendy Quote Broker for Your Medicare Insurance</h4>
            <p className='my-3 text-sm'>If you’re still on the fence about whether to buy Medicare insurance, you’re not alone. We know it’s not an easy decision to make. That’s why we work hard to be the insurance company you can trust to find the right protection for your needs. Our team offers the following advantages when working with you to find the right policy:</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 my-5'>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={experience} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Experience</h3>
                    <p className='text-sm mt-2'>Our agents have extensive experience working with individuals and families across all industries to provide the right coverage for your protection.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={commitment} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Commitment</h3>
                    <p className='text-sm mt-2'>We’re committed to finding you the most affordable rates and work hard to ensure you get the coverage you need at a price you can afford.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={value} alt="" />
                    <h3 className='text-[#201e44] font-semibold mt-2'>Value</h3>
                    <p className='text-sm mt-2'>At Insurance Trendy Quote, we understand how much your assets mean to you and how hard you’ve worked to build a Medicare for your family. Our policies protect you financially and give you the peace of mind you deserve.</p>
                </div>
            </div>
        </div>
    )
}

export default MediCarePolicy