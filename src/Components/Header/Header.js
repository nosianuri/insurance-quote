import React from 'react';
import Logo from '../../assets/Insuranc.png';
import Button from '../Shared/Button/Button';

const Header = () => {
  return (
    <div className='flex items-center justify-between lg:px-16 px-2 py-2'>
        <div>
            <img className='lg:w-56 w-40' src={Logo} alt="" />
        </div>
        <div>
            <Button />
        </div>
    </div>
  )
}

export default Header