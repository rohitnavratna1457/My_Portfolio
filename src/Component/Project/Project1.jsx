import React from 'react';
import './ProjectCards.css'; // Make sure this file has the required CSS
import img from '../Assets/developer.jpg'; // Ensure this path is correct
import Project from '../Project';

const Project1 = () => {
  const projects = [
    {
      title: "Electronic Hub",
      description: " Electronic Hub is a web-based Digital Marketing Service Provide  designed for Public use or small group interactions. It allows users to communicate in real-time, share images, and interact with each other in a virtual space.",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Hospital Management System",
      description: "The Hospital Management System is a web application designed to streamline hospital operations and enhance patient management. It helps manage various aspects of hospital administration, including patient records, appointment scheduling.",
      githubLink: "#",
      demoLink: "#",
    },
    {
      title: "Password Cracking Python",
      description: "The Password Cracking Python project is designed to demonstrate the process of retrieving and analyzing Wi-Fi passwords using Python. The project leverages the netsh wlan show profiles command to extract saved Wi-Fi profiles from a Windows system.",
      githubLink: "#",
      demoLink: "#",
    }
  ];

  return (
    <>  
    <h2> My Recent Work </h2>
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <img src={img} alt={project.title} className="project-image" />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="buttons">
            <a href={Project.githubLink} className="button">GitHub</a> 
            <a href={project.demoLink} className="button">Demo</a> 
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Project1;
