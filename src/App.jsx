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

const initialContactInfo = {
  name: "Marisa Minard",
  email: "marisa@aatg.org",
  website: "URL.com",
  location: "Indianapolis",
};

function App() {
  const [contactInfo, setContactInfo] = useState(initialContactInfo);

  const [education, setEducation] = useState([
    {
      degree: "MBA",
      school: "Harvard",
      gradMonth: 10,
      gradYear: 2024,

      details:
        "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
    },
  ]);

  const [skills, setSkills] = useState([
    { name: "JavaScript" },
    { name: "CSS" },
    { name: "HTML" },
    { name: "React" },
    { name: "Node" },
    { name: "Next.js" },
    { name: "Agile" },
    { name: "Flexbox" },
    { name: "Grid" },
    { name: "Web dev" },
  ]);

  const [work, setWork] = useState([
    {
      title: "Director",
      employer: "AATG",
      start: "10/2024",
      end: "10/2025",
      responsibilities:
        "a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses.",
    },
  ]);

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
