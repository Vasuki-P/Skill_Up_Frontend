import React from 'react';
import './Learning.css'; // Import your CSS file

function AboutUs() {
    return (
        <div className='about'>
            <section className="about-us">
              <h1>About Us</h1>
              <img src="about.webp" alt="Learning App Logo" />
              <p>Welcome to Learning App, your go-to platform for interactive and engaging learning experiences. We are passionate about making education accessible to everyone, anywhere, anytime.</p>
              <p>At Learning App, we believe in the power of learning through exploration and discovery. Our diverse range of courses covers various subjects, from mathematics to arts, catering to learners of all ages and backgrounds.</p>
              <p>Our mission is to empower individuals to achieve their learning goals and unlock their full potential. With expert instructors, personalized learning paths, and innovative teaching methodologies, we strive to make learning enjoyable and effective.</p>
            </section>
        </div>
    );
}

export default AboutUs;
