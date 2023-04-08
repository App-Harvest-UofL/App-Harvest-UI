/** @format */

import React, { useState } from "react";

const ContentPage = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleFileDownload = (url) => {
    window.open(url);
  };

  return (
    <div>
      <h1>File Uploader/Downloader</h1>
      <input type="file" onChange={handleFileUpload} multiple />
      <br />
      <br />
      <h2>Uploaded Files:</h2>
      <ul>
        {selectedFiles.length > 0 &&
          Array.from(selectedFiles).map((file, index) => (
            <li key={index}>
              {file.name} ({file.type}, {file.size} bytes)
            </li>
          ))}
      </ul>
      <br />
      <h2>Downloaded Files:</h2>
      <ul>
        <li>
          <a href="https://example.com/file1.pdf" onClick={() => handleFileDownload("https://example.com/file1.pdf")}>
            file1.pdf
          </a>
        </li>
        <li>
          <a href="https://example.com/file2.jpg" onClick={() => handleFileDownload("https://example.com/file2.jpg")}>
            file2.jpg
          </a>
        </li>
        {/* Add more files as needed */}
      </ul>
    </div>
  );
};

export default ContentPage;