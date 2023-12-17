// Register.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setMessage('Please provide email and password');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        setMessage('Registration successful');
        console.log('Registration successful');
      } else {
        setMessage('Registration failed');
        console.error('Registration failed');
      }
    } catch (error) {
      setMessage('An error occurred');
      console.error('Error:', error);
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Register</button>
        {message && <div className={`message ${message.includes('failed') ? 'error' : 'success'}`}>{message}</div>}
      </form>
    </div>
  );
}

export default Register;
