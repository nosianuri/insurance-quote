import React from 'react'

const CompareCard = () => {
    return (
        <div className='my-10 lg:mx-32 mx-16'>
            <div className='grid lg:grid-cols-2 grid-cols-1 max-w-7xl mx-auto justify-center items-center border-2 border-l-[#e3e3e3] shadow-xl'>
                <div className='text-center'>
                    <h2 className='lg:text-3xl text-2xl text-[#201e44] inline-block font-semibold align-middle'>Insure today, be sure tomorrow.</h2>
                </div>
                <div className='lg:flex md:flex '>
                    <div className='p-5 border border-white border-l-[#e3e3e3] align-middle'>
                        <div className='mt-5'>
                            <div className='text-center mb-5'>
                                <i class="fa-solid fa-file-invoice text-[#201e44] text-5xl "></i>
                            </div>
                            <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'><a className='hover:text-[#1565c0]' href="/about-us">TOP CARRIERS</a></h4>
                        </div>
                    </div>
                    <div className='p-5 border border-white border-l-[#e3e3e3]'>
                        <div className='mt-5'>
                            <div className='text-center mb-5'>
                                <i class="fa-solid fa-arrow-up-right-dots text-[#201e44] text-5xl "></i>
                            </div>
                            <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'><a className='hover:text-[#1565c0]' href="/about-us">Compare Quotes</a></h4>
                        </div>
                    </div>
                    <div className='p-5  border border-white border-l-[#e3e3e3]'>
                        <div className='mt-5'>
                            <div className='text-center mb-5'>
                                <i class="fa-solid fa-sack-dollar text-[#201e44] text-5xl "></i>
                            </div>
                            <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'><a className='hover:text-[#1565c0]' href="/about-us">Save Time & Money</a></h4>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CompareCard