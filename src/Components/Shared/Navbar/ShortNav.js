import React from 'react'
import Nav from './Nav'

const ShortNav = () => {
    return (
        <header className='bg-[#2d2640] text-white lg:px-16 shadow-2xl'>
            <div className="flex justify-center">
                <Nav />     
            </div>
        </header>
    )
}

export default ShortNav