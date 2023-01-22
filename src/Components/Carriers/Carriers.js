import React from 'react';
import img1 from '../../assets/21st.png';
import img2 from '../../assets/allstate.png';
import img3 from '../../assets/liberty_mutual_new.jpg';
import img4 from '../../assets/nationwide.png';
import img5 from '../../assets/progressive.png';

const Carriers = () => {
  return (
    <div className='my-16 '>
        <h2 className='text-center text-4xl font-semibold'>Insurance Carriers include</h2>
        <div className='flex justify-center items-center '>
            <img className='w-52' src={img1} alt="" />
            <img className='w-52' src={img2} alt="" />
            <img className='w-52' src={img3} alt="" />
            <img className='w-52' src={img4} alt="" />
            <img className='w-52' src={img5} alt="" />
        </div>
    </div>
  )
}

export default Carriers