/** @format */

import React, { useState } from 'react';
import axios from '../API Pull/axios';

import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    content: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');
  const [userCreated, setUserCreated] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios({
        method: 'post',
        url:'/About/CreateUser',
        data: {
          email: formData.email,
          name: formData.name,
          ContentCodes: "basic",
          password: formData.password
        }
      })
    }catch (err) {
      if (!err?.response) {
        setError('No server response');
      } else if (err.response?.status === 400) {
        setError('Invalid email or password.');
      } else if (err.response?.status === 401) {
        setError('Unauthorized');
      } else {
        setError('Something went wrong. Please try again later.');
      }
    }
  };

  return (
    <div>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Confirm Password:
          <input
            type='password'
            name='confirmPassword'
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
