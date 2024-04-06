import { useState } from "react";
import InputSection from "./InputSection";

export default function ContactForm({ contactInfo, setContactInfo }) {
  const [active, setActive] = useState(true);

  const inputHandler = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const buttonHandler = (e) => {
    setActive(!active);
  };

  return (
    <>
      {active ? (
        <>
          <InputSection
            type="text"
            name="name"
            id="name"
            value={contactInfo.name}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="email"
            name="email"
            id="email"
            value={contactInfo.email}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="url"
            name="website"
            id="website"
            value={contactInfo.website}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="text"
            name="location"
            id="location"
            value={contactInfo.location}
            onChange={inputHandler}
          ></InputSection>
          <button
            onClick={(e) => {
              buttonHandler(e);
            }}
          >
            Submit
          </button>
        </>
      ) : (
        <>
          {contactInfo.name !== "" && <div>{contactInfo.name}</div>}
          {contactInfo.email !== "" && <div>{contactInfo.email}</div>}
          {contactInfo.website !== "" && <div>{contactInfo.website}</div>}
          {contactInfo.location !== "" && <div>{contactInfo.location}</div>}
          <button
            onClick={(e) => {
              buttonHandler(e);
            }}
          >
            Edit
          </button>
        </>
      )}
    </>
  );
}
