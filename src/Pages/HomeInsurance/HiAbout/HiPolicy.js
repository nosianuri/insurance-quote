import React from 'react'
import home from '../../../assets/home insurance.png'
import tenant from '../../../assets/tenant insurance.png'
import condo from '../../../assets/conso.png'

const HiPolicy = () => {
    return (
        <div className='my-5'>
            <h2 className='text-2xl font-semibold text-[#201e44] text-center'>Protect One Of Your Most Valuable Assets- Your Home- By A Proper Home Insurance</h2>
            <p className='my-5'>We understand that everyone has different requirements when it comes to their insurance needs and strive to simplify the process by helping you find the perfect coverage for your home or property. In addition to basic coverage, we offer a range of add-ons that can help further protect one of your most valuable assets. This includes additional coverage such as fire protection and flood insurance, as well as liability defense and peace of mind features like personal injury protection and identity theft coverage.</p>

            <h4 className='text-xl text-center font-semibold text-[#201e44]'>Finding house insurance that fits your needs and budget, We are near you!</h4>
            <p className='my-3 text-sm'>We understand the importance of finding a policy that fits your budget while also providing the coverage you need. That’s why we work with a network of specialized insurance brokers who have access to some of Canada’s most trusted and financially stable insurance companies partners.</p>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 mt-5'>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={home} alt="" />
                    <h3 className='font-semibold text-[#201e44] mt-2'>Home Insurance</h3>
                    <p className='text-sm mt-2'>Get comprehensive protection for your home, valuables, and your family.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={tenant} alt="" />
                    <h3 className='font-semibold text-[#201e44] mt-2'>Tenant Insurance</h3>
                    <p className='text-sm mt-2'>Protect your valuables and meet rental contract demands with tenant insurance coverage.</p>
                </div>
                <div className='text-center'>
                    <img className='w-12 mx-auto' src={condo} alt="" />
                    <h3 className='font-semibold text-[#201e44] mt-2'>Condo Insurance</h3>
                    <p className='text-sm mt-2'>Get the insurance coverage you need for the unique requirements of condo living.</p>
                </div>
            </div>
        </div>
    )
}

export default HiPolicy