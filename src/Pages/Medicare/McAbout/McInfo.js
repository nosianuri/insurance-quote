import React from 'react'
import McInfoCard from './McInfoCard'

const McInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Term Life Insurance',
            description: 'Term life insurance is the simplest, most affordable policy. It covers you for a period of time-typically between 10 and 30 years- and you pay an affordable premium for coverage. Most term policies can be converted to whole life policies in the future.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Whole Life Insurance',
            description: 'Protect your family and build cash value with a whole life insurance policy. These permanent policies build cash over time. As long as your premiums remain current, these policies last for the life of the policyholder.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Universal Life Insurance',
            description: 'Universal life insurance is another type of permanent life insurance. Our policies cover you for the duration of your life as long as you pay the premiums and fulfill all requirements of maintaining your coverage.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Key Person & Group life Insurance',
            description: 'Key person protection is extra security as well as disease protection on a vital representative of a business. Group life insurance plan is provided by means of an corporation or different large-scale entity such an affiliation or labor organization to its employees or members.',
            link: '/aca-insurance',
        },
    ]
    return (
        <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
                {
                    products.map(product => <McInfoCard
                        key={product._id}
                        product={product}
                    ></McInfoCard>)
                }

            </div>
        </div>
    )
}

export default McInfo