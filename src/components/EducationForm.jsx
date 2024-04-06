import { useState } from "react";
import InputSection from "./InputSection";

const initialState = {
  degree: "",
  school: "",
  gradMonth: "",
  gradYear: "",
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
      <div>
        <InputSection
          type="text"
          name="degree"
          id="degree"
          value={experience.degree}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="text"
          name="school"
          id="school"
          value={experience.school}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="number"
          name="gradMonth"
          id="gradMonth"
          value={experience.gradMonth}
          onChange={(e) => handleInput(e)}
        ></InputSection>

        <InputSection
          type="number"
          name="gradYear"
          id="gradYear"
          value={experience.gradYear}
          onChange={(e) => handleInput(e)}
        ></InputSection>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul>
        {education &&
          education.map((experience) => (
            <li key={experience.id}>
              {experience.degree}
              <span className="buttons">
                <button onClick={(e) => handleEdit(e, experience)}>Edit</button>
                <button onClick={(e) => handleDelete(e, experience.id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}
