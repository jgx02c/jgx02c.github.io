import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss';

// Restore deep links captured by the GitHub Pages 404 fallback.
const redirect = sessionStorage.getItem('spa-redirect');
if (redirect) {
    sessionStorage.removeItem('spa-redirect');
    history.replaceState(null, '', redirect);
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
