import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// require('file-loader?name=[name].[ext]!../index.html');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
