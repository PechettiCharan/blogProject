// src/components/About.js
import React from 'react';
import './About.css'; // optional for styling

const About = () => {
  return (
    <div className="about-container">
      <h1>About This Blog</h1>
      <p>
        Welcome to our React & Node blog platform. This project is built to help developers 
        publish and share their thoughts with the world. Here, we cover technology, development,
        design, and personal experiences.
      </p>
      <p>
        This app is built using the MERN stack (MongoDB, Express.js, React.js, and Node.js).
      </p>
    </div>
  );
};

export default About;
