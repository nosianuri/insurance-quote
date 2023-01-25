import React from 'react'
import McFrom from './McFrom'
import medicare from '../../../assets/medicare.jpg'

const McHero = () => {
  return (
    <div style={{
        background: `url(${medicare})`
    }} class="bg-no-repeat !bg-cover">
        <div className='lg:px-32 px-8 bg-black bg-opacity-25'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                <div className='lg:py-16 py-5 lg:mx-16 '>
                    <h1 className='lg:text-5xl text-[#000000] text-4xl text-center font-semibold uppercase'>Medicare INSURANCE </h1>
                    <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                    </h3>

                </div>
                <div>
                    <McFrom />
                </div>
            </div>
        </div>
    </div>
  )
}

export default McHero