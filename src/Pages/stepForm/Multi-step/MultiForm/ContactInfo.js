import React from 'react'

const ContactInfo = ({ formData, setFormData }) => {
  return (
    <div className="text-center">
      <p className="text-xl mb-5">Thanks John Rojer, We've Found Plans In Your Area!</p>
      <div className="personal-info-container ">
        <input
          className="text-center"
          type="email"
          placeholder="Email"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          className="text-center"
          type="number"
          placeholder="Phone Number"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        {/* <button>View My Quotes</button> */}
        {/* <p className='text-xs'>By pressing the "View My Quote" (1) I consent to receive emails, telephone calls, text messages, artificial or pre-recorded messages from Us Health Advisor its affiliates, and/or any THIRD-PARTY PARTNERS (or their service provider partners on their behalf) regarding their products and services (Including Medicare Advantage plans, Medicare Part D Prescription Drug Plans or Medicare Supplement Insurance Plans). at the email address and telephone number provided, including my wireless phone number (if provided). utilizing an automated telephone dialing system and I understand that I am not required to grant this consent as a condition of purchasing and property, goods or services from the foregoing companies (2) I agree to this websites PRIVACY POLICY and TERMS OF USE.</p> */}
      </div>
    </div>
  )
}

export default ContactInfo