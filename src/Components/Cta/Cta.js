import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <div style={{
      background: `url(https://i.ibb.co/CBZBZnp/final-expense.jpg)`
  }} class="bg-no-repeat !bg-cover">
      <div className="">
        <div className='max-w-7xl mx-auto px-12 lg:px-36  text-center lg:py-20 py-10 '>
          <h2 className='head-title font-semibold lg:text-5xl text-2xl !leading-tight mb-5'>Get The Coverage You Need And The Protection You Deserve!</h2>
          <p className='my-3 font-semibold'>Ready to get started? Our agents are waiting to help you explore your insurance coverage options.</p>
          <a href="/#get-quote">
            <button 
              padding="10px 15px"
              size="lg"
              border-color="#e64100"
              border-radius="5px"
              width="100%"
              fontSize="18px"
              margin="0px auto 20px auto"
              variant="outline-light"
              id="action-btn">Get a free quote</button>
          </a>
          <p className='lg:text-2xl font-bold mt-3 hover:text-[#2d2640]'><a href="tel:18445010362">(844) 501-0362


</a></p>
        </div>
      </div>
    </div>
  )
}

export default Cta