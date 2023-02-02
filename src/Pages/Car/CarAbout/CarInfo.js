import React from 'react'
import CarInfoCard from './CarInfoCard'

const CarInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Collision',
            description: 'Our classic car insurance policies provide financial protection if your car is in an accident, whether you are at fault or not.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Comprehensive',
            description: 'Comprehensive insurance protects you from damage outside of your collision, including damage from theft, vandalism, or falling objects.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Uninsured/Underinsured Motorist',
            description: 'Get the financial compensation you need to repair or replace your vehicle if you are in an accident with an at-fault driver that is uninsured or underinsured.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Unique Spare Parts',
            description: 'Our classic car insurance policies include add-ons that cover things such as unique spare parts or agreed-upon value.',
            link: '/aca-insurance',
        },
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
                {
                    products.map(product => <CarInfoCard
                        key={product._id}
                        product={product}
                    ></CarInfoCard>)
                }

            </div>
        </div>
  )
}

export default CarInfo