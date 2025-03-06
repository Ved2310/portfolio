import React from "react";
import "./talent.css";

const skillsData = [
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "JavaScript","C++","TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    skills: ["ReactJS", "Express.js", "NextJS", "Flutter"],
  },
  {
    title: "Database Technologies",
    skills: ["MongoDB", "MySQL", "Prisma"],
  },
  {
    title: "Other Tools",
    skills: ["Git", "Jira", "Excel"],
  },
  {
    title: "Cloud/Data Analytics",
    skills: ["GCP", "AWS", "Apache Airflow (DAG)"],
  },
];

const Skills = () => {
  return (
    <section id="talent">
      <h1 className="skillTitle">Skills</h1>
      <div className="aboutCards">
        {skillsData.map((section, index) => (
          <div key={index} className="aboutCard">
            <h3>{section.title}</h3>
            <div className="skills-list">
              {section.skills.map((skill, i) => (
                <span key={i} className="skill-item"> {skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
