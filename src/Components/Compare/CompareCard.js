import React from 'react'

const CompareCard = () => {
    return (
        <div className='my-10 mx-32'>
            <div className='lg:flex max-w-7xl mx-auto justify-center items-center'>
                <div className='p-16 border-2 border-l-[#e3e3e3] '>
                    <h2 className='text-3xl inline-block align-middle'>Insure today, be sure tomorrow.</h2>
                </div>
                <div className='p-5 h-[165px] border-2 border-l-[#e3e3e3] align-middle'>
                    <div className='mt-5'>
                    <div className='text-center mb-5'>
                        <i class="fa-solid fa-file-invoice text-[#2d2640] text-5xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'>Top Carriers</h4>
                    </div>
                </div>
                <div className='p-5 h-[165px] border-2 border-l-[#e3e3e3] '>
                   <div className='mt-5'>
                   <div className='text-center mb-5'>
                        <i class="fa-solid fa-arrow-up-right-dots text-[#2d2640] text-5xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'>Compare Quotes</h4>
                   </div>
                </div>
                <div className='p-5 h-[165px] border border-l-[#e3e3e3]'>
                    <div className='mt-5'>
                    <div className='text-center mb-5'>
                        <i class="fa-solid fa-sack-dollar text-[#2d2640] text-5xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-lg font-bold text-[#2d2640]'>Save Time & Money</h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CompareCard