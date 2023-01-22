import React from 'react';
import Logo from '../../assets/Insuranc.png';
import Button from '../Shared/Button/Button';

const Header = () => {
  return (
    <div className='flex align-middle items-center justify-between px-16 py-2'>
        <div>
            <img className='w-56' src={Logo} alt="" />
        </div>
        <div>
            <Button />
        </div>
    </div>
  )
}

export default Header