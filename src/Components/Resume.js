import React from "react";

const Resume = ({ data }) => {
  if (data) {
    var skillmessage = data.skillmessage;
    var education = data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    // Separate frontend and backend skills
    var frontendSkills = data.skills
      .filter(skill => skill.type === "frontend")
      .map(function (skills) {
        return (
          <li key={skills.name}>
            <em>{skills.name}</em>
          </li>
        );
      });

    var backendSkills = data.skills
      .filter(skill => skill.type === "backend")
      .map(function (skills) {
        return (
          <li key={skills.name}>
            <em>{skills.name}</em>
          </li>
        );
      });
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{education}</div>
          </div>
        </div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <p>{skillmessage}</p>

          <div className="skills">
            <h3>Frontend</h3>
            <ul>{frontendSkills}</ul>

            <h3>Backend</h3>
            <ul>{backendSkills}</ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
