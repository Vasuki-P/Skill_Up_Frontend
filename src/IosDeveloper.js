import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>iOS Developer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the iOS Developer Learning Path</h2>
        <p>Start your journey to become a proficient iOS developer by following this structured learning path.</p>
        <h3>IOS Developer:</h3>
        <p>An iOS Developer is a software professional specialized in building applications for Apple's iOS platform,
           primarily using Swift and Objective-C. They focus on creating user-friendly interfaces, ensuring app 
           performance, and integrating with various iOS features and services.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Swift Programming Basics</li>
          <li>iOS App Fundamentals</li>
          <li>UI/UX Design for iOS</li>
          <li>Networking in iOS</li>
          <li>Advanced Swift</li>
          <li>Core Data and Persistence</li>
          <li>Testing and Debugging</li>
          <li>Publishing to the App Store</li>
        </ul>
      </div>
      <img src="iOS Developer.jpg" alt="Frontend Developer" />
    </div>
  );
}

export default IosDeveloper;
