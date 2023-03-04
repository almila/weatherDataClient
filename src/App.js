import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UploadFile from './pages/UploadFile';
import './App.css';

const App = () => {
    const [data, setData] = useState(null);

    const fillTableRows = async () => {
        const res = await fetch('http://localhost:3010/tableData', { method: 'GET' });
        const data = await res.json();
    
        if(data) setData(data);
    };
    
    useEffect(() => {
        fillTableRows();
    }, []);
    
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home data={data} />} />
                <Route path="/upload" element={<UploadFile fillTableRows={fillTableRows} />} />
            </Routes>
        </BrowserRouter>
    )
};

export default App;