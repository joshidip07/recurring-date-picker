import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RecurrenceProvider } from './context/RecurrenceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecurrenceProvider>
      <App />
    </RecurrenceProvider>
  </React.StrictMode>
);
