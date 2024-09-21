import React from 'react';
import './SkillSets.css'; 

const skills = [
  { name: 'C',  }, 
  { name: 'C++',  },
  { name: 'Java',  },
  { name: 'Python',  },
  { name: 'React',  },
  { name: 'Django', },
  { name: 'Html', },
  { name: 'Html 5', },
  { name: 'Css', },
  { name: 'Js', },
  { name: 'Bootsrap',  },
  { name: 'Node JS', },
];

const SkillSets = () => {
  return (
    <>
      <h2 style={{ textAlign: 'center' }}>Professional Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {/* <img src={skill.image} alt={skill.name} /> */}
            <p>{skill.name}</p> {/* Optionally display the name of the skill */}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillSets;
