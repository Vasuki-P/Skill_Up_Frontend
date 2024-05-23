import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Full-Stack Developer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Full-Stack Developer Learning Path</h2>
        <p>Start your journey to become a proficient Full-Stack developer by following this structured learning path.</p>
        <h3>Full-Stack Developer:</h3>
        <p>A Full-Stack Developer is a versatile software professional who is proficient in both frontend and backend 
           development. They work on creating seamless and robust web applications by integrating various technologies 
           and frameworks for the client-side and server-side.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>HTML, CSS, and JavaScript Basics</li>
          <li>Frontend Frameworks (React, Angular, or Vue)</li>
          <li>Backend Development (Node.js, Express, or Django)</li>
          <li>Database Management (SQL and NoSQL)</li>
          <li>RESTful APIs and Web Services</li>
          <li>Authentication and Authorization</li>
          <li>Version Control with Git</li>
          <li>Deployment and DevOps</li>
        </ul>
      </div>
      <img src="Fullstack Developer.jpg" alt="Full-Stack Developer" />
    </div>
  );
}

export default IosDeveloper;
