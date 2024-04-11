import { useState } from "react";
import InputSection from "./InputSection";

export default function ContactForm({ contactInfo, setContactInfo }) {
  const [active, setActive] = useState(true);

  const handleInput = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <div className="form-container">
          <InputSection
            type="text"
            name="name"
            label="Name"
            id="name"
            value={contactInfo.name}
            onChange={handleInput}
          ></InputSection>

          <InputSection
            type="email"
            name="email"
            label="Email"
            id="email"
            value={contactInfo.email}
            onChange={handleInput}
            required={true}
          ></InputSection>

          <InputSection
            type="url"
            name="website"
            label="Website"
            id="website"
            value={contactInfo.website}
            onChange={handleInput}
          ></InputSection>

          <InputSection
            type="text"
            name="location"
            label="Location"
            id="location"
            value={contactInfo.location}
            onChange={handleInput}
          ></InputSection>
          <button
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="contact-form">
          {contactInfo.name !== "" && <div>{contactInfo.name}</div>}
          {contactInfo.email !== "" && <div>{contactInfo.email}</div>}
          {contactInfo.website !== "" && <div>{contactInfo.website}</div>}
          {contactInfo.location !== "" && <div>{contactInfo.location}</div>}
          <button
            onClick={(e) => {
              handleButtonClick(e);
            }}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}
