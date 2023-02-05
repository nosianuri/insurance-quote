import React from 'react';
import Logo from '../../assets/trendyquote.png';
import Button from '../Shared/Button/Button';
import ShortNav from '../Shared/Navbar/ShortNav';

const Header = () => {
  return (
    <>
      <div className='fixed z-50 w-full'>
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
        <ShortNav />
      </div>
    </>
  )
}

export default Header