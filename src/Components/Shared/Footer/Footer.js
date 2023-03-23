import React from 'react';
import Logo from '../../../assets/trendy-below.png';

const Footer = () => {
    return (
        <div className=''>
            <div>
                <footer class="footer lg:py-10 lg:px-36 p-5 cta bg-opacity-25 lg:gap-20 items-center">
                    <div>
                        <img className='lg:w-40 w-24' src={Logo} alt="" />
                        {/* <p>Insurance is an invaluable asset that promises peace of mind for the best coverage in case any mishappen occurs. The best resourceful insurance advisor can help to achieve peace of mind and satisfaction.</p> */}
                        {/* <p>Insurance Trendy Quote<br />We Save Your Time & Money</p> */}
                        <p className='lg:w-96'>Insurance is an invaluable asset that promises peace of mind for the best coverage in case any mishappen occurs. The best resourceful insurance advisor can help to achieve peace of mind and satisfaction.</p>
                        <div class="grid grid-flow-col gap-4 items-center"> <p class="font-bold text-xl">Follow Us:</p>

                            <a className='text-[30px]' href='https://www.facebook.com/insurancetrendyquote'>
                                <i class="fa-brands fa-facebook text-[#2d2640]"></i></a>
                            <a className='text-[30px]' href='/'>
                                <i class="fa-brands fa-linkedin-in text-[#2d2640]"></i>
                            </a>
                            <a className='text-[30px]' href='/'>
                                <i class="fa-brands fa-twitter text-[#2d2640]"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div>
                        <span class="text-lg font-bold sm:mt-8 mt-0">About</span>
                        <a href='/about-us' class="link link-hover hover:text-[#453b60]">About us</a>
                        
                        <a href='/contact-us' class="link link-hover hover:text-[#453b60]">Contact Us</a>
                        <a href='/privacy-policy' class="link link-hover hover:text-[#453b60]">Privacy Policy</a>
                        <a href='/privacy-policy' class="link link-hover hover:text-[#453b60]">Terms of Use</a>
                    </div>
                    <div>
                        <span class="text-lg font-bold">Insurance</span>
                        <a href='/life-insurance' class="link link-hover hover:text-[#2d2640]">Life insurance</a>
                        <a href='/finalexpense-insurance' class="link link-hover hover:text-[#2d2640]">Final Expense insurance</a>
                        <a href='/terms&use' class="link link-hover hover:text-[#2d2640]">Home insurance</a>
                       </div>
                       <div>
                       <p className='text-lg font-bold'>Vahicle</p>
                        <a href='/' class="link link-hover hover:text-[#2d2640]">Car Insurance</a>
                        <a href='/motorcycle-insurance' class="link link-hover hover:text-[#2d2640]">Motorcycle insurance</a>
                        <a href='/auto-insurance' class="link link-hover hover:text-[#2d2640]">Auto insurance</a>
                        </div>
                        <div>
                        <p className='text-lg font-bold'>Health</p>
                        <a href='/health-insurance' class="link link-hover hover:text-[#2d2640]">Health Insurance</a>
                        <a href='/medicare-insurance' class="link link-hover hover:text-[#2d2640]">Medicare Insurance</a>
                        <a href='/aca-insurance' class="link link-hover hover:text-[#2d2640]">ACA insurance</a>
                    </div>
                </footer>
                <footer class="lg:px-32 px-4 py-4 bg-[#201e44] text-white">
                    <div className='lg:flex justify-between'>
                        <div>
                            <p className='text-xs'>Copyright © 2023 - Insurance Trendy Quote | All Rights Reserved.</p>
                        </div>
                        <div>
                            <p className=''><span className='text-xs text-white hover:underline'><a href="/privacy-policy">Privacy Policy</a></span> | <span className='text-xs text-white hover:underline'><a href="/terms&use">Terms of Use</a></span></p>
                        </div>

                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer