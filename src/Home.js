import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home .css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Form submitted successfully');
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        console.error('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="home">
      <div className='background' style={{ backgroundImage: 'url(bg1.avif)'}}>
        <header>
          <div className="logo">
            <img src="logo.png" alt="Logo" />
          </div>
          <div className="contact-info">
            <span> +91-9008013304</span>
            <span>info@gmail.com</span>
          </div>
          <div className="enquire-btn">
            <Link to="/signup">
              <button>Login/ Signup</button>
            </Link>
          </div>
        </header>

        <main>
          <section className="hero-section">
            <div className="hero-text">
              <h1 style={{ marginTop: '50px' }}>Welcome to LearnPath</h1>
              <h2>Unlock Your Potential with Company-Based Learning</h2>
              <p>Explore career opportunities and learn the skills you need to succeed.</p>
              <p>Choose a company, explore its roles, and</p>
              <p>follow a structured learning path tailored to your chosen career.</p>

            </div>

          </section>
          <div className="form-container">
            <h2>Get a Free Consultation Today</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
              <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
              <input type="text" placeholder="+91" name="phone" value={formData.phone} onChange={handleChange} required />
              <input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} required />
              <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </main>
      </div>
      <section className="stats">
        <div className="stat-item">
          <h3>100+</h3>
          <p>Companies</p>
        </div>
        <div className="stat-item">
          <h3>5,000+</h3>
          <p>Learners</p>
        </div>
        <div className="stat-item">
          <h3>4.9 / 5</h3>
          <p>Rating on Learning</p>
        </div>
        <div className="stat-item">
          <h3>150+</h3>
          <p>Roles</p>
        </div>
      </section>
    </div>
  );
}

export default App;
