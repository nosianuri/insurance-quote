import React from 'react';
import Logo from '../../assets/trendyquote.png';
import bblogo from '../../assets/BBB-Logo.svg';

const U65Footer = () => {
    return (
        <div className='mt-16 px-3 max-w-7xl mx-auto text-[#1C2B33] pb-8'>
            <div className='flex justify-between mb-5'>
                <img src={Logo} alt="" className='w-64' />
                <img src={bblogo} alt="" />
            </div>
            <div>
                <p className='pt-3 pb-5 border border-[#fff] text-xs border-y-[#000]'>InsuranceTrendyQuote is privately owned and operated . Invitations for applications for insurance on InsuranceTrendyQuote are made through Flex Rates, LLC, a subsidiary of Excel Impact, only where licensed and appointed. Flex Rates licensing information can be found here. Submission of your information constitutes permission for an agent to contact you with additional information about the cost and coverage details of health plans. Possible plan options include, but are not limited to Major Medical Plans, Short Term Plans, Fixed Indemnity Plans, Community/Cost-Sharing Plans and more. Descriptions are for informational purposes only and subject to change. Insurance plans may not be available in all states. For a complete description, please call 1-844-907-1356 to determine eligibility and to request a copy of the applicable policy. InsuranceTrendyQuote is not affiliated with or endorsed by the United States government or the federal Medicare program. By using this site, you acknowledge that you have read and agree to the <a href="/terms&use" className='underline'>Terms of Service</a>. and <a href="/privacy-policy" className='underline'>Privacy Policy</a>. <br />
                    We are committed to protect your privacy. If you do not want to share your information please click on <a href="/privacy-policy" className='underline'>Do Not Sell My Personal Information for more details</a>.</p>
            </div>
            <div>
                <p className='text-sm mt-2'>Copyright © 2023 InsuranceTrendyQuote | All rights reserved
                </p>
                <p className='text-sm mt-2'>
                    *Possible plan options include, but are not limited to Major Medical Plans, Short Term Plans, Fixed Indemnity Plans, Community/Cost-Sharing Plans and more. Prices may vary based on plan types, location, and other factors.
                </p>
                <p className='text-sm mt-2'>
                    *Pricing of $59/month is based off a 26-year-old male living in Miami, FL receiving a short-term health insurance plan. Prices may vary depending on plan types, location, and other factors.</p>
            </div>
        </div>
    )
}

export default U65Footer