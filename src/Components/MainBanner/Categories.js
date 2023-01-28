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

const Categories = () => {
    const data = [
        {
            cateImg: img4,
            cateName: "ACA Insurance",
            link: "/aca-insurance",
        },
        {
            cateImg: img7,
            cateName: "Auto Insurance",
            link: "/auto-insurance",
        },
        {
            cateImg: img3,
            cateName: "Car Insurance",
            link: "/car-insurance",
        },
        {
            cateImg: img9,
            cateName: "Final Expense Insurance",
            link: "/finalexpense-insurance",
        },
        {
            cateImg: img5,
            cateName: "Health Insurance",
            link: "/health-insurance",
        },
        {
            cateImg: img1,
            cateName: "Home Insurance",
            link: "/home-insurance",
        },
        {
            cateImg: img6,
            cateName: "Life Insurance",
            link: "/life-insurance",
        },
        {
            cateImg: img2,
            cateName: "Medicare Insurance",
            link: "/medicare-insurance",
        },
        {
            cateImg: img8,
            cateName: "Motorcycle Insurance",
            link: "/motorcycle-insurance",
        },
    ]
  return (
    <>
        <div className='category bg-[#92a3ec] bg-opacity-25'>
        <h1 className='text-center mb-5 text-2xl'>All Category Insurance</h1>
            {data.map((value, index) => {
                return (
                    <div className='box flex' key={index}>
                    <img src={value.cateImg} alt="" />
                    <span><a href={value.link}>{value.cateName}</a></span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Categories