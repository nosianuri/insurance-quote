import React from 'react'
import aca from '../../../assets/acawhite_anim.png'
import acabanner from '../../../assets/life-hero.jfif'

const AcaBanner = () => {
    return (
        <div id='top-form' className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:pt-28 md:pt-16 pt-10 justify-center items-center bg-[#201e44]'>
            <div className=' order-2 px-3'>
                <div className='lg:py-5 py-5 lg:mx-16 '>
                    <img className='mx-auto mb-5 w-16 ' src={aca} alt="" />
                    <h1 className='head-title lg:text-4xl md:text-3xl text-white text-3xl text-center font-semibold'>ACA INSURANCE </h1>
                    <h3 className='text-[#cbc8c8] lg:text-lg md:text-lg text-md text-center  leading-tight italic'>Coverage that protects your biggest asset.
                    </h3>
                    <form action="" >
                        <div className='grid lg:grid-cols-2 grid-cols-2 py-5 gap-8'>
                            <div className='space-y-3 mb-3 lg:mb-0'>
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='first_name' placeholder='First Name' />
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='last_name' placeholder='Last Name' />
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='email' placeholder='Email' />
                            </div>
                            <div className='space-y-3'>
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='phone' placeholder='Phone' />
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='address' placeholder='Address' />
                                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='zip' placeholder='ZIP Code' />
                            </div>
                        </div>

                        <div>
                            <textarea className='rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' name="" id="" cols="50" rows="2" placeholder='More details about your claim' ></textarea>
                        </div>
                        <div className='text-center bg-[#2c2c6f] rounded my-5'>
                            <a href="/">
                                <button className='uppercase text-xl py-2 text-white font-semibold'>Get Quotes</button>
                            </a>
                        </div>
                    </form>
                </div>
            </div>
            <div className='lg:order-2'>
                <img src={acabanner} alt="" />
            </div>
        </div>
    )
}

export default AcaBanner