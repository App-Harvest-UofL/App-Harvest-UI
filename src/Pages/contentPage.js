/** @format */

import React, { useState } from 'react';
import axios from '../API Pull/axios';

const contentPage = () => {
  const [fileName, setFileName] = useState('');
  const getFile = async () => {
    try {
      const response = await axios.get("http://testtesttest123.com/?hi", {
        params: { fileName }
      })
    }
    catch (err)
    {
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
  }
  return (
    <div>
      <h1>Content Page</h1>
    </div>
  );
};


export default contentPage;
