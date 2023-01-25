import React from 'react'

const AcaAbout = () => {
  return (
    <div className='mx-36 my-10'>
        <h1 className='text-center text-3xl font-semibold'>Affordable Care Act (ACA)</h1>
        <p className='my-5'>The comprehensive health care reform law enacted in March 2010 (sometimes known as ACA, PPACA, or “Obamacare”).</p>
        <p>The law has 3 primary goals:</p>
        <ul className='terms-article'>
            <li>Make affordable health insurance available to more people. The law provides consumers with subsidies (“premium tax credits”) that lower costs for households with incomes between 100% and 400% of the federal poverty level (FPL).</li>
            <li>Expand the Medicaid program to cover all adults with income below 138% of the FPL. (Not all states have expanded their Medicaid programs.)</li>
            <li>Support innovative medical care delivery methods designed to lower the costs of health care generally.</li>
        </ul>
    </div>
  )
}

export default AcaAbout