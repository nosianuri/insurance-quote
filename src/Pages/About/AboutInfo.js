import React from 'react'
import AboutInfoCard from './AboutInfoCard'

const AboutInfo = () => {
    const products = [
        {
            _id: 1,
            name: 'Choice',
            description: 'As an independent insurance agency we have great relationships with many well-known, reputable insurance companies, giving you the power of choice.',
            link: '/home-insurance',

        },
        {
            _id: 2,
            name: 'Expertise',
            description: 'Our insurance professionals have years of experience in the insurance industry and serve as your advocate from selecting coverage through filing a claim.',
            link: '/medicare-insurance',
        },
        {
            _id: 3,
            name: 'Service',
            description: 'As a Trusted Choice independent agency we have many insurance companies to work with and a pledge of service that we take very seriously.',
            link: '/car-insurance',
        },
        
    ]
  return (
    <div className=' lg:mt-5 md:mt-5 mt-3' id='get-quote'>
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 justify-center items-center '>
        {
            products.map(product => <AboutInfoCard
                key={product._id}
                product={product}
            ></AboutInfoCard>)
        }

    </div>
</div>
  )
}

export default AboutInfo