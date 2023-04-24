/** @format */
import '../Styling/mainPage.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MainPage = () => {
  const [announcements, setAnnouncements] = useState([]);

  const announcements_dummydata = [
    {'Body': 'Welcome to AppHarvest Foundation'},
    {'Body': 'Files will be coming soon...'},
  ]

  const files = [
    {'link': '123.com', 'name': 'ExampleTest.pdf', 'uploadedBy': 'User', 'description': 'File Test 1'},
    {'link': '123.com', 'name': 'ExtraFile.pdf', 'uploadedBy': 'User', 'description': 'Extra files for test'}
  ]

  useEffect(() => {
    axios.get('your_api_endpoint_url')
      .then(response => {
        const extractedAnnouncements = response.data.map(obj => obj.Description);
        setAnnouncements(extractedAnnouncements);
      })
      .catch(error => console.error(error));
  }, []);

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
          <div className='file' >
                  <span className="link" >Link</span>
                  <span className="name">Description of File</span>
                  <span className="user">Uploaded By</span>
                </div>
            <div>{files.map(file => (
                <div className='file' >
                  <a href="https://example.com">{file['name']}</a>
                  <span className="name">{file['description']}</span>
                  <span className="user">{file['uploadedBy']}</span>
                </div>
                ))}
            </div>
          </div>
        </div>

        <div className='pt-4 pb-3 d-flex w-100 max-width-500px announcements-div-styling justify-content-center flex-column'>
          <div>
            <p>ANNOUNCEMENTS</p>
          </div>
          <div className='announcements-rectangle'>
            <div>{announcements_dummydata.map(announcement => (
                <div className='announcements'>-{announcement['Body']}</div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
