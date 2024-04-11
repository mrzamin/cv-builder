import moment from "moment";

//Format date from YYYY-MM to MM-YYYY:
function formatDate(dateString) {
  let parts = dateString.split("-");
  return parts[1] + "/" + parts[0];
}

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
      <h4>Work Experience</h4>

      {work &&
        work.map((item) => {
          return (
            <div key={item.id}>
              <div className="work-section-one">
                <div>
                  <p>{item.title}, </p>
                  <p> {item.employer} </p>
                </div>
                <p>
                  {formatDate(item.start)} - {formatDate(item.end)}
                </p>
              </div>
              import import
              <div className="work-section-two">
                <li>{item.responsibilities}</li>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export function EducationSection({ education }) {
  return (
    <div className="education-section">
      <h4>Education</h4>

      {education &&
        education.map((item) => {
          return (
            <div key={item.id}>
              <div className="education-section-one">
                <div>
                  <p>{item.degree},</p>
                  <p> {item.school} </p>
                </div>
                <p>{`${item.graduationDate}`}</p>
              </div>

              <div className="education-section-two">
                <li>{item.details}</li>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export function SkillsSection({ skills }) {
  return (
    <div className="skills-section">
      <h4>Skills</h4>

      <ul className="skill-list">
        {skills &&
          skills.map((item) => {
            return (
              <li key={item.id} className="skill">
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
}
