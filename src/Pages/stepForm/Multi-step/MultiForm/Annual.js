import React from 'react'

const Annual = ({ formData, setFormData }) => {
  return (
    <div className="text-center">
      <p className="text-xl mb-5">What is your annual household income?</p>
      <p className='mb-5'>Why we need this? We use this data to check if you qualify for a subsidized plan.</p>
      <div className="personal-info-container ">
        <input
          className="text-center"
          type="text"
          placeholder="Below $37,000"
          value={formData.firstName}
          onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }}
        />
        <input
          className="text-center"
          type="text"
          placeholder="$37,000 - $90,999"
          value={formData.lastName}
          onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }}
        />
        <input
          className="text-center"
          type="text"
          placeholder="$91,000 - 149,999"
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
        <input
          className="text-center"
          type="text"
          placeholder="$150,000 And Over"
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value });
          }}
        />
      </div>
    </div>
  )
}

export default Annual