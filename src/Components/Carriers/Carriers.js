import React from 'react';
import img1 from '../../assets/21st.png';
import img2 from '../../assets/allstate.png';
import img3 from '../../assets/liberty_mutual_new.jpg';
import img4 from '../../assets/nationwide.png';
import img5 from '../../assets/progressive.png';

const Carriers = () => {
  return (
    <div className='my-16 '>
      <h2 className='head-title text-center lg:text-4xl text-2xl font-semibold mb-8'>Insurance Carriers include</h2>
      <div className='flex justify-center items-center lg:mb-8'>
        <img className='lg:w-52 w-16' src={img1} alt="" />
        <img className='lg:w-52 w-16' src={img2} alt="" />
        <img className='lg:w-52 w-16' src={img3} alt="" />
        <img className='lg:w-52 w-16' src={img4} alt="" />
        <img className='lg:w-52 w-16' src={img5} alt="" />
      </div>
      {/* <p className='text-center mx-5'><span className='text-xs text-[#584FF7] hover:underline'><a href="/privacy-policy">Privacy Policy</a></span> | <span className='text-xs text-[#584FF7] hover:underline'><a href="/terms&use">Terms of Use</a></span> | <span className='text-xs text-[#584FF7] hover:underline'><a href="/">Do not sell my personal information</a></span> | <span className='text-xs text-[#584FF7] hover:underline'><a href="/">California Privacy Choices</a></span> | <span className='text-xs text-[#584FF7] hover:underline'><a href="/">Cookies and Other Technology</a></span></p>
      <p className='text-center lg:text-md text-xs my-3'>2582 So Songbird Cir</p> */}
    </div>
  )
}

export default Carriers