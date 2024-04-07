import { useState } from "react";
import InputSection from "./InputSection";

const initialState = {
  degree: "",
  school: "",
  gradMonth: "",
  gradYear: "",
  details: "",
};

export function EducationForm({ education, setEducation }) {
  const [experience, setExperience] = useState(initialState);

  function handleInput(e) {
    e.preventDefault();
    const newExperience = { ...experience, [e.target.name]: e.target.value };
    setExperience(newExperience);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const uniqueID = Date.now().toString();
    experience.id = uniqueID;
    setEducation([...education, experience]);
    setExperience(initialState);
  }

  function handleEdit(e, experience) {
    e.preventDefault();
    setExperience(experience);
    setEducation(education.filter((item) => item.id !== experience.id));
  }

  function handleDelete(e, id) {
    e.preventDefault();
    setEducation(education.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="form-container">
        <InputSection
          type="text"
          name="degree"
          label="Degree"
          id="degree"
          value={experience.degree}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="text"
          name="school"
          label="School"
          id="school"
          value={experience.school}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="month"
          name="graduationDate"
          label="Graduation"
          id="graduationDate"
          value={experience.graduationDate}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="text"
          name="details"
          label="Details"
          id="details"
          value={experience.details}
          onChange={(e) => handleInput(e)}
        ></InputSection>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul className="education-experience-list">
        {education &&
          education.map((experience) => (
            <div key={experience.id} className="education-experience">
              <div>
                {" "}
                {experience.degree}, {experience.school}
              </div>
              <span className="buttons">
                <button onClick={(e) => handleEdit(e, experience)}>Edit</button>
                <button onClick={(e) => handleDelete(e, experience.id)}>
                  Delete
                </button>
              </span>
            </div>
          ))}
      </ul>
    </>
  );
}
