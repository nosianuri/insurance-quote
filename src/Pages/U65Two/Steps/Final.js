import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';

const Final = () => {
  const [seconds, setSeconds] = useState(120);
  const [finished, setFinished] = useState(false);
  const timerRef = useRef(null);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(timerRef.current);
      setFinished(true);
      setIsTimeUp(true);
    }
  }, [seconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60).toString().padStart(2, '0');
    const seconds = (time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  return (
    <div className='max-w-7xl mx-auto'>
      {finished ? (
        <div className='text-center'>
          {isTimeUp && <div><Confetti /></div>}
          <h1 className='sm:text-4xl text-3xl font-extrabold text-center mt-5 step-head'>CONGRATULATIONS!</h1>
          <p className='sm:text-2xl text-xl mt-3 text-center'>We matched you with plans! Connect below to review your options.</p>
        </div>
      ) : (

        <div>
          <h1 className='sm:text-4xl text-3xl font-extrabold text-center mt-5 step-head'>CONGRATULATIONS!</h1>
          <p className='sm:text-2xl text-xl mt-3 text-center'>You have health insurance rates waiting for you</p>
        </div>

      )}

      <a href="tel:+18445942106">
        <div className='bg-[#F14742] shadow-2xl hover:shadow-md text-[#fff] rounded-2xl py-5 px-8 my-8 sm:text-[23px] text-[20px] sm:w-[390px] w-4/5 mx-auto'>
          <div className='flex gap-5 justify-center items-center'>
            <div className='mt-2'>
              <i className="fa-solid fa-phone"></i>
            </div>
            <p className=' text-center mt-2'>18445942106</p>
          </div>
        </div>
      </a>
      <div className='flex justify-center items-center gap-4'>
        <img src="https://i.ibb.co/sm9JKMb/pulse-60x60.gif" alt="" className='w-5' />
        <p className='text-center sm:text-xl'>Click to call toll free with a licensed agent</p>
      </div>

      <div className='flex justify-center items-center gap-4 mt-2'>
        <div className='text-[#F14742]'><i className="fa-regular fa-clock"></i></div>
        <p className='text-center sm:text-xl'>Act quickly! This offer expires in <span className='text-[#F14742] ml-2'> {formatTime(seconds)}</span></p>
      </div>
    </div>
  )
}

export default Final