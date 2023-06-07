import React, { useState } from 'react';
import axios from "axios";
import './login.css';
import { BaseURL } from '../../constants';

const Login = () => {
  const [uwinid, setUwinID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BaseURL}login`;
    const config = {
      headers: {
        'content-type': 'application/json',
      },
    };
    const body = {
      uwinid: uwinid,
      password: password,
    }
    axios.post(url, body, config).then((response) => {
      if (response.data.success === 'false') {
        setError(response.data.message)
        setUwinID('')
        setPassword('')
      } else {
        window.sessionStorage.setItem("username", response.data.username);
        window.location.href = '/home'
        setError('')
      }
    }, (error) => {
      console.log(error);
    });


  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            id="uwinid"
            placeholder='Email Address'
            value={uwinid}
            onChange={(e) => setUwinID(e.target.value)}
            pattern="[a-z0-9._%+-]+@uwindsor\.ca$"
            required
          />
          <input
            type="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
      {/* <footer className="footer">
        <div className="soicon">
          <ul className="icon-list">
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.uwindsor.ca/publicaffairs/306/social-media">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
          <p>Contact us</p>
          <p>About us</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Login;