import React from 'react';
import { Link } from "react-router-dom";

const UploadFile = ({ fillTableRows }) => {
    const onFileUpload = async (e) => {
        var file = e.target.files[0];

        var formData = new FormData();
        formData.append('file', file);

        const uploadedFile = await fetch('https://weather-data-server.onrender.com/uploadFile', {
            method: 'POST',
            body: formData
        });

        if(uploadedFile) fillTableRows();
    };

    return(
        <div>
          <div className='title'>
            Upload File
          </div>

          <div className='subtitle'>
            Please upload an xlsx file
          </div>

            <input
                type="file"
                name="xlsFile"
                id="xlsFile"
                accept=".xls, .xlsx"
                onChange={onFileUpload}
                style={{
                    marginLeft: 80
                }}
            />

        <div style={{ position: 'absolute', top: 20, left: 10 }}>
            <Link to="/">
                <button type="button">
                    Back To Home Page
                </button>
            </Link>
        </div>

        </div>
    )
};

export default UploadFile;