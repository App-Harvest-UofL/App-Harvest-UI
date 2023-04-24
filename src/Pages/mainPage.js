/** @format */
import '../Styling/mainPage.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <div className='d-flex flex-row navbar-styling align-items-center w-100 ps-3'>
        <div className='d-flex align-items-center'>
          <img
            className='AppHarvest-logo-style pe-1'
            src='AppHarvest-logo.svg'
            alt='AppHarvest logo in black'
          ></img>
        </div>
        <div className='title-styling pt-3 pb-3 align-items-center'>
          <h1>AppHarvest Foundation</h1>
        </div>
        <div className='link-styling'>
          <Link className='link-color' to='/contentPage'>
            UPLOAD
          </Link>
        </div>
      </div>
      <div className='d-flex flex-row nav-div'>
        <div className='pt-4 pb-3 d-flex w-100 uploads-div-styling justify-content-center flex-column'>
          <div>
            <p>UPLOADS</p>
          </div>
          <div className='uploads-rectangle'>
            <p className='p-2'></p>
          </div>
        </div>

        <div className='pt-4 pb-3 d-flex w-100 max-width-500px announcements-div-styling justify-content-center flex-column'>
          <div>
            <p>ANNOUNCEMENTS</p>
          </div>
          <div className='announcements-rectangle'>
            <p className='p-2'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
