import React, {  useState } from 'react';
import { Navigate } from "react-router-dom";

function LoginForm() {
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
      password: password
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

export default LoginForm