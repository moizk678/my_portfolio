// src/components/Contact.js
import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="text-center">Contact</h2>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group>

          <Form.Group controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter description" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <div className="social-links text-center">
          <a href="https://twitter.com" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
