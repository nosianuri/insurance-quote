import React from 'react';
import hero from '../../assets/Header.webp';

const Hero = () => {
  return (
    <div style={{
      background: `url(${hero})`
    }} className="bg-no-repeat !bg-cover">
      <div className='lg:pt-[250px] pt-[150px] lg:px-[100px] px-[30px] pb-[100px]'>
        <h2 className='lg:text-4xl bg-[#2d2640] lg:w-[496px] w-[296px] text-white text-center font-bold py-2'>DO INSURANCE BETTER</h2>
      </div>

    </div>
  )
}

export default Hero