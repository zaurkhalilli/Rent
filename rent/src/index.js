import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from "./Layout/Layout"
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import Home from './Pages/Home/Home';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <React.StrictMode>
        <App/>
    </React.StrictMode>
    );

