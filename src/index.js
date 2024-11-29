import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // استيراد BrowserRouter
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* تغليف تطبيقك بـ BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
