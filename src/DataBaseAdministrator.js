import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Database Administrator Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Database Administrator Learning Path</h2>
        <p>Start your journey to become a proficient Database Administrator by following this structured learning path.</p>
        <h3>Database Administrator:</h3>
        <p>A Database Administrator (DBA) is a professional responsible for the design, implementation, maintenance, 
           and repair of an organization's database systems. They focus on ensuring the security, availability, 
           and performance of databases.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Database Management Systems (e.g., MySQL, PostgreSQL, SQL Server)</li>
          <li>Database Design and Modeling</li>
          <li>SQL Programming</li>
          <li>Database Security and Backup</li>
          <li>Performance Tuning and Optimization</li>
          <li>Data Migration and Integration</li>
          <li>Disaster Recovery Planning</li>
          <li>Cloud Database Services</li>
        </ul>
      </div>
      <img src="Database Administrator.jpg" alt="Database Administrator" />
    </div>
  );
}

export default IosDeveloper;
