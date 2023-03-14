import React from 'react';
import ReactDOM from 'react-dom/client';
import WrappedApp from './app';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WrappedApp />
  </React.StrictMode>
);
