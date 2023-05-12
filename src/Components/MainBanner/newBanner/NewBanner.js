import React from 'react'
import homebanner from '../../../assets/insurance-banner.png'
import { BsMouse } from "react-icons/bs";

const NewBanner = () => {
    return (
        <div className=' lg:pt-[100px] pt-[60px] pb-5'>
            <div className='max-w-7xl px-8 mx-auto '>
                <h1 className='lg:text-5xl text-3xl mt-5 font-semibold !leading-normal '>The Insurance Savings You Expect</h1>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:py-12 py-5'>
                    <div className='bg-white shadow-xl border border-grey-500 max-w-[500px] p-5'>
                        <h3 className='lg:text-2xl text-lg font-semibold'>You could save up to 12% when you buy customized car insurance online</h3>
                        <p className='mt-2'>Introducing the Insurance Trendy Quote Personal Price Plan</p>
                        <p className='mt-2'>Start an insurance quote online.</p>
                        <div className='flex my-3 gap-5'>
                            <div className='border border-grey-700 py-4 px-6'>
                                <img src='https://i.ibb.co/x3CVzFQ/car-blue.png' alt="" className='w-12' />
                                <p className='text-center mt-2'>Auto</p>
                            </div>
                            <div className='border border-grey-700 py-4 px-6'>
                                <img src='https://i.ibb.co/99DCXfy/home-green.png' alt="" className='w-12' />
                                <p className='text-center mt-2'>Home</p>
                            </div>
                            <div className='border border-grey-700 py-4 px-6'>
                                <img src='https://i.ibb.co/3sjrLVn/life-red.png' alt="" className='w-12' />
                                <p className='text-center mt-2'>Life</p>
                            </div>
                            <div className='border border-grey-700 py-4 px-6'>
                                <img src='https://i.ibb.co/h1RcJGg/aca-green.png' alt="" className='w-12' />
                                <p className='text-center mt-2'>ACA</p>
                            </div>
                        </div>
                        <a href="#services">
                            <button id='#services' className='my-3 px-5 py-2 text-lg font-semibold bg-[#3e37b7] text-white hover:bg-[#6a63ef] border-none'>See all insurance </button>
                        </a>
                        <p>Or call <a href="tel:18445010362" className='underline hover:underline-none hover:text-[#3e37b7]'>(844) 501-0362</a> for a quote</p>
                    </div>
                    <img src={homebanner} alt="" className='lg:block md:block hidden' />
                </div>
            </div>
            <div className="floating-icon mt-8">
                <a href="#services">
                    <BsMouse color="#7e7bb6" size={25} className="mouse" />
                </a>
            </div>
        </div>
    )
}

export default NewBanner