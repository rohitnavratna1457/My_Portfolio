import React from 'react';
import './SkillSets.css';

const skills = [
  { name: 'C' },
  { name: 'C++' },
  { name: 'Java' },
  { name: 'Python' },
  { name: 'React' },
  { name: 'Django' },
  { name: 'Html' },
  { name: 'Html 5' },
  { name: 'Css' },
  { name: 'Java Script' },
  { name: 'Bootsrap' },
  { name: 'Node JS' },
  { name: 'Sql' },
  { name: 'Mysql' },
  { name: 'Oracle' },
  { name: 'Postgreysql' },
  { name: 'Aws' },
  { name: 'Kubernates' },
  { name: 'Genkins' },
  { name: 'Teraform' },
  { name: 'Dockers' }
];

const SkillSets = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">Professional Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
            <p>{skill.name.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSets;
