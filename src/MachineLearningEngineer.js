import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Machine Learning Engineer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Machine Learning Engineer Learning Path</h2>
        <p>Start your journey to become a proficient Machine Learning Engineer by following this structured learning path.</p>
        <h3>Machine Learning Engineer:</h3>
        <p>A Machine Learning Engineer is a software professional specialized in designing and implementing machine 
           learning models. They focus on creating algorithms that enable computers to learn from and make predictions 
           based on data, applying techniques from statistics, computer science, and artificial intelligence.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Python Programming Basics</li>
          <li>Statistics and Probability</li>
          <li>Data Preprocessing and Cleaning</li>
          <li>Supervised and Unsupervised Learning</li>
          <li>Deep Learning and Neural Networks</li>
          <li>Model Evaluation and Tuning</li>
          <li>Natural Language Processing (NLP)</li>
          <li>Deployment and Productionization of ML Models</li>
        </ul>
      </div>
      <img src="Machine Learning.jpg" alt="Machine Learning Engineer" />
    </div>
  );
}

export default IosDeveloper;
