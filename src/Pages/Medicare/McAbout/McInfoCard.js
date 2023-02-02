import React from 'react'

const McInfoCard = (props) => {
    const { name, description } = props.product;
  return (
    <div className=' '>
    <div className=' bg-white rounded-lg shadow-md hover:shadow-2xl w-full m-2 overflow-hidden border-4 border-white border-b-[#2d2640]'>
        <h2 className='head-title text-center px-2 font-bold text-xl mb-2'>{name}</h2>
        <p className='text-sm text-center px-2 pb-5'>{description}</p>
    </div>
</div>
  )
}

export default McInfoCard