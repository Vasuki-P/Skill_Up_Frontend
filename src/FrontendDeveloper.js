import React from 'react';
import './IosDeveloper.css';

function FrontendDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Frontend Developer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Frontend Developer Learning Path</h2>
        
        <p>Start your journey to become a proficient Frontend Developer by following this structured learning path.</p>
        <h3>Frontend Developer:</h3>
        <p>Frontend developers create the visual and interactive aspects of websites and web applications. 
            They work with HTML, CSS, and JavaScript to build user-friendly interfaces.</p>

        <h3>Learning Modules</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Responsive Design</li>
            <li>Version Control (Git)</li>
            <li>CSS Frameworks (Bootstrap, Tailwind CSS)</li>
            <li>JavaScript Libraries (jQuery)</li>
            <li>JavaScript Frameworks (React, Vue, Angular)</li>
            <li>Build Tools (Webpack, Babel)</li>
            <li>Package Managers (NPM, Yarn)</li>
            <li>APIs and AJAX (Fetch API, Axios)</li>
            <li>State Management (Redux, Context API)</li>
            <li>Testing (Jest, Enzyme, React Testing Library)</li>
            <li>Deployment (Netlify, Vercel, GitHub Pages)</li>
        </ul>
      </div>
      <img src="Frontend Developer.jpg" alt="Frontend Developer" />
    </div>
  );
}

export default FrontendDeveloper;
