import React, { useState } from 'react';
import './Learning.css';

function ContactUs() {
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
      <div className='contactuspage'>
          <div className='contact'>
              <h1>Contact Us</h1>
            <main>
                <section className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>If you have any questions or feedback, feel free to contact us.</p>
                    <ul>
                        <li>Email: contact@learningapp.com</li>
                        <li>Phone: 123-456-7890</li>
                        <li>Address: 123 Learning Street, City, Country</li>
                    </ul>
                </section>
                <section className="contact-form">
                    <h2>Get a Free Consultation Today</h2>
                    <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    <input type="text" placeholder="+91" name="phone" value={formData.phone} onChange={handleChange} required />
                    <input type="text" placeholder="Company" name="company" value={formData.company} onChange={handleChange} required />
                    <textarea placeholder="Your Message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    <button type="submit">Submit</button>
                    </form>
                </section>
            </main>
           </div> 
        </div>
    );
}

export default ContactUs;
