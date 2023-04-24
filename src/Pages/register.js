/** @format */
import '../login.css';
import '../register.css';
import React, { useState } from 'react';
import axios from '../API Pull/axios';

import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    content: '',
    password: '',
    confirmPassword: '',
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [error, setError] = useState('');
  const [userCreated, setUserCreated] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
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
    <>
      {
        <div className='d-flex flex-row login-page-container'>
          <div className='register-form-container d-flex flex-column'>
            <div className=''>
              <img
                className='AppHarvest-logo-style d-flex w-100 mt-5 justify-content-center'
                src='AppHarvest-logo.svg'
                alt='AppHarvest logo in black'
              ></img>
            </div>
            <div className='d-flex flex-column mt-5 register-inputs-container'>
              <div className='d-flex w-100 justify-content-center'>
                <h1 style={{textAlign:'center'}}>We're glad you're here!</h1>
              </div>
              <form onSubmit={handleSubmit}>
              <div className='d-flex w-100 justify-content-center'>
                <div className='d-flex w-100 flex-row first-last-row'>
                  <div className='d-flex w-100 flex-column label-input-center'>
                    <label>First Name</label>
                      <input
                        className='input-style firstname-input-style mt-2 mb-2'
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      ></input>
                  </div>
                  <div style={{marginLeft: '.5rem'}} className='d-flex w-100 flex-column label-input-center'>
                    <label>Last Name</label>
                      <input
                        className='input-style lastname-input-style mt-2 mb-2'
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      ></input>
                  </div>
                  </div>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                <div className='d-flex w-100 flex-column label-input-center'>
                  <label>Email</label>
                    <input
                      className='input-style input-style-email w-100 mt-2 mb-2'
                      type='email'
                      name='email'
                      placeholder='Email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    ></input>
                </div>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                <div className='d-flex w-100 flex-column label-input-center'>
                <label>Password</label>
                  <input
                    className='input-style input-style-password w-100 mt-2 mb-2'
                    type='password'
                    name='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                <div className='d-flex w-100 flex-column label-input-center'>
                <label>Confirm Password</label>
                  <input
                    className='input-style input-style-password w-100 mt-2 mb-2'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  ></input>
                  </div>
                  </div>
                <div className='d-flex justify-content-center'>
                  {!passwordsMatch && <p>Passwords do not match.</p>}
                </div>
                <div style={{marginTop: '.5rem'}} className='d-flex justify-content-center'>
                  <button className='login-button-style' type='submit'>
                    Register
                    <span className='ms-5'>
                      <img
                        className='right-arrow-style'
                        src='arrow-right-solid.svg'
                        alt='right arrow shaped image'
                      />
                    </span>
                  </button>
                </div>
              </form>
              <div className='d-flex w-100 justify-content-center'>
              <p>
                    Already have an account? <Link className='register-link-style' to='/'>Log in</Link>
              </p>
              </div>
            </div>
          </div>
          <div className='image-background-color'>
            <img
              className='w-100 h-100 image-styling'
              src='AppHarvest-Foundation-image.jpg'
              alt='AppHarvest foundation crate image'
            ></img>
          </div>
        </div>
      }
    </>
    /*
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
    */
  );
}

export default RegisterPage;
