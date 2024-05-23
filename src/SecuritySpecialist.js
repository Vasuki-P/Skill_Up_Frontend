import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Cyber Security Specialist Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Cyber Security Specialist Learning Path</h2>
        <p>Embark on a journey to become a proficient Security Specialist by following this structured learning path.</p>
        <h3>Cyber Security Specialist:</h3>
        <p>A Cyber Security Specialist is a professional responsible for protecting an organization's systems and 
           information from cybersecurity threats. They focus on implementing security measures, conducting 
           vulnerability assessments, and responding to security incidents.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Introduction to Cybersecurity</li>
          <li>Network Security</li>
          <li>Secure Software Development</li>
          <li>Identity and Access Management</li>
          <li>Security Compliance and Governance</li>
          <li>Incident Response and Forensics</li>
          <li>Cryptographic Principles</li>
          <li>Security Tools and Technologies</li>
        </ul>
      </div>
      <img src="Cyber Security.jpg" alt="Security Specialist" />
    </div>
  );
}

export default IosDeveloper;
