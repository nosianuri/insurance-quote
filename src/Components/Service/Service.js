import React from 'react'
import img1 from '../../assets/home_anim.png';
import img2 from '../../assets/medicare_anim.png';
import img3 from '../../assets/car_anim.png';
import img4 from '../../assets/aca_anim.png';
import img5 from '../../assets/health_anim.png';
import img6 from '../../assets/life_anim.png';
import img7 from '../../assets/auto_anim.png';
import img8 from '../../assets/motorcycle_anim.png';
import img9 from '../../assets/money_anim.png';
import Services from './Services';

const Service = () => {
    const products = [
        {
            _id: 1,
            name: 'Home Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you that determine Home Insurance rates.',
            link: '/home-insurance',
            img: img1
        },
        {
            _id: 2,
            name: 'Medicare Insurance',
            description: 'As a rental property owner, you work hard to maintain your properties and use them as a source of income. Also You need to protect your assets with an insurance company. ',
            link: '/medicare-insurance',
            img: img2
        },
        {
            _id: 3,
            name: 'Car Insurance',
            description: 'Classic and antique cars are unique assets. Since they are investments you can also drive for pleasure to have comprehensive coverage in case of an unfortunate accident.',
            link: '/car-insurance',
            img: img3
        },
        {
            _id: 4,
            name: 'ACA Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/aca-insurance',
            img: img4
        },
        {
            _id: 5,
            name: 'Health Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/health-insurance',
            img: img5
        },
        {
            _id: 6,
            name: 'Life insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/life-insurance',
            img: img6
        },
        {
            _id: 7,
            name: 'Auto Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/auto-insurance',
            img: img7
        },
        {
            _id: 8,
            name: 'Motorcycle Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/motorcycle-insurance',
            img: img8
        },
        {
            _id: 9,
            name: 'Final Expense Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/finalexpense-insurance',
            img: img9
        },
        
    ]
    return (
        <div className='lg:mx-36 mx-5 lg:my-16 my-5'>
        <div className='text-center mb-10'>
            <h1 className='font-semibold lg:text-5xl text-2xl mb-5'>Joining Forces to Bring You Better Insurance</h1>
            <p>Are you looking for insurance with better coverage, better prices, or just better service? We’ve got you covered!</p>
            <p>Let us help you find the right auto, home, life and commercial insurance.</p>
            <p>We represent numerous insurance companies to find you the best coverage and the best rate.</p>
        </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 lg:pl-5'>
        {
            products.map(product => <Services
             key={product._id}
             product={product}
             ></Services>)
        }
            
        </div>
        </div>
    )
}

export default Service