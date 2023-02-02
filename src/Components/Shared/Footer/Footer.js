import React from 'react';
import Logo from '../../../assets/Insuranc.png';

const Footer = () => {
    return (
        <div className=''>
            <div>
                <footer class="footer lg:py-10 lg:px-36 p-5 cta bg-opacity-25 lg:gap-20 ">
                    <div>
                        <img className='w-48' src={Logo} alt="" />
                        {/* <p>Insurance is an invaluable asset that promises peace of mind for the best coverage in case any mishappen occurs. The best resourceful insurance advisor can help to achieve peace of mind and satisfaction.</p> */}
                        {/* <p>Insurance Trendy Quote<br />We Save Your Time & Money</p> */}
                        <p className='lg:w-96'>Insurance is an invaluable asset that promises peace of mind for the best coverage in case any mishappen occurs. The best resourceful insurance advisor can help to achieve peace of mind and satisfaction.</p>
                    </div>
                    <div>
                        <span class="footer-title">About</span>
                        <a href='/' class="link link-hover hover:text-[#453b60]">About us</a>
                        <a href='/' class="link link-hover hover:text-[#453b60]">Customer Care</a>
                        <a href='/' class="link link-hover hover:text-[#453b60]">Claims</a>
                        <a href='/' class="link link-hover hover:text-[#453b60]">Get a FREE Quote</a>
                        <a href='/' class="link link-hover hover:text-[#453b60]">Careers</a>
                        <a href='/privacy-policy' class="link link-hover hover:text-[#453b60]">Privacy Policy</a>
                    </div>
                    <div>
                        <span class="footer-title">Insurance</span>

                        <a href='/car-insurance' class="link link-hover hover:text-[#2d2640]">Car Insurance</a>
                        <a href='/health-insurance' class="link link-hover hover:text-[#2d2640]">Health Insurance</a>
                        <a href='/medicare-insurance' class="link link-hover hover:text-[#2d2640]">Medicare Insurance</a>
                        <a href='/life-insurance' class="link link-hover hover:text-[#2d2640]">Life insurance</a>
                        <a href='/finalexpense-insurance' class="link link-hover hover:text-[#2d2640]">Final Expense insurance</a>
                        <a href='/aca-insurance' class="link link-hover hover:text-[#2d2640]">ACA insurance</a>
                        <a href='/motorcycle-insurance' class="link link-hover hover:text-[#2d2640]">Motorcycle insurance</a>
                        <a href='/auto-insurance' class="link link-hover hover:text-[#2d2640]">Auto insurance</a>
                        <a href='/home-insurance' class="link link-hover hover:text-[#2d2640]">Home insurance</a>
                    </div>
                    <div>
                        <span class="footer-title">Follow Us:</span>

                        <div class="grid grid-flow-col gap-4">
                            <a className='text-[30px]' href='https://www.facebook.com/insurancetrendyquote'>
                                <i class="fa-brands fa-facebook text-[#2d2640]"></i></a>
                            <a className='text-[30px]' href='/'>
                                <i class="fa-brands fa-linkedin-in text-[#2d2640]"></i>
                            </a>
                            <a className='text-[30px]' href='/'>
                                <i class="fa-brands fa-twitter text-[#2d2640]"></i>
                            </a>
                        </div>
                        <p className='font-semibold'>Contact:</p>
                        <a href='tel:18445010362' class="link link-hover hover:text-[#453b60]">(844) 501-0362</a>
                        <a href='/contact-us' class="link link-hover hover:text-[#453b60]">Contact us</a>
                        {/* <p className=''><span className='text-xs text-[#2d2640] hover:underline'><a href="/privacy-policy">Privacy Policy</a></span> | <span className='text-xs text-[#2d2640] hover:underline'><a href="/terms&use">Terms of Use</a></span> | <span className='text-xs text-[#2d2640] hover:underline'><a href="/">Do not sell my personal information</a></span> | <span className='text-xs text-[#2d2640] hover:underline'><a href="/">California Privacy Choices</a></span> | <span className='text-xs text-[#2d2640] hover:underline'><a href="/">Cookies and Other Technology</a></span></p>
                        <p className='text-center lg:text-md text-xs my-3'>2582 So Songbird Cir</p> */}
                    </div>
                </footer>
                <footer class="lg:px-32 px-4 py-4 bg-[#201e44] text-white">
                    <div className='lg:flex justify-between'>
                        <div>
                            <p className='text-xs'>Copyright © 2023 - INSURANCE TRENDY QUOTE | ALL RIGHTS RESERVED.</p>
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