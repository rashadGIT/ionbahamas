
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Button } from 'reactstrap';
import axios from 'axios';
import '../css/scholarship.css';

export default function Scholarship() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      // Simulate an API call to upload the file
      setUploadStatus('Uploading...');

      // In a real application, you would use APIs to upload the file to a server
      // and handle the response accordingly
      setTimeout(() => {
        setUploadStatus('Upload successful');
        setSelectedFile(null);
      }, 2000);
    }
  };

  return (
    <Layout>
      <div className="content" style={{paddingTop : '80px'}}>
        <h1 className="title">Scholarship Details</h1>
        <p>
          <span className="value">$1,000 college scholarship (6 available)</span><br />
        </p>
        <p className="upperCase">
            Video Should Include:<br />
            &bull;Name 
            &bull;High School graduated from<br />
            &bull;GPA &bull;Extra curricular Activity 
            &bull;College Attending
            &bull;Major<br />
            &bull;Plans After College
            &bull;Community involvement
        </p>
        <p className="upperCase">
            If you could change the world with your degree:<br />
            1. What would you do?<br />
            2. How would you do it?
        </p>
        <p className="upperCase">
          Deadline July 31, 2020
        </p>
        
        <h4>Upload Scholarship Videos</h4>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        <br />
        <p>{uploadStatus}</p>
    </div>
    </Layout>
  );
};
