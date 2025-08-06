// src/components/Home.js
import React from 'react';
import './Home.css';
import developerImage from './Assets/Dev.jpg';
import Myself from './Myself';


const Home = () => {
  const handleDownloadResume = () => {
    // Replace 'resume.pdf' with the path to your actual resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1XFeGemYwTnT8xEnHKflPwb8vHH33aJ_K/view?usp=drive_link';
    link.download = 'Rohit_2.pdf';
    link.click();
  };

  return (
    <>
      <div className="intro-container">
        <div className="intro-text">
          <p>Hi There! <span role="img" aria-label="wave">👋</span></p>
          <h1>I'M <span className="name-highlight">Rohit Navratna</span></h1> 
          <h2>Python Full Stack Developer<span className="cursor">|</span></h2>
        </div> 
        <div className="button-container">
          <button className="download-btn" onClick={handleDownloadResume}>
            Download Resume
          </button>
          <button className="hire-btn">
            Hire Me
          </button>
        </div>
        <div className="intro-image">
          <img src={developerImage} alt="Developer at desk" />
        </div>
      </div>
      <Myself />
     
    </>
  );
};

export default Home;
