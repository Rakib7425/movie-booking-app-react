import { BrowserRouter } from 'react-router-dom';
// import { AuthUserProvider } from './contexts/firebase/auth';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <AuthUserProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </AuthUserProvider>
  // </React.StrictMode>

);

