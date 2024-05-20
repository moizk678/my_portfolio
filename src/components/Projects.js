// src/components/Projects.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import project1Image from '../images/Screenshot 2024-05-20 152842.png'; 
import project2Image from '../images/Screenshot 2024-05-20 153356.png';
import project3Image from '../images/Screenshot 2024-05-20 153839.png';
import './Projects.css'; // Ensure the CSS file is imported

function Projects() {
  const projects = [
    {
      title: 'Decision tree implementation on IRIS Dataset',
      description: 'In this project, a decision tree algorithm is implemented to classify the species of iris flowers based on the famous IRIS dataset. The dataset includes 150 samples from three species of iris flowers (Setosa, Versicolor, and Virginica), with four features measured for each sample: sepal length, sepal width, petal length, and petal width.',
      image: project1Image,
    },
    {
      title: 'Quantum Machine Learning(QML) for data classificationand clustering',
      description: 'In this project, quantum machine learning techniques are applied to classify and cluster data, leveraging the principles of quantum computing to enhance computational efficiency and performance',
      image: project2Image,
    },
    {
      title: 'Analysis on Mock Cencus Data',
      description: 'In this project, various data analysis techniques are applied to mock census data to extract meaningful insights about the population.',
      image: project3Image,
    },
  ];

  return (
    <Container id="projects" className="projects-section">
      <h2 className="text-center">My Projects</h2>
      <Row className="flex-column align-items-center">
        {projects.map((project, index) => (
          <Col md={8} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={project.image}
                className="card-img-top"
              />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Projects;
