/** @format */
import './login.css';

export const LoginPage = () => {
  return (
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
            <h1>Welcome Back</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <input
              className='input-style mt-2 mb-2'
              type='email'
              placeholder='email'
            ></input>
          </div>
          <div className='d-flex justify-content-center'>
            <input
              className='input-style mt-2 mb-2'
              type='password'
              placeholder='password'
            ></input>
          </div>
          <div className='d-flex justify-content-center'>
            <button className='login-button-style' type='submit'>
              Login{' '}
              <img
                className='right-arrow-style'
                src='arrow-right-solid.svg'
                alt='right arrow shaped image'
              />
            </button>
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
  );
};
