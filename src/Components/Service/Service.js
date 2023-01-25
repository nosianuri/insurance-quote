import React from 'react'
import { products } from '../Shared/data';
import img1 from '../../assets/building.png';
import img2 from '../../assets/workspace.png';
import img3 from '../../assets/rocking-chair.png';
import img4 from '../../assets/windshield.png';
import img5 from '../../assets/windshield.png';
import img6 from '../../assets/windshield.png';
import img7 from '../../assets/windshield.png';
import img8 from '../../assets/windshield.png';
import img9 from '../../assets/windshield.png';
import Services from './Services';

const Service = () => {
    const products = [
        {
            _id: 1,
            name: 'Home Insurance',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/home-insurance',
            img: img1
        },
        {
            _id: 2,
            name: 'Medicare',
            description: 'As a rental property owner, you work hard to maintain your properties and use them as a source of income. You need to protect your assets with an insurance company that has your back, from property damages to personal injury.',
            link: '/medicare-insurance',
            img: img2
        },
        {
            _id: 3,
            name: 'Car Insurance',
            description: 'Classic and antique cars are unique assets. Since they are investments you can also drive for pleasure, its essential to have comprehensive coverage in case of an unfortunate accident.',
            link: '/car-insurance',
            img: img3
        },
        {
            _id: 4,
            name: 'ACA',
            description: 'Home insurance provides you with financial support in the event of damage to tour home; damage to, or theft and claims of liability made against you.',
            link: '/aca-insurance',
            img: img4
        },
        {
            _id: 5,
            name: 'Health Insurance- Under 65',
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
        <div className='lg:mx-36 lg:my-16'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 pl-5'>
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