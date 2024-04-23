import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const LoginWrapper = styled.div`
  .description {
    font-size: 2rem;
    margin-top: -1%;
    margin-bottom: 40px;
    margin-left: 10%;
  }

  .foodparadise {
    margin-top: 10%;
    margin-bottom: 40px;
    margin-left: 15%;
  }

  .justify-content-md-center {
    background-color: #fff;
    border: none;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    margin: 0;
    margin-left: 58%;
    margin-top: -20%;
    margin-bottom: 1rem;
    padding: 0;
    width: 450px;
    padding-bottom: 30px;
    padding-top: 20px;
    justify-content: center;
    align-items: center;
    height: 60vh;
    display: flex;
    flex-direction: column;
  }
  .form-control {
    margin-bottom: 1rem;  
  }

  .button-container {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  .button-container button {
    margin-bottom: 1rem;
    width: 200px; 
  }
`;

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState("");

  const nav = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    console.log("email:" + email + " password:" + password);

    const request = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch("http://localhost:5000/api/login", request)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Network is not OK");
        }
      })
      .then((json) => {
        localStorage.setItem("token", json.token);
        props.setIsLoggedIn(true);
        nav("/foods");
      })
      .catch((e) => {
        setErrorMsg("Incorrect Credentials");
        console.log("Error occured");
      });
  }

  return (
    <LoginWrapper>
      <div className="foodparadise">
        {" "}
        <img src=" \images\food-paradise 4.jpg" alt="" />{" "}
      </div>
      <div className="description">
        <h3>
          foodparadise helps you to order the food easily<br></br> within a
          minute in your neighbour restaurants.
        </h3>
      </div>
      <Container className="space btw buttons">
        <Row className="justify-content-md-center">
          <Col xs={12} md={8}>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrorMsg("");
                  }}
                />
              </Form.Group>

              <Form.Group controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrorMsg("");
                  }}
                />
              </Form.Group>

              <div className="button-container">
                <Button
                  className="spaced-button"
                  variant="primary"
                  type="submit"
                >
                  Login
                </Button>
                <NavLink to="/Register">
                  <Button
                    className="spaced-button"
                    variant="success"
                    type="submit"
                  >
                    Create new account
                  </Button>
                </NavLink>
                <p>{errorMsg}</p>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </LoginWrapper>
  );
}

export default Login;
