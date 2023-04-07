/** @format */

import React from 'react';

const contentPage = () => {
  /* put array of data calls somehow here */ 
  return (
    <html>
      <head>
        <title>Downloadable Content</title>
      </head>
      <body>
        <h1>Downloadable Content</h1>
        <ul>
          <li>
            <h2>PDFs</h2>
            <ul>
              <li><a href="path/to/pdf1.pdf" download>PDF 1</a></li>
              <li><a href="path/to/pdf2.pdf" download>PDF 2</a></li>
              <li><a href="path/to/pdf3.pdf" download>PDF 3</a></li>
            </ul>
          </li>
          <li>
            <h2>PowerPoint</h2>
            <ul>
              <li><a href="path/to/image1.jpg" download>powerpoint1</a></li>
              <li><a href="path/to/image2.jpg" download>powerpoint2</a></li>
              <li><a href="path/to/image3.jpg" download>powerpoint3</a></li>
            </ul>
          </li>
        </ul>
      </body>
    </html>
    
  );
};

export default contentPage;
