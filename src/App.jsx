import { useState } from "react";
import "./styles/index.css";
import Panel from "./components/Form Sections/Panel.jsx";
import ContactForm from "./components/Form Sections/ContactForm.jsx";
import { EducationForm } from "./components/Form Sections/EducationForm.jsx";
import { WorkForm } from "./components/Form Sections/WorkForm.jsx";
import { SkillsForm } from "./components/Form Sections/SkillsForm.jsx";
import { resumeTemplate } from "./assets/resumeTemplate.js";
import {
  Preview,
  ContactSection,
  WorkSection,
  SkillsSection,
  EducationSection,
} from "./components/Resume Preview/Preview.jsx";

function App() {
  const [contactInfo, setContactInfo] = useState(resumeTemplate[0]);
  const [education, setEducation] = useState(resumeTemplate[1]);
  const [skills, setSkills] = useState(resumeTemplate[3]);
  const [work, setWork] = useState(resumeTemplate[2]);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <header>
        <h1>CV Builder</h1>
      </header>
      <div className="app-container">
        <div className="scrollBar">
          <form action="#" className="form-section">
            <Panel
              title="Contact"
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
              title="Skills"
              isActive={activeIndex === 2}
              onShow={() => setActiveIndex(2)}
            >
              <SkillsForm skills={skills} setSkills={setSkills}></SkillsForm>
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
          </form>
        </div>

        <Preview>
          <ContactSection contactInfo={contactInfo} />
          <WorkSection work={work} />
          <SkillsSection skills={skills}></SkillsSection>
          <EducationSection education={education} />
        </Preview>
      </div>

      <footer>© 2024 mrzamin</footer>
    </>
  );
}

export default App;
