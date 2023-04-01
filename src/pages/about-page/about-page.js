import React from 'react';
import './aboutpage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>About Our Project</h2>
      <p>
        Our Federated Learning Platform is a cutting-edge decentralized solution
        for collaborative machine learning. It enables multiple parties to
        contribute to a global model while keeping their data secure and
        private.
      </p>

      <h3>Our Team</h3>
      <div className="team-container">
        {/* Add team member cards */}
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.photo} alt={`${member.name} profile`} />
            <h4>{member.name}</h4>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
