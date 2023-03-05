/** @format */
import './login.css';
import { useState, useRef, useEffect } from 'react';

export const LoginPage = () => {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError('');
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    setEmail('');
    setPassword('');
    setLoggedIn(true);
  };

  return (
    <>
      {loggedIn ? (
        <div>success</div>
      ) : (
        <div className='d-flex flex-row login-page-container'>
          <div className='login-form-container d-flex flex-column'>
            <div className=''>
              <img
                className='AppHarvest-logo-style d-flex w-100 mt-5 justify-content-center'
                src='AppHarvest-logo.svg'
                alt='AppHarvest logo in black'
              ></img>
            </div>
            <div className='d-flex flex-column mt-5 login-inputs-container'>
              <div className='d-flex w-100 justify-content-center'>
                <p ref={errorRef} className='' aria-live='assertive'>
                  {error}
                </p>
                <h1>Welcome Back</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center'>
                  <input
                    className='input-style mt-2 mb-2'
                    type='email'
                    placeholder='email'
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  ></input>
                </div>
                <div className='d-flex justify-content-center'>
                  <input
                    className='input-style mt-2 mb-2'
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  ></input>
                </div>
                <div className='d-flex justify-content-center'>
                  <button className='login-button-style' type='submit'>
                    Login
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
};
