import React from 'react';
import './Tools.css'
// import cImage from './path/to/cImage.png'; // Update with your actual image path
// import cppImage from './path/to/cppImage.png';
// import javaImage from './path/to/javaImage.png'; // Added missing image for Java
import img from '../Assets/C.jpeg'
const Tools = () => {

  const skills = [
    { 
      name: 'Notepad',
      image: 'img'
   },
    { 
      name: 'Anaconda',
       image: 'img'
     },
    {
       name: 'Sumlime',
       image: 'img' 
    }, 
        // Ensure you add the correct path to the image
    { 
      name: 'Visual Studio',
     image: 'img' 
    },
   
  ];

  return (
    <div>
      <h2 style={{textAlign:"center"}}>Tools I Use</h2>
      <div className="card-container">
        {skills.map((skill, index) => (
          <div key={index} className="card">
            {/* <img src={skill.image} alt={skill.name} className="card-image" /> */}
            <h3 className="card-title">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
