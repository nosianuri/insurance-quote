import React from 'react';
import './Cta.css';
import cta from '../../assets/gosip_anim.png'

const Cta = () => {
  return (
    <div className='bg-[#201e44] max-w-7xl  mx-auto'>
      <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-center shadow-xl'>
        <div className='text-center px-10 my-5 order-2' >
          <h2 className='head-title font-semibold lg:text-3xl text-xl !leading-tight mb-3 text-white' data-aos='fade-down' data-aos-delay='500'>Get The Coverage You Need And The Protection You Deserve!</h2>
          <p className='my-3 text-white lg:text-md ' data-aos='fade-right' data-aos-delay='500'>Ready to get started? Our agents are waiting to help you explore your insurance coverage options.</p>
          <a href="/#get-quote" >
            <button
              padding="10px 15px"
              size="lg"
              border-color="#e64100"
              border-radius="5px"
              width="100%"
              fontSize="18px"
              margin="0px auto 20px auto"
              variant="outline-light"
              id="service-btn" data-aos='fade-left' data-aos-delay='500'>Get a free quote</button>
          </a>
          {/* <p className='lg:text-2xl font-bold mt-3 text-white hover:text-[#2d2640]'><a href="tel:18445010362">(844) 501-0362
          </a></p> */}
        </div>
        <div className='lg:order-2 image-box'>
          <img className='lg:order-last ' src={cta} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cta