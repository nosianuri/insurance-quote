import React from 'react';
import hero from '../../assets/Header.webp';

const Hero = () => {
  return (
    <div style={{
        background: `url(${hero})`
      }} class="bg-no-repeat !bg-cover">
      <div className='pt-[250px] px-[100px] pb-[100px]'>
      <h2 className='lg:text-4xl bg-[#584FF7] w-[496px] text-white text-center font-bold py-2'>DO INSURANCE BETTER</h2>
      </div>
        
      </div>
  )
}

export default Hero