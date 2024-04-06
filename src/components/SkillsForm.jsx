import { useState } from "react";
import InputSection from "./InputSection";

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
    const uniqueID = Date.now().toString();
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
      <div>
        <InputSection
          type="text"
          name="skill"
          id="skill"
          value={skill.name}
          onChange={(e) => handleInput(e)}
        ></InputSection>
        <button onClick={(e) => handleSubmit(e)}>Add</button>
      </div>

      <ul>
        {skills &&
          skills.map((skill) => (
            <li key={skill.id}>
              {skill.name}
              <span className="buttons">
                <button onClick={(e) => handleEdit(e, skill)}>Edit</button>
                <button onClick={(e) => handleDelete(e, skill.id)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
      </ul>
    </>
  );
}
