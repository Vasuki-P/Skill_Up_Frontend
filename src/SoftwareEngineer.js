import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Software Engineer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Software Engineer Learning Path</h2>
        <p>Embark on a journey to become a proficient Software Engineer by following this structured learning path.</p>
        <h3>Software Engineer:</h3>
        <p>A Software Engineer is a professional responsible for designing, developing, and testing software 
           applications. They focus on applying engineering principles to create reliable, efficient, and 
           maintainable software solutions.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Programming Fundamentals</li>
          <li>Data Structures and Algorithms</li>
          <li>Object-Oriented Programming</li>
          <li>Software Development Lifecycle</li>
          <li>Database Management</li>
          <li>Web Development (Frontend and Backend)</li>
          <li>Version Control (e.g., Git)</li>
          <li>Testing and Debugging</li>
        </ul>
      </div>
      <img src="Software Engineering.jpg" alt="Software Engineer" />
    </div>
  );
}

export default IosDeveloper;