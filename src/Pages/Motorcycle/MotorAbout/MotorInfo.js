import React from 'react'
import MotorInfoCard from './MotorInfoCard'

const MotorInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Basic Coverage',
            description: 'Our basic coverage options ensure you meet the mandatory requirements for motorcycle insurance in British Columbia.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Optional Add-Ons',
            description: 'If you need additional protection, you can add-on to your policy based on your specific needs. Some add-ons include rental vehicle coverage, loss of use, comprehensive, and more.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Liability Insurance',
            description: 'Protect your financial assets if someone experiences personal injury or property damage that is considered your fault.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Flexible Options',
            description: 'At Insurance Trendy Quote, we understand that every client is unique. We offer flexible options to meet your needs and stay within your budget.',
            link: '/aca-insurance',
        },
    ]
    return (
        <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
                {
                    products.map(product => <MotorInfoCard
                        key={product._id}
                        product={product}
                    ></MotorInfoCard>)
                }

            </div>
        </div>
    )
}

export default MotorInfo