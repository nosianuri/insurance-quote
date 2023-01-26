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
        },
        {
            cateImg: img7,
            cateName: "Auto Insurance",
        },
        {
            cateImg: img3,
            cateName: "Car Insurance",
        },
        {
            cateImg: img9,
            cateName: "Final Expense Insurance",
        },
        {
            cateImg: img5,
            cateName: "Health Insurance",
        },
        {
            cateImg: img1,
            cateName: "Home Insurance",
        },
        {
            cateImg: img6,
            cateName: "Life Insurance",
        },
        {
            cateImg: img2,
            cateName: "Medicare Insurance",
        },
        {
            cateImg: img8,
            cateName: "Motorcycle Insurance",
        },
    ]
  return (
    <>
        <div className='category bg-[#92a3ec] bg-opacity-25'>
        <h1 className='text-center mb-10 text-2xl'>All Category Insurance</h1>
            {data.map((value, index) => {
                return (
                    <div className='box flex' key={index}>
                    <img src={value.cateImg} alt="" />
                    <span>{value.cateName}</span>
                    </div>
                )
            })}
        </div>
    </>
  )
}

export default Categories