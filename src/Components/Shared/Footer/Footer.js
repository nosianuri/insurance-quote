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
                        <a href='/' class="link link-hover hover:text-[#3e37b7]">About us</a>
                        <a href='/' class="link link-hover hover:text-[#3e37b7]">Customer Care</a>
                        <a href='/' class="link link-hover hover:text-[#3e37b7]">Claims</a>
                        <a href='/' class="link link-hover hover:text-[#3e37b7]">Careers</a>
                        <a href='/privacy-policy' class="link link-hover hover:text-[#3e37b7]">Privacy Policy</a>
                    </div>
                    <div>
                        <span class="footer-title">Services</span>
                        <a href='/car-insurance' class="link link-hover hover:text-[#3e37b7]">Car Insurance</a>
                        <a href='/health-insurance' class="link link-hover hover:text-[#3e37b7]">Health Insurance</a>
                        <a href='/medicare-insurance' class="link link-hover hover:text-[#3e37b7]">Medicare Insurance</a>
                        <a href='/life-insurance' class="link link-hover hover:text-[#3e37b7]">Life insurance</a>
                        <a href='/finalexpense-insurance' class="link link-hover hover:text-[#3e37b7]">Final Expense insurance</a>
                    </div>
                    <div>
                        <span class="footer-title">Social</span>
                        
                        <div class="grid grid-flow-col gap-4">
                            <a className='text-[30px]' href='https://www.facebook.com/insurancetrendyquote'>
                            <i class="fa-brands fa-facebook text-[#3e37b7]"></i></a>
                            <a className='text-[30px]' href='/'>
                            <i class="fa-brands fa-linkedin-in text-[#3e37b7]"></i>
                            </a>
                            <a className='text-[30px]' href='/'>
                            <i class="fa-brands fa-twitter text-[#3e37b7]"></i>
                            </a>
                        </div>
                    </div>
                </footer>
                <footer class="footer footer-center p-4 bg-[#3e37b7] text-white">
                    <div>
                        <p className='lg:text-sm text-xs'>Copyright © 2023 - INSURANCE TRENDY QUOTE | ALL RIGHTS RESERVED.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer