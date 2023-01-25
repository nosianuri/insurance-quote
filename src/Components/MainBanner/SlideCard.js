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
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}></ul>
        }
    };
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <div key={index}>
                            <div style={{
                                background: `url(${value.cover})`
                            }} class="bg-no-repeat !bg-cover">
                                <div className='bg-black bg-opacity-25'>
                                    <div className='lg:ml-[50px] ml-5 pt-32 pb-32'>
                                    <div className='bg-black bg-opacity-40 lg:w-[450px] w-[350px] p-5 shadow-xl'>
                                    <h1 className='font-bold text-white'>{value.title}</h1>
                                        <p className='text-white'>{value.desc}</p>
                                        <button className='btn bg-[#3e37b7] text-white hover:bg-[#daa440] border-none'>Get Free Quote</button>
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