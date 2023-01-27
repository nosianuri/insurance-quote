import React from 'react'

const AcaForm = () => {
  return (
    <div id='top-form' className='mb-16 bg-[#f0f0f0] border-8 border-[#f0f0f0] shadow-xl lg:my-16'>
    <div className='p-5 '>
        <div className='bg-[#3e37b7] lg:px-10 px-2 rounded-t-xl text-white py-3' id="page-form">
            <h2 className='text-center lg:text-xl'>FILL OUT THE FORM BELOW</h2>
            <h5 className='text-center lg:text-2xl text-xl'>TO GET YOUR FREE CLAIM REVIEW</h5>
            <p className='text-center lg:text-xl'>You may be entitled to <span className='underline'>financial compensation!</span></p>
        </div>
        <div className='grid lg:grid-cols-2 grid-cols-1 py-5 lg:gap-8'>
            <div className='space-y-3 mb-3 lg:mb-0'>
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='first_name' placeholder='First Name' />
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='last_name' placeholder='Last Name' />
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='email' placeholder='Email' />
            </div>
            <div className='space-y-3'>
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='phone' placeholder='Phone' />
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='address' placeholder='Address' />
                <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' type="text" name='zip' placeholder='ZIP' />
            </div>
        </div>
        <div className='lg:w-full w-full h-[1px] bg-gray-300'></div>
        
        <div className='lg:px-10 mt-3'>
            <textarea className='rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#3e37b7]' name="" id="" cols="50" rows="2" placeholder='More details about your claim' ></textarea>
        </div>
        <div className='text-center bg-[#3e37b7] rounded my-5'>
            <a href="/">
                <button className='uppercase text-xl py-2 text-white font-bold'>Get Quotes</button>
            </a>
        </div>
        
    </div>
</div>
  )
}

export default AcaForm