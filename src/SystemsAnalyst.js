import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Systems Analyst Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Systems Analyst Learning Path</h2>
        <p>Begin your journey to become a proficient Systems Analyst by following this structured learning path.</p>
        <h3>Systems Analyst:</h3>
        <p>A Systems Analyst is a professional who analyzes and designs information systems to solve business 
           problems. They focus on understanding user requirements and translating them into technical solutions.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Systems Analysis and Design</li>
          <li>Requirement Gathering and Documentation</li>
          <li>Database Management</li>
          <li>Programming Concepts</li>
          <li>System Integration and Implementation</li>
          <li>Quality Assurance and Testing</li>
          <li>Project Management</li>
          <li>Business Process Modeling</li>
        </ul>
      </div>
      <img src="System Analyst.jpg" alt="Systems Analyst" />
    </div>
  );
}

export default IosDeveloper;
