import React from 'react'

const Details = ({ formData, setFormData }) => {
  return (
    <div className="text-center">
      <p className="text-xl mb-5">What's your full name?</p>
      <div className="personal-info-container ">
        <input
          className="text-center"
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          className="text-center"
          type="text"
          placeholder="Last Number"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
      </div>
    </div>
  )
}

export default Details