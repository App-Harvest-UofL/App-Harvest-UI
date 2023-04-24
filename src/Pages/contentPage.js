import React, { useState, useRef} from "react";
import axios from "axios";
import "../contentPage.css";

const ContentPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [announcement, setAnnouncement] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [sentAnnouncements, setSentAnnouncements] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (event) => {
    try {
      const formData = new FormData();
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append("file", event.target.files[i]);
      }

      const response = await axios.post("http://localhost:5164/FileUpload/", formData);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error("Error:", error); // Handle error
    }
    setSelectedFiles(event.target.files);
  };

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };

  const handleChooseFileClick = () => {
    fileInputRef.current.click();
  };
  
  const handleAnnouncementClick = async () => {
    console.log(`Sending announcement: ${announcement}`);
    if (selectedFiles.length > 0) {
      console.log(`Attached file: ${selectedFiles[0].name}`);
    }
    const newAnnouncement = {
      message: announcement,
      file: selectedFiles.length > 0 ? selectedFiles[0].name : null,
    };

    const response = await axios({
      method: 'post',
      url: '/login', // come back and adjust this 
      data: {
        
      },
    });
    setAnnouncements([...announcements, newAnnouncement]);
    setSentAnnouncements([...sentAnnouncements, newAnnouncement]);
    setAnnouncement("");
  };

  const handleDeleteFile = () => {
    setSelectedFiles([]);
  };

  const deleteAnnouncement = (announcement) => {
    const newSentAnnouncements = sentAnnouncements.filter(
      (sentAnnouncement) => sentAnnouncement.id !== announcement.id
    );
    setSentAnnouncements(newSentAnnouncements);
  };

  return (
    <div className="content-container">
      <div className="upload-container">
        <div className="logo-container">
          <img
            className="logo"
            src="AppHarvest-logo.svg"
            alt="AppHarvest logo in black"
          />
        </div>
        <div className="button-container">
          <input type="file" onChange={handleFileUpload} multiple ref={fileInputRef} style={{ display: "none" }} />
          <button className="upload-button" onClick={handleChooseFileClick}>
            Upload File
          </button>
          {selectedFiles.length > 0 && (
            <button className="delete-button" onClick={handleDeleteFile}>
              Delete File
            </button>
          )}
        </div>
        <div className="uploaded-files-container">
        <br></br>
        <br></br>
        <h2>Uploaded Files</h2>
        <ul>
        {selectedFiles.length > 0 &&
          Array.from(selectedFiles).map((file, index) => (
            <li key={index}>
              {file.name} ({file.type}, {file.size} bytes)
            </li>
            ))}
        </ul>
        </div>
      </div>
      <div className="announcement-container">
        <h2>Announcements</h2>
        <textarea
          className="announcement-textarea"
          placeholder="Enter your announcement here"
          value={announcement}
          onChange={handleAnnouncementChange}
        />
        <button
          className="announcement-button"
          onClick={handleAnnouncementClick}
        >
          Send Announcement
        </button>
        <br></br>
        <br></br>
        <h2>Sent Announcements</h2>
            <ul>
            {sentAnnouncements.map((announcement, index) => (
            <li key={index}>
            <div>{announcement.message}</div>
            {announcement.file && (
            <div>
                Attached file: {announcement.file}
                <button onClick={() => deleteAnnouncement(announcement)}>Delete</button>
            </div>
            )}
            </li>
            ))}
            </ul>
            </div>
        </div>
  );
};

export default ContentPage;