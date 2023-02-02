import React from 'react'
import AcaInfoCard from './AcaInfoCard'

const AcaInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Mortgage Protection',
            description: 'Our mortgage protection policies are designed to pay off your mortgage if you pass away unexpectedly.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Critical Illness Insurance',
            description: 'An insurance policy for critical illnesses protects the insured from fatal critical illnesses like cancer, heart attacks, renal failure, etc.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Disability Insurance',
            description: 'Disability insurance is a type of insurance plan product that affords income in the event that a policyholder is prevent from working and earning an profits due to a disability.',
            link: '/car-insurance',
        },
        {
            _id: 4,
            name: 'Health & Dental Insurance',
            description: 'Health and dental insurance can significantly minimize your out-of-pocket expenses for prescription drugs, vision care, registered therapists like chiropractors, as well as visits to the dentist for preventive and corrective dental treatments.',
            link: '/aca-insurance',
        },
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
                {
                    products.map(product => <AcaInfoCard
                        key={product._id}
                        product={product}
                    ></AcaInfoCard>)
                }

            </div>
        </div>
  )
}

export default AcaInfo