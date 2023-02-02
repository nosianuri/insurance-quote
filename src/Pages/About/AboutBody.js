import React from 'react'
import abimg1 from '../../assets/nationwide.png'
import abimg2 from '../../assets/Optimum.webp'
import abimg3 from '../../assets/Optiom-1.webp'
import abimg4 from '../../assets/progressive.png'
import abimg5 from '../../assets/reliance.webp'
import abimg6 from '../../assets/Tugo.webp'
import abimg7 from '../../assets/w.webp'
import abimg8 from '../../assets/Intact.webp'
import abimg9 from '../../assets/economical-2.webp'
import abimg10 from '../../assets/family.webp'
import abimg11 from '../../assets/forward-insurance.webp'
import abimg12 from '../../assets/autoplan.webp'
import abimg13 from '../../assets/BECK-1.webp'
import abimg14 from '../../assets/Blue-Cross-partner-amc-insurance-travel-insurance-canada-e1666890954376.webp'
import about from '../../assets/Core-Values-for-website.webp'

const AboutBody = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <div className=' mt-5'>
                <h4 className='text-3xl font-semibold text-center mb-3'>Our Mission</h4>
                <p>Insurance Trendy Quote understands insurance is invaluable but finding the right insurance plan can be challenging. Our mission is to simplify the process and make insurance fit your individual needs. We work hard to find the best coverage options at the most affordable rates, whether you need personal or professional insurance.</p>
            </div>
            <div className='my-8'>
            {/* <div className='flex w-full justify-center items-center'>
                <div className='lg:w-[400px] w-[50px] h-[2px] !text-gray-500'></div>
                <div class="lg:mx-4  lg:w-auto w-full lg:text-lg text-[10px]"> Our Core Values</div>
                <div className='lg:w-[400px] w-[50px] h-[2px] '></div>
            </div> */}
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 justify-center items-center '>
                <img className='' src={about} alt="" />
                <div>
                    <h4 className='text-2xl font-semibold mb-3'>Changing Insurance With A Deeply Rooted Customer-Centric Approach</h4>
                    <p className='mb-2'>The insurance industry is ever-changing, so finding the right coverage can be stressful. Our team focuses on communication to ensure you get the best option for your individual needs. While many other insurance brokers make assumptions when looking for the best fit, we listen to you and gather the right information to ensure you truly get the best coverage options.</p>
                    <p className='mb-2'>The best way to get you the insurance you need is to give you our undivided attention. At Insurance Trendy Quote, we listen to you, research the latest rates, and discuss your coverage options at length. This ensures you genuinely understand the policies available and what you’re getting when choosing your coverage.</p>
                    <p>Our goal is to create lasting client relationships beyond your initial visit and provide lifelong assistance for your future insurance needs. Mutual respect and understanding for our clients allow us to offer outstanding customer service, excellent coverage, competitive rates, and the industry’s best client experience.</p>
                </div>
            </div>
            </div>
           
            <div className=' mt-5'>
                <h4 className='text-xl font-semibold mb-3'>Protecting our customers from financial loss </h4>
                <p>Your family, your business and your possessions are all important to you, but you may not know how to best protect them. We have the experience to navigate the unique risks you face, serving as your insurance advisor in Michigan.  The Emil Rummel Agency is an independent insurance agency, family owned and operated, now in its third generation of ownership.
                </p>
            </div>
            <div className=' mt-5'>
                <h4 className='text-xl font-semibold mb-3'>The key to our agency’s success over the years is we care about our customers and treat their insurance needs as if they were our own.</h4>
                <p>This means we take the time to ask you questions, listen to your responses, discuss your insurance requirements and educate you on how insurance protects you from financial loss.
                </p>
            </div>
            <div className=' mt-5'>
                <h4 className='text-xl font-semibold mb-3'>Service, whether it is in response to an insurance claim or general question, is the most important value we offer you.</h4>
                <p>Your satisfaction is very important to us. We work hard to build a trusted relationship with you.  Give us a call and find out what it’s like to work with caring, knowledgeable and experienced insurance professionals!  You’ll be glad you did.
                </p>
            </div>
            <div className='mt-5 '>
                <h4 className='font-semibold text-3xl mb-2'>Our Reliable Insurance Partners</h4>
                <p className='text-xl mb-2'>QUOTES FROM THE MOST COMPETITIVE, VALUABLE INSURANCE COMPANIES IN CANADA</p>
                <p className='mb-2'>Our primary goal is to find comprehensive insurance coverage options that meet your needs at a price you can afford. We are proud to work with the most valuable insurance companies in Canada to ensure you get these results. </p>
                <p>Our insurance company network allows us to compare rates to ensure you get what you need. We work with an array of companies to extensively compare rates on your behalf and find you the best option for your home, condo, travel, life insurance, and more!</p>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 lg:mx-16 mb-10'>
                    <img src={abimg1} alt="" />
                    <img src={abimg2} alt="" />
                    <img src={abimg3} alt="" />
                    <img src={abimg4} alt="" />
                    <img src={abimg5} alt="" />
                    <img src={abimg6} alt="" />
                    <img src={abimg7} alt="" />
                    <img src={abimg8} alt="" />
                    <img src={abimg9} alt="" />
                    <img src={abimg10} alt="" />
                    <img src={abimg11} alt="" />
                    <img src={abimg12} alt="" />
                    <img src={abimg13} alt="" />
                    <img src={abimg14} alt="" />

                </div>
            </div>
        </div>
    )
}

export default AboutBody