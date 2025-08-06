

import React from 'react';
import './ProjectCards.css';
import img from "../Assets/eco.jpg"
import img1 from "../Assets/sadi.jpg"

const Project1 = () => {
  const projects = [
    {
      title: "Community Rishtey",
      description: "Building Digital Bonds, Strengthening Real Connections. At Electronic Hub, we believe digital marketing is more than just numbers and campaigns—it’s about building strong rishtey (relationships). Whether you are a small business, a growing brand, or a community group, our platform helps you connect, share, and grow together in a meaningful way.",
      githubLink: "https://communityrishtey.com/",
      demoLink: "https://communityrishtey.com/",
      image: img1

    },
    {
      title: "Ecommerce Website",
      description: "A fully functional Ecommerce platform designed to provide a seamless shopping experience. It includes product listing, cart management, secure checkout, and user authentication. The project is built with scalability and user-friendly navigation in mind.",
      githubLink: "https://github.com/rohitnavratna1457/Ecommerse_Project.git",
      demoLink: "https://github.com/rohitnavratna1457/Ecommerse_Project.git",
      image: img

    },
    {
      title: "Password Cracking Python",
      description: "The Password Cracking Python project demonstrates the process of retrieving and analyzing Wi-Fi passwords using Python. It leverages the 'netsh wlan show profiles' command to extract saved Wi-Fi profiles from a Windows system, showcasing cybersecurity awareness and password recovery techniques.",
      githubLink: "https://github.com/rohitnavratna1457/Wifi-Possword.git",
      demoLink: "https://github.com/rohitnavratna1457/Wifi-Possword.git",
      image: "https://images.pexels.com/photos/5380659/pexels-photo-5380659.jpeg"

    }
  ];

  return (
    <>
      <h2>My Recent Work</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
           


            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="button">GitHub</a>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="button">Demo</a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project1;
