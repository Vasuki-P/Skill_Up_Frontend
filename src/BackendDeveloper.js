import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Backend Developer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Backend Developer Learning Path</h2>
        <p>Start your journey to become a proficient Backend developer by following this structured learning path.</p>
        <h3>Backend Developer:</h3>
        <p>A Backend Developer is a software professional specialized in building and maintaining the server-side of web applications.
           They focus on server logic, database interactions, and ensuring the scalability and performance of applications.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Introduction to Backend Development</li>
          <li>Node.js Fundamentals</li>
          <li>RESTful APIs</li>
          <li>Database Management with SQL and NoSQL</li>
          <li>Authentication and Authorization</li>
          <li>Advanced Node.js Concepts</li>
          <li>Testing and Debugging</li>
          <li>Deployment and Scaling</li>
        </ul>
      </div>
      <img src="Backend Developer.jpg" alt="Backend Developer" />
    </div>
  );
}

export default IosDeveloper;
