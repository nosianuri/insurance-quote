import React from 'react'
import './Category.css'
import category1 from '../../assets/life-banner_anim.png'
import category2 from '../../assets/car-banner-anim.png'
import category3 from '../../assets/health-banner_anim.png'
import category4 from '../../assets/home-banner_anim.png'
import category5 from '../../assets/expense-banner_anim.png'
import category6 from '../../assets/car-hero_anim.png'

const Category = () => {
    return (
        <section className="categories" id="shop" >
            <div className="container mx-auto">
                {/* <h1 class="categories-title">Stories & tips
for everyday life
previous</h1> */}

                <div class="categories-container mt-16">
                    <div class="categories-item" data-aos='fade-right' data-aos-delay='500'>
                        <div class="overly-conteiner ">
                        <div className='image-box'>
                        <img src={category1} alt="A foggy Golden Gate Bridge" />
                        </div>
                            
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    Top 9 Insurance Coverages To Protect Your Business.
                                </h3>
                                <a href="/about-us">
                                <button className='hover:space-x-5 '><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="categories-item categories-item2" data-aos='fade-top' data-aos-delay='500'>
                        <div class="overly-conteiner">
                        <div className='image-box'>
                        <img src={category2} alt="A foggy Golden Gate Bridge" />
                        </div>
                            
                            <div class="overly">
                                <h3 className='font-semibold'>How Are Driverless Cars Going To Impact The Insurance Industry?
                                    </h3>
                                    <a href="car-insurance">
                                    <button className='hover:space-x-5'><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                    </a>
                                
                            </div>
                        </div>
                        <div class="overly-conteiner">
                        <div className='image-box'>
                        <img src={category3} alt="A foggy Golden Gate Bridge" />
                        </div>
                        
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    Why Renter???s Insurance Should Be Reviewed Annually</h3>
                                    <a href="/life-insurance">
                                    <button className='hover:space-x-5'><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                    </a>
                            </div>
                        </div>
                    </div>
                    <div class="categories-item categories-item2" data-aos='fade-left' data-aos-delay='500'>
                        <div class="overly-conteiner">
                        <div className='image-box'>
                        <img className='zoom' src={category4} alt="A foggy Golden Gate Bridge" />
                        </div>
                            
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    What Are The Major Prerequisites For Buying A Home In BC?
                                </h3>
                                <a href="/home-insurance">
                                <button className='hover:space-x-5'><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                </a>
                                
                            </div>
                        </div>
                        <div class="categories-item3">
                            <div class="overly-conteiner">
                            <div className='image-box'>
                            <img src={category5} alt="A foggy Golden Gate Bridge" />
                            </div>
                                
                                <div class="overly ">
                                    <h3 className='font-semibold'>Insurance Acquires Ken Rystead
                                        </h3>
                                        <a href="/finalexpense-insurance">
                                        <button className='hover:space-x-5 '><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                        </a>
                                    
                                </div>
                            </div>
                            <div class="overly-conteiner">
                            <div className='image-box'>
                            <img src={category6} alt="A foggy Golden Gate Bridge" />
                            </div>
                                
                                <div class="overly">
                                    <h3 className='font-semibold'>The Perils Of Distracted Driving</h3>
                                    <a href="/auto-insurance">
                                    <button className='hover:space-x-5'><span >Explore</span> <i class="fa fa-long-arrow-right"></i></button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category