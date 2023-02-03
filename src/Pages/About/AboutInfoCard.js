import React from 'react'

const AboutInfoCard = (props) => {
    const { name, description, img } = props.product;
  return (
    <div>
    <div className='bg-white rounded-lg shadow-md hover:shadow-2xl w-full m-2 overflow-hidden border-4 border-white border-b-[#2d2640]'>
    <img className='w-12 mx-auto' src={img} alt="" />
        <h2 className='text-[#201e44] head-title text-center px-2 font-bold text-xl my-2'>{name}</h2>
        <p className='text-sm text-center px-2 pb-5'>{description}</p>
    </div>
</div>
  )
}

export default AboutInfoCard