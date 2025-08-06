// import React from 'react';
// import '../AboutPage/IntroSection.css';
// import Developer from '../Assets/developer.jpg';
// import SkillSets from './SkillSets';
// import Tools from './Tools';

// const IntroSection = () => {
//   return (
//     <>
//       <div className="intro-container">
//         {/* Left Side - Image */}
//         <div className="intro-image">
//           <img src={Developer} alt="Developer at work" />
//         </div>

//         {/* Right Side - Text */}
//         <div className="intro-text">
//           <h2>Know Who I Am</h2>
//           <p>
//             Hi Everyone, I am <span className="name-highlight">Rohit Kumar Navratna</span> from{' '}
//             <span className="name-highlight">Chhattisgarh, India</span>.
//           </p>
//           <p>
//             I am a <strong>Python / Django Developer</strong> with over 3 years of experience,
//             currently working as a <strong>Python Developer</strong>.
//           </p>

//           <h3>Professional Summary</h3>
//           <p>
//             Detail-oriented Python Developer with expertise in scalable Django & RESTful
//             applications. Skilled in API design, JWT/OTP authentication, and AWS integration.
//           </p>

//           <h3>Work Experience</h3>
//           <p>
//             <strong>Microland Pvt. Ltd</strong> – Python Developer (3 Years)
//           </p> 

          

//           <h3>Key Skills</h3>
//           <div className="skills-section">
//             <div className="skill-row">
//               <div className="skill-image">
//                 <img src="/icons/python.png" alt="Python" />
//               </div>
//               <div className="skill-info">
//                 <h4>Python / Django</h4>
//                 <p>Backend development with Django ORM & REST Framework.</p>
//               </div>
//             </div>

//             <div className="skill-row">
//               <div className="skill-image">
//                 <img src="/icons/aws.png" alt="AWS" />
//               </div>
//               <div className="skill-info">
//                 <h4>AWS & Cloud</h4>
//                 <p>Integrated S3 storage, cloud deployment, and scaling.</p>
//               </div>
//             </div>

//             <div className="skill-row">
//               <div className="skill-image">
//                 <img src="/icons/docker.png" alt="Docker" />
//               </div>
//               <div className="skill-info">
//                 <h4>Docker & DevOps</h4>
//                 <p>Containerization and Nginx basics for deployments.</p>
//               </div>
//             </div>
//           </div>

//           <h3>Project Highlight</h3>
//           <p>
//             <strong>Community Rishtey</strong> – Matrimonial platform with role-based access,
//             biodata generation, and secure matchmaking.
//             <br />
//             <a href="https://communityrishtey.com" target="_blank" rel="noopener noreferrer">
//               Visit Project
//             </a>
//           </p>
//         </div>
//       </div>

//       <SkillSets />
//       <Tools />
//     </>
//   );
// };

// export default IntroSection;



import React from 'react';
import '../AboutPage/IntroSection.css';
import Developer from '../Assets/developer.jpg';
import SkillSets from './SkillSets';
import Tools from './Tools';

const IntroSection = () => {
  const skills = [
    {
      id: "01",
      title: "Python / Django",
      description: "Backend development with Django ORM & REST Framework.",
      icon: "/icons/python.png",
    },
    {
      id: "02",
      title: "AWS & Cloud",
      description: "Integrated S3 storage, cloud deployment, and scaling.",
      icon: "/icons/aws.png",
    },
    {
      id: "03",
      title: "Docker & DevOps",
      description: "Containerization and Nginx basics for deployments.",
      icon: "/icons/docker.png",
    },
  ];

  return (
    <>
      {/* Intro Section */}
      <div className="intro-container">
        {/* Left Side - Text */}
        <div className="intro-text">
          <h2>Know Who I Am</h2>
          <p>
            Hi Everyone, I am <span className="name-highlight">Rohit Kumar Navratna</span> from{' '}
            <span className="name-highlight">Chhattisgarh, India</span>.
          </p>
          <p>
            I am a <strong>Python / Django Developer</strong> with over 3 years of experience,
            currently working as a <strong>Python Developer</strong>.
          </p>

          <h3>Professional Summary</h3>
          <p>
            Detail-oriented Python Developer with expertise in scalable Django & RESTful
            applications. Skilled in API design, JWT/OTP authentication, and AWS integration.
          </p>

          <h3>Work Experience</h3>
          <p>
            <strong>Microland Pvt. Ltd</strong> – Python Developer (3 Years)
          </p>

          <h3>Project Highlight</h3>
          <p>
            <strong>Community Rishtey</strong> – Matrimonial platform with role-based access,
            biodata generation, and secure matchmaking.
            <br />
            <a href="https://communityrishtey.com" target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="intro-image">
          <img src={Developer} alt="Developer at work" />
        </div>
      </div>

      {/* Key Skills Section */}
      <div className="skills-timeline">
        <h2 className="timeline-title">Key Skills</h2>
        <div className="timeline-line"></div>

        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="skill-badge">{skill.id}</div>
              <div className="skill-info">
                <h4>{skill.title}</h4>
                <p>{skill.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <SkillSets />
      <Tools />
    </>
  );
};

export default IntroSection;
