import React from 'react'
import Button from '../Shared/Button/Button'
import Logo from '../../assets/trendyquote.png';

const TopHead = () => {
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
          <Button />
        </div>
      </div>
    </div>
  </>
  )
}

export default TopHead