import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Cloud Engineer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Cloud Engineer Learning Path</h2>
        <p>Begin your journey to become a proficient Cloud Engineer by following this structured learning path.</p>
        <h3>Cloud Engineer:</h3>
        <p>A Cloud Engineer is a professional responsible for designing, implementing, and maintaining cloud 
           infrastructure and services. They focus on leveraging cloud technologies to ensure scalability, 
           reliability, and security of applications and systems.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Cloud Computing Concepts</li>
          <li>Cloud Service Providers (e.g., AWS, Azure, Google Cloud)</li>
          <li>Infrastructure as Code (e.g., Terraform, CloudFormation)</li>
          <li>Containers and Orchestration (e.g., Docker, Kubernetes)</li>
          <li>Networking and Security in the Cloud</li>
          <li>Serverless Computing</li>
          <li>Monitoring and Logging</li>
          <li>Cost Management</li>
        </ul>
      </div>
      <img src="Cloud Engineer.jpg" alt="Cloud Engineer" />
    </div>
  );
}

export default IosDeveloper;
