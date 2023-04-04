/** @format */

import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    content: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle registration logic here
  };

  return (
    <div>
      <h1>Register Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type='text'
            name='firstName'
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type='text'
            name='lastName'
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type='email'
            name='email'
            value={formData.email}
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
