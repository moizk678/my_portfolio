// src/components/Introduction.js
import React from 'react';
import './Introduction.css';
import profile from '../images/20240328_134909.jpg';

const Introduction = () => {
  return (
    <section id="home" className="intro-section">
      <div className="container text-center">
        <div className="profile-pic-container">
          <img src={profile} alt="Profile" className="profile-pic" />
        </div>
        <h1>Hi! I am Moiz Khan</h1>
        <p className="lead">I'm a Computer Science student with intermidiate knowledge in diffrent domains.</p>
      </div>
    </section>
  );
};

export default Introduction;
