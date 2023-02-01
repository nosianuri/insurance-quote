import React from 'react'
import ContactAbout from './ContactAbout'

const ContactBody = () => {
    return (
        <div id='contact' className='lg:mx-w-7xl lg:px-32 px-3'>
            <ContactAbout />
            <div>
                <div id='top-form' className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 lg:pt-10 md:pt-16 pt-10 justify-center items-center '>
                    <div className='lg:order-2'>
                        <h2 className='lg:text-4xl text-2xl mb-5'><i class="fa-solid fa-message text-[#3b3352]"></i> Customer Care Center</h2>
                        <p className='mb-5'>Please contact your claim representative for status on an existing claim.</p>
                        <div className=''>
                            <div>
                                <h4 className='text-2xl font-semibold'>Send a message</h4>
                                <p>For auto, home, and umbrella  policy questions, <a className='hover:underline font-semibold text-[#3b3352]' href="/login">log in</a> or <br /> <a className='hover:underline font-semibold text-[#3b3352]' href="/">register</a>.  For other products, fill out this <a className='hover:underline font-semibold text-[#3b3352]' href="#contact">request form</a>.</p>
                            </div>
                            
                            <div className='mt-3'>
                                <h4 className='text-2xl font-semibold '>Contact us on social media</h4>
                                <p><a className=' hover:underline text-[#3b3352] font-semibold' href="/">(844) 501-0362</a></p>
                                <p>We're available 24/7 hours.</p>
                            </div>
                            <div className='mt-3'>
                                <h4 className='text-2xl font-semibold '>Give us a call</h4>
                                <p>Ask us a question on social, and we'll get back to you as soon as we can. <br /> And make sure you connect so we can stay friends! - <a className='hover:underline text-[#3b3352] font-semibold' href="https://www.facebook.com/insurancetrendyquote"> Facebook </a></p>
                                <div className='mt-1'>
                                
                                </div>
                                
                            </div>
                        </div>
                        {/* <div className=''>
                            <h2 className='text-5xl mb-3'>CONTACT INFO</h2>
                            <p>Need to talk to someone? We’re here to help.</p>
                            <a href="tel:">
                            <p className='font-bold'>Call: 844-501-0362.</p>
                            </a> 
                            <h3 className=''>Email: info@insurancetrendyquote.com</h3>
                            <p>We’re here to help. Send us an email and we’ll respond as soon as we can.</p>
                            <p>Need assistance?</p>
                            <p className='font-semibold'>We're available 24/7 hours.</p>
                            
                        </div> */}
                    </div>
                    <div className='bg-[#201e44] order-2 px-3 shadow-md hover:shadow-2xl'>
                        <div className='lg:py-5 py-5 lg:mx-16 '>
                            <div className='text-center pb-5'>
                                <i class="fa-regular fa-handshake text-7xl text-white"></i>
                            </div>

                            <h1 className='head-title lg:text-3xl md:text-3xl text-white text-xl text-center font-semibold'>START NOW, IT'S FAST & FREE!</h1>
                            <h3 className='text-[#ede9e9] lg:text-xl md:text-lg text-md text-center  leading-tight font-semibold'>
                            </h3>
                            <form action="">
                                <div className='grid lg:grid-cols-2 grid-cols-2 py-5 gap-8'>
                                    <div className='space-y-3 mb-3 lg:mb-0'>
                                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='first_name' placeholder='First Name' />

                                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='email' placeholder='Email' />
                                    </div>
                                    <div className='space-y-3'>
                                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='phone' placeholder='Phone' />
                                        <input className='px-2 rounded w-full py-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' type="text" name='subject' placeholder='Subject' />

                                    </div>
                                </div>

                                <div>
                                    <textarea className='rounded w-full p-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-[#2d2640]' name="" id="" cols="50" rows="2" placeholder='More details about your claim' ></textarea>
                                </div>
                                <div className='text-center bg-[#2c2c6f] rounded my-5'>
                                    <a href="/">
                                        <button className='uppercase text-xl py-2 text-white font-bold'>Submit</button>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactBody