import React, { useState } from "react";
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
import Annual from "./Annual";
import AreEnroll from "./AreEnroll";
import Details from "./Details";
import ContactInfo from "./ContactInfo";

function Form() {
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
    });

    const FormTitles = ["Sign Up", "Personal Info", "Annual", "AreEnroll","Details","ContactInfo", "Other"];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 2) {
            return <Annual formData={formData} setFormData={setFormData} />;
        } else if (page === 3) {
            return <AreEnroll formData={formData} setFormData={setFormData} />;
        } else if (page === 4) {
            return <Details formData={formData} setFormData={setFormData} />;
        } else if (page === 5) {
            return <ContactInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <OtherInfo formData={formData} setFormData={setFormData} />;
        }
    };

    return (
        <div className="form">
            <div className='text-center mb-5'>
                <h2 className='text-3xl mb-2'>HEALTH CARE REBATE UPDATE</h2>
                <p className="mb-5">Thanks to a State Regulated Program, Americans Get Free Health, Vision & Dental Benefits Before The Deadline</p>
            </div>
            <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "20%" : page == 1? "40%" : page == 2 ? "50%" : page == 3 ? "60%" : page == 4 ? "80%" : page == 5 ? "90%" : "100%" }}
                ></div>
            </div>
            <div className="form-container">
                {/* <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div> */}
                <div className="body">{PageDisplay()}</div>
                <div className="footer mt-5">
                    <button  className="bg-[#444092] text-white py-2 px-4 text-xl"
            disabled={page == 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Back
          </button>
                    <button className="bg-[#444092] text-white py-2 px-4 text-xl"
                        onClick={() => {
                            if (page === FormTitles.length - 1) {
                                alert("FORM SUBMITTED");
                                console.log(formData);
                            } else {
                                setPage((currPage) => currPage + 1);
                            }
                        }}
                    >
                        {page === FormTitles.length - 1 ? "Submit" : "Continue"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;