import React from 'react'
import Sdata from './Sdata'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './MainBanner.css';

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // appendDots: (dots) => {
        //     return <ul style={{ margin: "0px" }}></ul>
        // }
    };
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <div key={index}>
                            <div style={{
                                background: `url(${value.cover})`
                            }} class="bg-no-repeat !bg-cover sl-box">
                                <div className='max-w-7xl mx-auto'>
                                    <div className='lg:pl-10 my-10 ml-5 pt-40 pb-32'>
                                        <div className='bg-black bg-opacity-40 lg:w-[490px] w-[350px] p-5 shadow-xl rounded'>
                                            <h1 className='head-title font-bold text-white'>{value.title}</h1>
                                            <p className='text-white text-xl'>{value.desc}</p>
                                            <a href={value.link}>
                                                <div className='!mx-auto'>
                                                <button id='service-btn' className='my-3 px-3 py-2 text-lg font-semibold bg-[#3e37b7] text-white hover:bg-[#daa440] border-none'>Get Free Quote</button>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideCard