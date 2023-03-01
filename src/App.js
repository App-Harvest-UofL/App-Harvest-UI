/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className='App'>
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
    </div>
  );
}

export default App;
