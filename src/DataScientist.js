import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Data Scientist Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Data Scientist Learning Path</h2>
        <p>Start your journey to become a proficient Data Scientist by following this structured learning path.</p>
        <h3>Data Scientist:</h3>
        <p>A Data Scientist is a professional who uses scientific methods, algorithms, and systems to extract 
           insights and knowledge from structured and unstructured data. They focus on analyzing complex data 
           to help organizations make informed decisions.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Statistics and Probability</li>
          <li>Data Cleaning and Preprocessing</li>
          <li>Machine Learning Techniques</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Big Data Technologies (e.g., Hadoop, Spark)</li>
          <li>Data Visualization</li>
          <li>Experimental Design and A/B Testing</li>
          <li>Domain Knowledge (e.g., Healthcare, Finance)</li>
        </ul>
      </div>
      <img src="Data Scientist.jpg" alt="Data Scientist" />
    </div>
  );
}

export default IosDeveloper;
