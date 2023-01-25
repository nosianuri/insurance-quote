import React from 'react';
import Logo from '../../../assets/Insuranc.png';

const Footer = () => {
    return (
        <div className='text-center'>
            <div>
                <footer class="footer p-10 bg-[#c1c4d0]  justify-center lg:gap-20">
                    <div>
                        <img className='w-48' src={Logo} alt="" />
                        <p>Insurance Trendy Quote<br />We Save Your Time & Money</p>
                    </div>
                    <div>
                        <span class="footer-title">About</span>
                        <a class="link link-hover">About us</a>
                        <a class="link link-hover">Xustomer Care</a>
                        <a class="link link-hover">Claims</a>
                        <a class="link link-hover">Careers</a>
                        <a class="link link-hover">Privacy Policy</a>
                    </div>
                    <div>
                        <span class="footer-title">Services</span>
                        <a class="link link-hover hpver:text-[]">Car Insurance</a>
                        <a class="link link-hover">Health Insurance</a>
                        <a class="link link-hover">Medicare Insurance</a>
                        <a class="link link-hover">Life insurance</a>
                        <a class="link link-hover">Burial insurance</a>
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
                        <p>Copyright © 2023 - INSURANCE TRENDY QUOTE | ALL RIGHTS RESERVED.</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Footer