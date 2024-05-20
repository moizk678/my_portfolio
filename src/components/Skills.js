// src/components/Skills.js
import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Quantum Computing', level: 90 },
    { name: 'Machine Learning', level: 55 },
    { name: 'Web development', level: 40 },
    { name: 'SQL', level: 95 },
  ];

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="text-center">Skills</h2>
        <Row>
          {skills.map((skill, index) => (
            <Col md={4} key={index} className="my-2">
              <h4>{skill.name} <Badge className="skill-badge">{skill.level}%</Badge></h4>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
