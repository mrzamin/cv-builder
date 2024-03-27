import { useState } from "react";
import InputSection from "./InputSection";
import FormSection from "./FormSection";
import Button from "./Button";

function EducationInstance() {
  const [active, setActive] = useState(true);

  const [education, setEducation] = useState({
    Degree: "",
    School: "",
    GradMonth: "",
    GradYear: "",
  });

  const inputHandler = (e) => {
    setEducation({ ...education, [e.target.id]: e.target.value });
  };

  const buttonHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  //returned componenet:
  return (
    <>
      {active ? (
        <>
          <InputSection
            type="text"
            name="degree"
            id="degree"
            value={education.Degree}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="text"
            name="school"
            id="school"
            value={education.School}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="number"
            name="gradMonth"
            id="gradMonth"
            value={education.GradMonth}
            onChange={inputHandler}
          ></InputSection>

          <InputSection
            type="number"
            name="gradYear"
            id="gradYear"
            value={education.gradYear}
            onChange={inputHandler}
          ></InputSection>
          <Button
            onClick={(e) => {
              buttonHandler(e);
            }}
          >
            Submit
          </Button>
        </>
      ) : (
        <>
          {education.Degree !== "" && <div>{education.Degree}</div>}
          {education.School !== "" && <div>{education.School}</div>}

          {(education.GradMonth !== "" || education.GradYear !== "") && (
            <div>
              <div>{education.GradMonth}</div>
              <div>{education.GradYear}</div>
            </div>
          )}
          <Button
            onClick={(e) => {
              buttonHandler(e);
            }}
          >
            Edit
          </Button>
        </>
      )}
    </>
  );
}
