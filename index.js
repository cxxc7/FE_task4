import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { NotificationProvider } from './context/NotificationContext';
import './App.css'; 

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <NotificationProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </NotificationProvider>
);
