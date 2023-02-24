import React from 'react'

const AreEnroll = ({ formData, setFormData }) => {
  return (
    <div className="text-center">
    <p className="text-xl mb-5">Are You Currently Enrolled In Medicare?</p>
    <div className="personal-info-container ">
      <input
      className="text-center"
        type="text"
        placeholder="Yes"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
      className="text-center"
        type="text"
        placeholder="No"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
    </div>
    </div>
  )
}

export default AreEnroll