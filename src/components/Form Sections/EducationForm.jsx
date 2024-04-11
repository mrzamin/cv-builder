import { useState } from "react";
import InputSection from "./InputSection";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  degree: "",
  school: "",
  graduationDate: "",
  details: "",
  id: "",
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
    experience.id = uuidv4();
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
      <div className="form-container education-form">
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

        <label htmlFor="graduationDate">Graduation Date:</label>
        <input
          type="month"
          name="graduationDate"
          label="Graduation"
          id="graduationDate"
          value={experience.graduationDate}
          onChange={(e) => handleInput(e)}
        ></input>

        <label htmlFor="details">Details:</label>

        <textarea
          type="text"
          name="details"
          id="details"
          rows="3"
          value={experience.details}
          onChange={(e) => {
            handleInput(e);
          }}
        ></textarea>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul className="education-experience-list">
        {education &&
          education.map((experience) => (
            <div key={experience.id} className="education-experience">
              <div>
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
