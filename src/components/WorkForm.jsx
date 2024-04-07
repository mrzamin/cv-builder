import { useState } from "react";
import InputSection from "./InputSection";

const initialState = {
  title: "",
  employer: "",
  responsibilities: "",
  start: "",
  end: "",
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
      <div className="form-container work">
        <InputSection
          type="text"
          name="title"
          label="Title"
          id="title"
          value={experience.title}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="text"
          name="employer"
          label="Employer"
          id="employer"
          value={experience.employer}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="month"
          name="start"
          id="start"
          label="Start"
          value={experience.start}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <InputSection
          type="month"
          name="end"
          label="End"
          id="end"
          value={experience.end}
          onChange={(e) => {
            handleInput(e);
          }}
        ></InputSection>

        <label htmlFor="responsibilities">Responsibilities:</label>
        <textarea
          type="text"
          name="responsibilities"
          id="responsibilities"
          rows="3"
          value={experience.responsibilities}
          onChange={(e) => {
            handleInput(e);
          }}
        ></textarea>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul className="work-experience-list">
        {work &&
          work.map((experience) => (
            <div key={experience.id} className="work-experience">
              <div>
                {" "}
                {experience.title}, {experience.employer}
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
