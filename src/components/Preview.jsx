export function Preview({ children }) {
  return (
    <div className="preview">
      <div className="margin">{children}</div>
    </div>
  );
}

export function ContactSection({ contactInfo }) {
  return (
    <div className="contact-info-section">
      <div className="name">{contactInfo.name}</div>
      <div className="contact-info">
        <div>{contactInfo.email}</div>
        <div>|</div>
        <div>{contactInfo.website}</div>
        <div>|</div>
        <div>{contactInfo.location}</div>
      </div>
    </div>
  );
}

export function WorkSection({ work }) {
  return (
    <div className="work-section">
      <h3>Work Experience</h3>

      {work &&
        work.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <p>{item.startYear}</p>
                <p>{item.startMonth}</p>
              </div>
              <div>
                <p>{item.title}</p>
                <p>{item.employer}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
}

export function EducationSection({ education }) {
  return (
    <div className="education-section">
      <h3>Education</h3>

      {education &&
        education.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <p>{item.degree}</p>
                <p>{item.school}</p>
              </div>
              <div>
                <p>{item.gradMonth}</p>
                <p>{item.gradYear}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
}

export function SkillsSection({ skills }) {
  return (
    <div className="skills-section">
      <h3>Skills</h3>

      {skills &&
        skills.map((item) => {
          return (
            <li key={item.id}>
              <div>
                <p>{item.name}</p>
              </div>
            </li>
          );
        })}
    </div>
  );
}
