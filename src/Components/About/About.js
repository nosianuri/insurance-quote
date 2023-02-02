import React from 'react'
import HeadTitle from '../Common/HeadTitle/HeadTitle'
import AboutCard from './AboutCard'
import './About.css'

const About = () => {
    return (
        <>
            <HeadTitle />
            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>

            <section className='features top'>
                <div className='container aboutCard flex justify-between items-center'>
                    <div className='row row1 '>
                        <h1>
                            Our <span>Features</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.</p>
                        <button className='secondary-btn'>
                            Explore More <i className='fas fa-long-arrow-alt-right'></i>
                        </button>
                    </div>
                    <div className='row image lg:order-2'>
                        <img src='https://i.ibb.co/ZGCLffw/handshake.webp' alt='' />
                        <div className='control-btn'>
                            <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About