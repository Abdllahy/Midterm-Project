import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Custom CSS for additional styling

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-5 pb-3">
      <Container>
        <Row>
          <Col md={3}>
            <h5>Zellij</h5>
            <p>Creating beautiful spaces with handcrafted Zellij tiles that bring elegance and art to your home.</p>
            <div className="social-icons mt-3">
              <a href="https://facebook.com" className="text-white me-2"><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
              <a href="https://twitter.com" className="text-white me-2"><FontAwesomeIcon icon={faTwitter} size="lg" /></a>
              <a href="https://instagram.com" className="text-white me-2"><FontAwesomeIcon icon={faInstagram} size="lg" /></a>
              <a href="https://linkedin.com" className="text-white"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a>
            </div>
          </Col>
          <Col md={3}>
            <h5>Explore</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/products" className="text-white">Products</a></li>
              <li><a href="/gallery" className="text-white">Gallery</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p>
              Zellij Company<br />
              123 Main Street, Suite 100<br />
              City, State, ZIP Code<br />
              Phone: (123) 456-7890<br />
              Email: info@zellij.com
            </p>
          </Col>
          <Col md={3}>
            <h5>Subscribe to Our Newsletter</h5>
            <Form className="d-flex">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2"
              />
              <Button variant="primary" type="submit">Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col md={12} className="text-center">
            <hr className="bg-white" />
            <p>&copy; {new Date().getFullYear()} Zellij. All rights reserved. | Privacy Policy | Terms of Service</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
