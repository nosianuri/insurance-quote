import React from 'react'
import Categories from './Categories'
import SliderHome from './SliderHome'

const MainBanner = () => {
    return (
        <>
            <section>
                <div className='flex '>
                    <Categories />
                    <SliderHome />
                </div>
            </section>
        </>
    )
}

export default MainBanner