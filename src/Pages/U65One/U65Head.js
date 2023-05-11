import React from 'react'
import Button from '../../Components/Shared/Button/Button';
import Logo from '../../assets/trendyquote.png';
import ButtonU65 from '../../Components/Shared/Button/ButtonU65';

const U65Head = () => {
  return (
    <>
    <div className='fixed z-50 w-full shadow-md'>
      <div className='flex items-center justify-between lg:px-16 px-2 py-2 bg-white'>
        <div>
          <a href="/">
            <img className='lg:w-56 w-40' src={Logo} alt="" />
          </a>
        </div>
        <div>
          <ButtonU65 />
        </div>
      </div>
    </div>
  </>
  )
}

export default U65Head