import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Product Manager Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Product Manager Learning Path</h2>
        <p>Start your journey to become a proficient Product Manager by following this structured learning path.</p>
        <h3>Product Manager:</h3>
        <p>A Product Manager is a professional responsible for the strategy, development, and marketing of a 
           product or product line. They focus on understanding customer needs, defining product features, 
           and coordinating cross-functional teams to deliver successful products.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Product Management Fundamentals</li>
          <li>Market Research and Analysis</li>
          <li>Product Strategy and Roadmapping</li>
          <li>Agile Development and Scrum</li>
          <li>User Experience Design</li>
          <li>Product Marketing and Launch</li>
          <li>Metrics and Analytics</li>
          <li>Stakeholder Management</li>
        </ul>
      </div>
      <img src="Product Manager.jpg" alt="Product Manager" />
    </div>
  );
}

export default IosDeveloper;
