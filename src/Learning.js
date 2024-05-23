import React from 'react';
import { Link } from 'react-scroll';
import './Learning.css';
import Companies from './Companies'; // Assuming Companies is a component you've created
import About from './About'; // Assuming About is a component you've created
import Contact from './Contact'; // Assuming Contact is a component you've created

const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className='homepage' style={{ backgroundImage: 'url(bg1.avif)'}}>
        <nav className="navbar">
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <ul className="nav-links">
            <li><Link to="homepage" smooth={true} duration={500}>Home</Link></li>
            <li><Link to="companies" smooth={true} duration={500}>Companies</Link></li>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact Us</Link></li>
          </ul>
        </nav>
        <div className='homecontent'>
          <h1>Welcome to LearnPath</h1>
          <h2>Unlock Your Potential with Company-Based Learninge</h2>
          <p>Explore career opportunities and learn the skills you need to succeed.</p>
          <p>Choose a company, explore its roles, and</p> 
          <p>follow a structured learning path tailored to your chosen career.</p>
        </div>
      </div>
      
      <section id="companies" className="section companies">
        <Companies />
      </section>
      
      <section id="about" className="section about">
        <About />
      </section>
      
      <section id="contact" className="section contact">
        <Contact />
      </section>
      <footer>
        <p>&copy; 2024 Learning App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
