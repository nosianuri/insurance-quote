import React from 'react';
import cta from '../../assets/diff-better-btm-shape.webp';
import './Cta.css';

const Cta = () => {
  return (
    <div className="cta">
      <div className=''>
      <div className='lg:mx-36 lg:px-36 text-center py-28 '>
      <h2 className=' lg:text-5xl text-2xl leading-tight'>Get The Coverage You Need And The Protection You Deserve!</h2>
        <p className='my-3'>Ready to get started? Our agents are waiting to help you explore your insurance coverage options.</p>
        <a href="/">
        <button className='uppercase text-white lg:text-xl font-semibold px-4 py-3 rounded bg-[#daa440] hover:bg-[#584FF7]'>Get a free quote</button>
        </a>
        <a href="tel:18445010362">
        <p className='lg:text-2xl mt-3 hover:text-[#584FF7]'>+1-844-501-0362</p>
        </a>
        
      </div>
      </div>
    </div>
  )
}

export default Cta