import React from 'react'
import AutoInfoCard from './AutoInfoCard'

const AutoInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Basic Auto Plan',
            description: 'Basic auto policies through AMC Insurance meet British Columbia insurance requirements.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'ICBC Optional Insurance',
            description: 'ICBC optional products allow you to choose from various levels of protection for your auto needs.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Private Insurance',
            description: 'Non-ICBC optional products are also available to meet your needs and help you find premium rates you can afford.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Comprehensive Coverage',
            description: 'Add comprehensive coverage to any policy to help protect your vehicle from risks beyond on-road collisions.',
            link: '/aca-insurance',
        },
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
                {
                    products.map(product => <AutoInfoCard
                        key={product._id}
                        product={product}
                    ></AutoInfoCard>)
                }

            </div>
        </div>
  )
}

export default AutoInfo