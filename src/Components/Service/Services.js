import React from 'react'

const Services = (props) => {
    const { name, img, link } = props.product;
    return (
        <div className='flip-card' data-aos='fade-down' data-aos-delay='500'>
            <div className='flip-card-inner'>
                <div className='flex flip-card-front'>
                    <div className='flex flex-col bg-white rounded-lg shadow-md hover:shadow-2xl w-full m-6 overflow-hidden border-4 border-white border-b-[#2d2640] '>
                        <a href={link}>
                            <img src={img} alt="" className='h-16 w-16 my-6 mx-auto' />
                        </a>
                        <a href={link}>
                            <h2 className='text-[#201e44] head-title text-center px-2 font-bold text-xl mb-2'>{name}</h2>
                        </a>

                        {/* <p className='text-center px-2 pb-5'>{description}</p>
                <a href={link} id="service-btn" className='bg-[#584FF7] hover:bg-[#daa440] text-white p-3 text-center font-bold'>Read More</a> */}
                    </div>
                    {/* <div className="flip-card-back">
                        <h1>John Doe</h1>
                        <p>Architect & Engineer</p>
                        <p>We love that guy</p>
                    </div> */}
                </div>
            </div>
        </div>
        // <div className=" w-96 bg-base-100 shadow-xl ">
        //     <figure className="px-10 pt-10">
        //         <img className='w-16 rounded-xl' src={img} alt="Shoes" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{name}</h2>
        //         <p>{description}</p>
        //         <div className="card-actions">
        //             <a href={link}>
        //                 <button className="btn text-white bg-[#584FF7] hover:bg-[#daa440] border-none">Get a quote</button>
        //             </a>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Services