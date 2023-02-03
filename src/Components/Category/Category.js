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
        <section class="categories" id="shop">
            <div class="container">
                {/* <h1 class="categories-title">Stories & tips
for everyday life
previous</h1> */}

                <div class="categories-container mt-16">
                    <div class="categories-item">
                        <div class="overly-conteiner">
                            <img src={category1} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    Top 9 Insurance Coverages To Protect Your Business.
                                </h3>
                                <a href="/about-us">
                                <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                                </a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="categories-item categories-item2">
                        <div class="overly-conteiner">
                            <img src={category2} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3 className='font-semibold'>How Are Driverless Cars Going To Impact The Insurance Industry?
                                    </h3>
                                    <a href="car-insurance">
                                    <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                                    </a>
                                
                            </div>
                        </div>
                        <div class="overly-conteiner">
                            <img src={category3} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    Why Renter’s Insurance Should Be Reviewed Annually</h3>
                                    <a href="/life-insurance">
                                    <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                                    </a>
                                
                            </div>
                        </div>
                    </div>
                    <div class="categories-item categories-item2">
                        <div class="overly-conteiner">
                            <img src={category4} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3 className='font-semibold'>
                                    What Are The Major Prerequisites For Buying A Home In BC?
                                </h3>
                                <a href="/home-insurance">
                                <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                                </a>
                                
                            </div>
                        </div>
                        <div class="categories-item3">
                            <div class="overly-conteiner">
                                <img src={category5} alt="A foggy Golden Gate Bridge" />
                                <div class="overly">
                                    <h3 className='font-semibold'>Insurance Acquires Ken Rystead
                                        </h3>
                                        <a href="/finalexpense-insurance">
                                        <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                                        </a>
                                    
                                </div>
                            </div>
                            <div class="overly-conteiner">
                                <img src={category6} alt="A foggy Golden Gate Bridge" />
                                <div class="overly">
                                    <h3 className='font-semibold'>The Perils Of Distracted Driving</h3>
                                    <a href="/auto-insurance">
                                    <button>Explore <i class="fa fa-long-arrow-right"></i></button>
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