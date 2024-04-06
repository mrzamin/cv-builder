import { useState } from "react";
import "./styles/App.css";
import Panel from "./components/Panel";

import ContactForm from "./components/ContactForm";
import { EducationForm } from "./components/EducationForm";
import { WorkForm } from "./components/WorkForm";
import { SkillsForm } from "./components/SkillsForm";

import {
  Preview,
  ContactSection,
  WorkSection,
  SkillsSection,
  EducationSection,
} from "./components/Preview";

function App() {
  const [contactInfo, setContactInfo] = useState({});

  const [education, setEducation] = useState([]);

  const [skills, setSkills] = useState([]);

  const [work, setWork] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="app-container">
        <form action="#" className="form-section">
          <Panel
            title="Contact Info"
            isActive={activeIndex === 0}
            onShow={() => setActiveIndex(0)}
          >
            <ContactForm
              contactInfo={contactInfo}
              setContactInfo={setContactInfo}
            ></ContactForm>
          </Panel>

          <Panel
            title="Work"
            isActive={activeIndex === 3}
            onShow={() => setActiveIndex(3)}
          >
            <WorkForm work={work} setWork={setWork}></WorkForm>
          </Panel>

          <Panel
            title="Education"
            isActive={activeIndex === 1}
            onShow={() => setActiveIndex(1)}
          >
            <EducationForm
              education={education}
              setEducation={setEducation}
            ></EducationForm>
          </Panel>

          <Panel
            title="Skills"
            isActive={activeIndex === 2}
            onShow={() => setActiveIndex(2)}
          >
            <SkillsForm skills={skills} setSkills={setSkills}></SkillsForm>
          </Panel>
        </form>

        <Preview>
          <ContactSection contactInfo={contactInfo} />
          <WorkSection work={work} />
          <SkillsSection skills={skills}></SkillsSection>
          <EducationSection education={education} />
        </Preview>
      </div>
    </>
  );
}

export default App;
