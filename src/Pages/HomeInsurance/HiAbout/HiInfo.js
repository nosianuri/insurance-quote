import React from 'react'
import HiInfoCard from './HiInfoCard'

const HiInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Home Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you that determine Home Insurance rates.',
            link: '/home-insurance',
            
        },
        {
            _id: 2,
            name: 'Medicare Insurance',
            description: 'As a rental property owner, you work hard to maintain your properties and use them as a source of income. Also You need to protect your assets with an insurance company. ',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Car Insurance',
            description: 'Classic and antique cars are unique assets. Since they are investments you can also drive for pleasure, it’s essential to have comprehensive coverage in case of an unfortunate accident.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'ACA Insurance',
            description: 'Make affordable health insurance available to more people. The Patient Protection and Affordable Care Act, referred to as the Affordable Care Act or “ACA” for short.',
            link: '/aca-insurance',
        },
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='flex justify-center items-center '>
                {
                    products.map(product => <HiInfoCard
                        key={product._id}
                        product={product}
                    ></HiInfoCard>)
                }

            </div>
        </div>
  )
}

export default HiInfo