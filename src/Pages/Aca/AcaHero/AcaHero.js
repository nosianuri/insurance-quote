import React from 'react'
import AcaForm from './AcaForm'
import aca from '../../../assets/aca1.jpg'

const AcaHero = () => {
    return (
        <div style={{
            background: `url(https://i.ibb.co/RhM1K2m/ACA.jpg)`
        }} className="bg-no-repeat !bg-cover">
            <div className='lg:px-32 px-5 bg-white bg-opacity-25 lg:pt-0 pt-16'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center justify-center pt-20'>
                    <div className='lg:py-16 py-5 lg:mx-16 '>
                        <img className='mx-auto mb-5 w-28' src="https://i.ibb.co/x3KZrhG/aca-anim.png" alt="" />
                        <h1 className='head-title lg:text-5xl  text-4xl text-center font-semibold uppercase text-[#3e37b7]'>ACA INSURANCE </h1>
                        <h3 className='text-[#000000] lg:text-[35px] text-2xl text-center my-5 leading-tight font-semibold'>Coverage that protects your biggest asset.
                        </h3>
                    </div>
                    <div>
                        <AcaForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcaHero