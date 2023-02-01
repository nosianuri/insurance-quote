import React from 'react'
import './Category.css'
import category1 from '../../assets/catagories1.png'
import category2 from '../../assets/catagories2.png'
import category3 from '../../assets/catagories3.png'
import category4 from '../../assets/catagories4.png'
import category5 from '../../assets/catagories5.png'
import category6 from '../../assets/deals1.png'

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
                            <h3>Wemens Pants</h3>
                            <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="categories-item categories-item2">
                    <div class="overly-conteiner">
                        <img src={category2} alt="A foggy Golden Gate Bridge" />
                        <div class="overly">
                            <h3>Mans Jeckets</h3>
                            <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="overly-conteiner">
                        <img src={category3} alt="A foggy Golden Gate Bridge" />
                        <div class="overly">
                            <h3>Wemens Tops</h3>
                            <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div class="categories-item categories-item2">
                    <div class="overly-conteiner">
                        <img src={category4} alt="A foggy Golden Gate Bridge" />
                        <div class="overly">
                            <h3>Sutars</h3>
                            <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                        </div>
                    </div>
                    <div class="categories-item3">
                        <div class="overly-conteiner">
                            <img src={category5} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3>Pants</h3>
                                <button>Explore <i class="fa fa-long-arrow-right"></i></button>
                            </div>
                        </div>
                        <div class="overly-conteiner">
                            <img src={category6} alt="A foggy Golden Gate Bridge" />
                            <div class="overly">
                                <h3>Jeckets</h3>
                                <button>Explore <i class="fa fa-long-arrow-right"></i></button>
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