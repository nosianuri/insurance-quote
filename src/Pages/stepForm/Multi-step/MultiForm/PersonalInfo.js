import React from "react";

function PersonalInfo({ formData, setFormData }) {
  return (
    <div className="text-center">
    <p className="text-xl mb-5">How many people live in your household?</p>
    <div className="personal-info-container ">
      <input
      className="text-center"
        type="text"
        placeholder="1"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });
        }}
      />
      <input
      className="text-center"
        type="text"
        placeholder="2"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });
        }}
      />
      <input
      className="text-center"
        type="text"
        placeholder="3"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
      <input
      className="text-center"
        type="text"
        placeholder="4+"
        value={formData.username}
        onChange={(e) => {
          setFormData({ ...formData, username: e.target.value });
        }}
      />
    </div>
    </div>
  );
}

export default PersonalInfo;