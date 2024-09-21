import React from 'react';
// import './Home.css'; // Make sure to include your CSS file
import '../AboutPage/IntroSection.css'
import Developer from '../Assets/developer.jpg'
import SkillSets from './SkillSets';
import Tools from './Tools';
const IntroSection = () => {
  return (
    <>
    <div className="intro-container">
      <div className="intro-text">
        <h2>Know Who I'M</h2>
        <p>
          Hi Everyone, I am <span className="name-highlight">Rohit Navratna</span> from{' '}
          <span className="name-highlight">Chhattisgarh, India</span>.
        </p>
        <p>I am currently  Python Full Stack Developer Yashvitech pvt Ltd. </p>
        <p>
          I have completed Integrated  (MCA) in Computer Science  at Kalinga Universityi Raipur .
        </p>
        <p>Apart from coding, some other activities that I love to do!</p>
        <ul>
          <li>Playing Games</li>
          <li>Writing Tech Blogs</li>
          {/* <li>Travelling</li> */}
        </ul>
      </div>
      <div className="intro-image">
        <img src={ Developer} alt="Developer at work" />
      </div> 
       
    </div>
    <SkillSets/> 
    <Tools/>
    </>
  );
};

export default IntroSection;
