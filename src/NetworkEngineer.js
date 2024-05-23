import React from 'react';
import './IosDeveloper.css';

function IosDeveloper() {
  return (
    <div className="ios-developer-container">
      <h1>Network Engineer Learning Path</h1>
      <div className="ios-developer-content">
        <h2>Welcome to the Network Engineer Learning Path</h2>
        <p>Embark on a journey to become a proficient Network Engineer by following this structured learning path.</p>
        <h3>Network Engineer:</h3>
        <p>A Network Engineer is a professional responsible for designing, implementing, and maintaining 
           computer networks. They focus on ensuring the stability and security of network infrastructure.</p>
        <h3>Learning Modules</h3>
        <ul>
          <li>Networking Fundamentals</li>
          <li>Network Protocols (e.g., TCP/IP, DNS, DHCP)</li>
          <li>Routing and Switching</li>
          <li>Network Security</li>
          <li>Wireless Networking</li>
          <li>Cloud Networking</li>
          <li>Network Monitoring and Troubleshooting</li>
          <li>Virtualization and Software-Defined Networking (SDN)</li>
        </ul>
      </div>
      <img src="Network Engineer.jpg" alt="Network Engineer" />
    </div>
  );
}

export default IosDeveloper;
