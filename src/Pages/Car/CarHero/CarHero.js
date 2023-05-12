import React from 'react'
import CarForm from './CarForm'

const CarHero = () => {
    return (
        <div style={{
            background: `url(https://i.ibb.co/jR7wjqf/Car-insuarnce.jpg)`
        }} className="bg-no-repeat !bg-cover">
            <div className='lg:px-32 px-5 bg-white bg-opacity-25 lg:pt-0 pt-16'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-center pt-20 '>
                    <div className='head-title lg:py-16 py-5 lg:mx-16 '>
                        <img className='mx-auto mb-5 w-28' src="https://i.ibb.co/R6Rntxm/car-anim.png" alt="" />
                        <h1 className='lg:text-5xl text-[#3e37b7] text-4xl text-center font-semibold'>Car INSURANCE </h1>
                        <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                        </h3>
                    </div>
                    <div>
                        <CarForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarHero