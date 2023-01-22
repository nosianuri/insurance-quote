import React from 'react'

const Services = (props) => {
    const { name, img, description, link } = props.product;
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-16' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <div class="card-actions">
                    <a href={link}>
                        <button class="btn btn-primary">Get a quote</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Services