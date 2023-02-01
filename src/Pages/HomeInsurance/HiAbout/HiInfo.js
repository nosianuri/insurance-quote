import React from 'react'
import HiInfoCard from './HiInfoCard'

const HiInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Personal Liability Insurance',
            description: 'We offer comprehensive personal liability insurance plans that fit any budget.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Belongings Insurance',
            description: 'Make sure your home insurance policy covers all of your belongings in the event of a loss. Insurance Trendy Quote can offer Replacement Cost Value (RCV) coverage on your contents, which means you will be reimbursed for the cost to replace your lost or damaged belongings.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'House Property Insurance',
            description: 'Your home is one of your most valuable possessions. Don’t wait until it’s too late to get house property insurance. Insurance Trendy Quote offers comprehensive coverage so you can rest easy knowing your home is protected.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Theft & Vandalism Insurance',
            description: 'Insurance Trendy Quote offers Home Living Expenses cover to help you cope financially if your home is damaged or destroyed by fire, burglary, storm damage or other events beyond your control.',
            link: '/aca-insurance',
        },
    ]
    return (
        <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
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