/** @format */
import '../login.css';
import '../forgotPassword.css';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom'
function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: ''
  });
  const [submittedStatus, setSubmittedStatus] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    //Server Call to check if email is valid before setting submitted status to true goes here
    setSubmittedStatus(() => (true));
  };

  const handlePasswordInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'password') {
      setNewPassword(value);
      if (value !== newPasswordConfirm) {
        setPasswordError('Password and Confirm Password do not match');
      } else {
        setPasswordError('');
      }
    } else if (name === 'confirmPassword') {
      setNewPasswordConfirm(value);
      if (value !== newPassword) {
        setPasswordError('Password and Confirm Password do not match');
      } else {
        setPasswordError('');
      }
    }
  }


  const handleSubmitPassword = (event) => {
    event.preventDefault();
    //Server Call to actually change the password goes here
    //Will need to navigate to either content page or back to login page after submitting (for now its login)
    navigate('/');
  };

  return (
    <>
      {
        <div className='d-flex flex-row forgot-page-container'>
          <div className='forgot-form-container d-flex flex-column'>
            <div className=''>
              <img
                className='AppHarvest-logo-style d-flex w-100 mt-5 justify-content-center'
                src='AppHarvest-logo.svg'
                alt='AppHarvest logo in black'
              ></img>
            </div>
            <div className='d-flex flex-column mt-5 forgot-inputs-container'>
              <div className='d-flex w-100 justify-content-center'>
                <h1 style={{textAlign:'center'}}>We're here to help!</h1>
              </div>
              {!submittedStatus ? 
              <>
                <div className='d-flex w-100 justify-content-center'>
                  <h6 style={{textAlign:'center'}}>We'll send you instructions on how to reset your password</h6>
                </div>
                <form onSubmit={handleSubmitEmail}>
                <div className='d-flex w-100 justify-content-center'>
                  <div className='d-flex w-100 flex-column label-input-center'>
                    <label>Email</label>
                      <input
                        className='input-style w-100 input-style-email mt-2 mb-2'
                        type='email'
                        name='email'
                        placeholder='Email'
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
            </> : 
            <>
              <div className='d-flex w-100 justify-content-center'>
                <h6>Please enter and confirm your new password.</h6>
              </div>
              <form onSubmit={handleSubmitPassword}>
              <div className='d-flex w-100 justify-content-center'>
                <div className='d-flex w-100 flex-column label-input-center'>
                  <label>Password</label>
                  <input
                    className='input-style w-100 input-style-password mt-2 mb-2'
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={(e) => handlePasswordInputChange(e)}
                    value={newPassword}
                    required 
                  ></input>
                  <label>Confirm Password</label>
                  <input
                    className='input-style w-100 input-style-password mt-2 mb-2'
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    onChange={(e) => handlePasswordInputChange(e)}
                    value={newPasswordConfirm}
                    required 
                    ></input>
                    {passwordError ? <label style={{color: 'red'}}>{passwordError}</label> : ""}
                </div>
              </div>
              <div className='d-flex justify-content-center'>
                <button disabled={passwordError} className='login-button-style' type='submit'>
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
          </>}
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
  );
}

export default ForgotPasswordPage;