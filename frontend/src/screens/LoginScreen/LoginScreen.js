import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

 const LoginScreen = ({history}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true)

      const {data}= await axios.post('/api/users/login',{
        email,password
      },
      config
      )
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
      setLoading(false)
    } catch (error) {
        setError(error.response.data.message)
        setLoading(false)
    }
    
  };

  return (
    <MainScreen title="Login">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading/>}


      <Form className="login-form" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            className="login-form__input"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="login-form__input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-form__button">
          Login
        </Button>
        <Link to="/register" className="login-form__link">
          Don't have an account? Register here
        </Link>
      </Form>
    </MainScreen>
  );
};

export default LoginScreen;
