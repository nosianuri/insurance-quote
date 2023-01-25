import React from 'react'
import HiForm from './HiForm'
import home from '../../../assets/house-scaled.webp';

const HiHero = () => {
    return (
        <div style={{
            background: `url(${home})`
        }} class="bg-no-repeat !bg-cover">
            <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='lg:py-16 py-5 lg:mx-16 '>
                        <h1 className='lg:text-5xl text-[#000000] text-4xl text-center font-semibold'>HOME INSURANCE </h1>
                        <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                        </h3>

                    </div>
                    <div>
                        <HiForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HiHero