import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppThemeProvider from './theme/AppThemeProvider';
import './index.css'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AppThemeProvider>
       <App />
    </AppThemeProvider>
);