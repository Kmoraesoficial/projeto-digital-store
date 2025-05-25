import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';

// import './assets/index.css'; // Se você tiver um CSS global

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);