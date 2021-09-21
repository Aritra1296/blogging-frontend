import React, { useState } from "react";
import axios from "../../axios";
import classes from "./Signup.module.css";
import { Card, Button, Form, Container } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [userDetails, setuserDetails] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    console.log(e);
    const name = e.target.name;
    const value = e.target.value;
    setuserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
    axios
      .post("/users/newUser", userDetails)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setuserDetails({ userName: "", email: "", password: "" });
    alert("New User accorunt created");
    history.push(`/`);
  };

  return (
    <Container className={classes.wrapper}>
      <h1 className='text-center mb-5'>Welcome to BLOGOSPHERE</h1>
      <Card className='mb-2'>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='fw-bold'>User Name:</Form.Label>
              <Form.Control
                type='text'
                placeholder='User Name'
                onChange={handleInput}
                name='userName'
                value={userDetails.userName}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label className='fw-bold'>Email address:</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                onChange={handleInput}
                name='email'
                value={userDetails.email}
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label className='fw-bold'>Password:</Form.Label>
              <Form.Control
                type='password'
                placeholder='Enter password'
                onChange={handleInput}
                name='password'
                value={userDetails.password}
              />
            </Form.Group>

            <Button className='w-100' variant='success' type='submit'>
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <p className='text-center'>
        <h5>
          Already have an account? <Link to='/'>Sign in</Link>
        </h5>
      </p>
    </Container>
  )
};

export default Signup;
