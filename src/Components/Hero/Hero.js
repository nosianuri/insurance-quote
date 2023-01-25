import React from 'react';
import hero from '../../assets/Header.webp';

const Hero = () => {
  return (
    <div style={{
        background: `url(${hero})`
      }} class="bg-no-repeat !bg-cover">
      <div className='lg:pt-[250px] lg:px-[100px] lg:pb-[100px]'>
      <h2 className='lg:text-4xl bg-[#584FF7] lg:w-[496px] w-full text-white text-center font-bold py-2'>DO INSURANCE BETTER</h2>
      </div>
        
      </div>
  )
}

export default Hero