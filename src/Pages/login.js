/** @format */
import '../login.css';
import { useState, useRef, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthProvider';
import axios from '../API Pull/axios';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { setUser } = useContext(AuthContext);
  const emailRef = useRef();
  const errorRef = useRef();
  const navigate = useNavigate();

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

    try {
      const response = await axios({
        method: 'post',
        url: '/login',
        data: {
          email: email,
          password: password,
        },
      });
      if (response.data === true) {
        console.log(JSON.stringify(response?.data));
        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        setUser({ email, password, accessToken });
        console.log(email, password);
        setEmail('');
        setPassword('');
        setLoggedIn(true);
      }
    } catch (err) {
      if (!err?.response) {
        setError('No server response');
      } else if (err.response?.statuse === 400) {
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
      {loggedIn ? (
        navigate('/contentPage')
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
                <h1>Welcome Back!</h1>
              </div>
              <form onSubmit={handleSubmit}>
                <div className='d-flex justify-content-center'>
                  <input
                    className='input-style input-style-email mt-2 mb-2'
                    type='email'
                    placeholder='email'
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                </div>
                <div className='d-flex justify-content-center'>
                  <input
                    className='input-style input-style-password mt-2 mb-2'
                    type='password'
                    placeholder='password'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  ></input>
                </div>
                <div className='d-flex w-100 justify-content-center'>
                <p>
                    Forgot password? <Link className='forgot-password-link-style' to='/forgotPasswordPage'>Reset password</Link>
                </p>
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
              <div className='d-flex w-100 justify-content-center'>
                <p>
                  Don't have an account?{' '}
                  <Link className='register-link-style' to='/registerPage'>
                    Create one
                  </Link>
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
      )}
    </>
  );
};

export default LoginPage;
