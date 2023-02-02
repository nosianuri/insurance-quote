import React from 'react'
import FeInfoCard from './FeInfoCard'

const FeInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Affordable Rates',
            description: 'Final expense insurance offers affordable, fixed premiums that do not change over time.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Builds Cash Value',
            description: 'Our final expense insurance plans build cash value – a sum of money that can be used to borrow against or use it as a non-forfeiture benefit.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Lifetime Coverage',
            description: 'Your final expense insurance coverage remains in place as long as your premiums are paid up.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Payment Mode Flexibility',
            description: 'We offer flexible payment options or you can align your payment with your Social Security deposit.',
            link: '/aca-insurance',
        },
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
        {
            products.map(product => <FeInfoCard
                key={product._id}
                product={product}
            ></FeInfoCard>)
        }

    </div>
</div>
  )
}

export default FeInfo