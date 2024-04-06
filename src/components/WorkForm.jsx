import { useState } from "react";
import InputSection from "./InputSection";

const initialState = {
  title: "",
  employer: "",
  description: "",
  startMonth: "",
  startYear: "",
  endMonth: "",
  endYear: "",
};

export function WorkForm({ work, setWork }) {
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
    setWork([...work, experience]);
    setExperience(initialState);
  }

  function handleEdit(e, experience) {
    e.preventDefault();
    setExperience(experience);
    setWork(work.filter((item) => item.id !== experience.id));
  }

  function handleDelete(e, id) {
    e.preventDefault();
    setWork(work.filter((item) => item.id !== id));
  }

  return (
    <>
      <div>
        <InputSection
          type="text"
          name="title"
          id="title"
          value={experience.title}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="text"
          name="employer"
          id="employer"
          value={experience.employer}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="number"
          name="startMonth"
          id="startMonth"
          value={experience.startMonth}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="number"
          name="startYear"
          id="startYear"
          value={experience.startYear}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="number"
          name="endMonth"
          id="endMonth"
          value={experience.endMonth}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="number"
          name="endYear"
          id="endYear"
          value={experience.endYear}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul>
        {work &&
          work.map((experience) => (
            <li key={experience.id}>
              {experience.title}
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
