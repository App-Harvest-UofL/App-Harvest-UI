/** @format */
import './login.css';
import React, {  useState } from 'react';
import { Navigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  var authenticated = false;
  

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:5164/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      gpassword: password
    })
  })
  .then(response => response.json())
  .then((data) => {
    if (data === true) {
        authenticated = true; 
        // Show success message to user
        // document.getElementById('message').innerHTML = 'Login successful!';
        console.log("worked");
      } else {
        // Show error message to user
        document.getElementById('message').innerHTML = 'Login failed. Please check your credentials.';
      }
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch call
    console.error(error);
  });
  if (authenticated) {
    return (
      
    <div>
      <p>Welcome to your Dashboard</p>
    </div>
    );
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
}

export const LoginPage = () => {
  return (
    <div className='d-flex justify-content-row login-page-container'>
      <div className='login-form-container'>
        <img
          className='AppHarvest-logo-style d-flex w-100 mt-5 justify-content-center'
          src='AppHarvest-logo.svg'
          alt='AppHarvest logo in black'
        ></img>
      </div>
      <div className='image-background-color'>
        <img
          className='w-100 h-100 image-styling'
          src='AppHarvest-Foundation-image.jpg'
          alt='AppHarvest foundation crate image'
        ></img>
      </div>
    </div>
  );
};
