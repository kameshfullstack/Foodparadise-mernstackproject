import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation: Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful
        setRegistrationSuccess(true);
        setError(null);
        console.log('Registration successful!');

        // Redirect to the login page using useNavigate
        navigate('/login');
      } else {
        // Handle registration error
        const errorMessage = await response.text();
        setError(errorMessage);
        setRegistrationSuccess(false);
        console.error('Registration failed:', errorMessage);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Container className="container-R" >
      <Row className="image">
        <Col md={6}>
          <div className="foodparadise-R">
            <img src='\images\food-paradise 4.jpg' alt='' />
          </div>
          <div className="description-R">
            <h3>foodparadise helps you to order the food easily<br></br> within a minute in your neighbour restaurants.</h3>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center-R">
        <Col md={6}>
          <div className="Registration form">
            <h3>Registration Form</h3>
            <Form id="registrationForm" onSubmit={handleSubmit}>
              <Form.Group controlId="username">
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </Form.Group>
              <Form.Group controlId="email">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </Form.Group>

              <Form.Group controlId="confirmPassword">
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                />
              </Form.Group>

              {error && <div className="alert alert-danger">{error}</div>}

              <div className="button-container-R">
                <Button type="submit" variant="primary">
                  Register
                </Button>
              </div>

              {registrationSuccess && (
                <>
                  <div className="alert alert-success mt-3">Registration successful! You can now log in.</div>
                  <Login />
                </>
              )}
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RegistrationForm;
