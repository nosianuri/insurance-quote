import React from 'react'

const Compare = () => {
    return (
        <div className='my-10 mx-5'>
            <div className='lg:flex max-w-5xl mx-auto space-y-5 gap-8 group'>
                <div className=' duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl'>
                    <div className='text-center mb-5'>
                        <i className="fa-solid fa-file-invoice text-[#2d2640] text-7xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-xl font-bold text-[#2d2640]'>Top Carriers</h4>
                    <p className='text-center text-sm leading-7 my-3 font-light text-[#2d2640] '>We've partnered with A+ rated carriers and brought them all into one easy to use platform to help our customers save time and money.</p>
                    <div className='text-center'>
                        <a className='' href="/">
                            {/* <button className='bg-[#453b60] text-white py-2.5 px-8 rounded-full'>Learn More</button> */}
                        </a>
                    </div>

                </div>
                <div className=' duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl '>
                    <div className='text-center mb-5'>
                        <i className="fa-solid fa-arrow-up-right-dots text-[#2d2640] text-7xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-xl font-bold text-[#2d2640]'>Compare Quotes</h4>
                    <p className='text-center text-sm leading-7 my-3 font-light text-[#2d2640]'>View a side by side comparison of quotes that are personalize for you & we value our clients.</p>
                    <div className='text-center'>
                        <a href="/">
                            {/* <button className='bg-[#453b60] py-2.5 px-8 rounded-full text-white'>Learn More</button> */}
                        </a>
                    </div>

                </div>
                <div className=' duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl '>
                    <div className='text-center mb-5'>
                        <i className="fa-solid fa-sack-dollar text-[#2d2640] text-7xl "></i>
                    </div>
                    <h4 className='text-center head-title uppercase text-xl font-bold text-[#2d2640]'>Save Time & Money</h4>
                    <p className='text-center text-sm leading-7 my-3 font-light  text-[#2d2640]'>We've helped thousend of consumers save both time and money by comparing new rates.</p>
                    <div className='text-center'>
                        <a href="/">
                            {/* <button className='bg-[#453b60] text-white py-2.5 px-8 rounded-full'>Learn More</button> */}
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Compare