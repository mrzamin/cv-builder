import { useState } from "react";
import InputSection from "./InputSection";
import editIcon from "/public/icons/edit.svg";
import trashIcon from "/public/icons/delete.svg";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  name: "",
};

export function SkillsForm({ skills, setSkills }) {
  const [skill, setSkill] = useState(initialState);

  function handleInput(e) {
    e.preventDefault();
    const newSkill = { ...skill, name: e.target.value };
    setSkill(newSkill);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const uniqueID = uuidv4();
    skill.id = uniqueID;
    setSkills([...skills, skill]);
    setSkill(initialState);
  }

  function handleEdit(e, skill) {
    e.preventDefault();
    setSkill(skill);
    setSkills(skills.filter((item) => item.id !== skill.id));
  }

  function handleDelete(e, id) {
    e.preventDefault();
    setSkills(skills.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="form-container">
        <InputSection
          type="text"
          name="skill"
          label="Skill"
          id="skill"
          value={skill.name}
          onChange={(e) => handleInput(e)}
        ></InputSection>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul className="skill-form-list">
        {skills &&
          skills.map((skill) => (
            <div key={skill.id} className="skill-item">
              <div>{skill.name}</div>
              <span className="buttons">
                <button onClick={(e) => handleEdit(e, skill)}>
                  <img src={editIcon} alt="edit"></img>
                </button>
                <button onClick={(e) => handleDelete(e, skill.id)}>
                  <img src={trashIcon} alt="delete"></img>
                </button>
              </span>
            </div>
          ))}
      </ul>
    </>
  );
}
