import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section id="profile" className="profile">
      <div className="profile-content">
        <div className="profile-header">
          <h1>Software Engineer</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <div className="profile-description">
          <p>
            Passionate software engineer with expertise in building scalable web applications.
            Experienced in modern JavaScript frameworks, cloud technologies, and agile methodologies.
          </p>
        </div>
        <div className="profile-cta">
          <a href="#contact" className="cta-button">Get in Touch</a>
          <a href="#projects" className="cta-button secondary">View Projects</a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
