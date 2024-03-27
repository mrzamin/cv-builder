import { useState } from "react";
import FormSection from "./FormSection";
import InputSection from "./InputSection";
import Button from "./Button";

export default function ContactInfo() {
  //Use state:
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    website: "",
    location: "",
  });

  //Use state for if the form is being edited:
  const [active, setActive] = useState(true);

  const changeHandler = (e) => {
    setContactInfo({ ...contactInfo, [e.target.id]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };
  //returned componenet:
  return (
    <>
      <FormSection name="Contact Info">
        {active ? (
          <>
            <InputSection
              type="text"
              name="name"
              id="name"
              value={contactInfo.name}
              onChange={changeHandler}
            ></InputSection>

            <InputSection
              type="email"
              name="email"
              id="email"
              value={contactInfo.email}
              onChange={changeHandler}
            ></InputSection>

            <InputSection
              type="url"
              name="website"
              id="website"
              value={contactInfo.website}
              onChange={changeHandler}
            ></InputSection>

            <InputSection
              type="text"
              name="location"
              id="location"
              value={contactInfo.location}
              onChange={changeHandler}
            ></InputSection>
            <Button
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            {contactInfo.name !== "" && <div>{contactInfo.name}</div>}
            {contactInfo.email !== "" && <div>{contactInfo.email}</div>}
            {contactInfo.website !== "" && <div>{contactInfo.website}</div>}
            {contactInfo.location !== "" && <div>{contactInfo.location}</div>}
            <Button
              onClick={(e) => {
                submitHandler(e);
              }}
            >
              Edit
            </Button>
          </>
        )}
      </FormSection>
    </>
  );
}

//eventually can move object out of here.
