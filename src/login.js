/** @format */
import './login.css';

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
