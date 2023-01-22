import React from 'react';
import cta from '../../assets/cta_bg.webp';

const Cta = () => {
  return (
    <div style={{
        background: `url(${cta})`
      }} className="bg-no-repeat !bg-cover">
      <div className='bg-black bg-opacity-25'>
      <div className='lg:mx-36 lg:px-36 text-center py-28 '>
      <h2 className='text-white text-5xl leading-tight'>Get The Coverage You Need And The Protection You Deserve!</h2>
        <p className='text-white  my-3'>Ready to get started? Our agents are waiting to help you explore your insurance coverage options.</p>
        <a href="/">
        <button className='uppercase text-white text-xl font-semibold px-4 py-3 rounded bg-[#daa440] hover:bg-[#584FF7]'>Get a free quote</button>
        </a>
        <a href="/">
        <p className='text-white text-2xl mt-3 hover:text-[#F0BC5E]'>+1-844-501-0362</p>
        </a>
        
      </div>
      </div>
    </div>
  )
}

export default Cta