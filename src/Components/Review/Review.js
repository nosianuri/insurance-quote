import React from 'react'

const Review = () => {
  return (
    <div className='my-10 mx-5'>
        <div className='lg:flex max-w-5xl mx-auto space-y-5 gap-8 group'>
            <div className='bg-[#3e37b7] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl'>
            <div className='text-center mb-3'>
            <i class="fa-solid fa-file-invoice text-white text-7xl "></i>
            </div>
                <h4 className='head-title uppercase text-xl font-bold text-white'>Top Carriers</h4>
                <p className='text-sm leading-7 my-3 font-light text-white opacity-50'>We've partnered with A+ rated carriers and brought them all into one easy to use platform to help our customers save time and money.</p>
                <a href="/">
                <button className='bg-[#5954b7] text-white py-2.5 px-8 rounded-full'>Learn More</button>
                </a>
            </div>
            <div className='bg-[#3e37b7] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl '>
            <div className='text-center mb-3'>
            <i class="fa-solid fa-arrow-up-right-dots text-white text-7xl "></i>
            </div>
                <h4 className='head-title uppercase text-xl font-bold text-white'>Compare Quotes</h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50 text-white'>View a side by side comparison of quotes that are personalize for you!</p>
                <a href="/">
                <button className='bg-[#5954b7] py-2.5 px-8 rounded-full text-white'>Learn More</button>
                </a>
            </div>
            <div className='bg-[#3e37b7] duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl '>
            <div className='text-center mb-3'>
            <i class="fa-solid fa-sack-dollar text-white text-7xl "></i>
            </div>
                <h4 className='head-title uppercase text-xl font-bold text-white'>Save Time & Money</h4>
                <p className='text-sm leading-7 my-3 font-light opacity-50 text-white'>We've helped thousend of consumers save both time and money by comparing new rates.</p>
                <a href="/">
                <button className='bg-[#5954b7] text-white py-2.5 px-8 rounded-full'>Learn More</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Review