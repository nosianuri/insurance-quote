import React from 'react';
import './Cta.css';

const Cta = () => {
  return (
    <div className='lg:mx-28'>
      <div className="cta">
        <div className='lg:mx-36 lg:px-36 mx-5 text-center lg:py-20 py-10 '>
          <h2 className='head-title font-semibold lg:text-5xl text-2xl !leading-tight mb-5'>Get The Coverage You Need And The Protection You Deserve!</h2>
          <p className='my-3'>Ready to get started? Our agents are waiting to help you explore your insurance coverage options.</p>
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
          <p className='lg:text-2xl mt-3 hover:text-[#584FF7]'><a href="tel:18445010362">+1-844-501-0362</a></p>
        </div>
      </div>
    </div>
  )
}

export default Cta