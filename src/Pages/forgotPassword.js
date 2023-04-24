/** @format */
import '../Styling/login.css';
import '../Styling/register.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { Axios } from 'axios';
function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: ''
  });
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [submittedStatus, setSubmittedStatus] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    Navigate('/');
    // handle registration logic here
  };
  const handlePasswordInputChange = async (e) => {

  }
  const handleSubmitPassword = async (e) => {

  }

  return (
    <>
      {submittedStatus ? (
        navigate('/contentPage')
      ) : (
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
                <h1>We're here to help!</h1>
              </div>
              <div className='d-flex w-100 justify-content-center'>
                <h6>
                  We'll send you instructions on how to reset your password
                </h6>
              </div>
              <form onSubmit={handleSubmitEmail}>
                <div className='d-flex justify-content-center'>
                  <div className='d-flex flex-column label-input-center'>
                    <label>Email</label>
                    <input
                      className='input-style mt-2 mb-2'
                      type='email'
                      name='email'
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='login-button-style' type='submit'>
                    Send
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
            </div>
          </div>
          {submittedStatus ? (
            <>
              <div className='d-flex w-100 justify-content-center'>
                <h6>Please enter and confirm your new password.</h6>
              </div>
              <form onSubmit={handleSubmitPassword}>
                <div className='d-flex justify-content-center'>
                  <div className='d-flex flex-column label-input-center'>
                    <label>Password</label>
                    <input
                      className='input-style input-style-password mt-2 mb-2'
                      type='password'
                      name='password'
                      placeholder='Password'
                      onChange={(e) => handlePasswordInputChange(e)}
                      value={newPassword}
                      required
                    ></input>
                    <label>Confirm Password</label>
                    <input
                      className='input-style input-style-password mt-2 mb-2'
                      type='password'
                      name='confirmPassword'
                      placeholder='Confirm Password'
                      onChange={(e) => handlePasswordInputChange(e)}
                      value={newPasswordConfirm}
                      required
                    ></input>
                    {passwordError ? (
                      <label style={{ color: 'red' }}>
                        {passwordError}
                      </label>
                    ) : (
                      ''
                    )}
                  </div>
                </div>
                <div className='d-flex justify-content-center'>
                  <button
                    disabled={passwordError}
                    className='login-button-style'
                    type='submit'
                  >
                    Update Password
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
            </>
          ) : (
            ''
          )}
          <div className='image-background-color'>
            <img
              className='w-100 h-100 image-styling'
              src='AppHarvest-Foundation-image.jpg'
              alt='AppHarvest foundation crate image'
              ></img>
            </div>
          </div>
        )}
      </>
    );
  }
                 
                      

export default ForgotPasswordPage;
