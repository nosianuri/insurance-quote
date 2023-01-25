import React from 'react'

const Categories = () => {
    const data = [
        {
            cateImg: "https://i.ibb.co/2YYrbMZ/rocking-chair.png",
            cateName: "ACA Insurance",
        },
        {
            cateImg: "https://i.ibb.co/qMT5Nyq/building.png",
            cateName: "Auto Insurance",
        },
        {
            cateImg: "https://i.ibb.co/VBRZRFb/windshield.png",
            cateName: "Car Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Final Expense Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Health Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Home Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Life Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Medicare Insurance",
        },
        {
            cateImg: "https://i.ibb.co/fFPkZKm/workspace.png",
            cateName: "Motorcycle Insurance",
        },
    ]
  return (
    <>
        <div className='category'>
        <h1 className='text-center mb-5 text-2xl'>All Category Insurance</h1>
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