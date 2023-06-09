import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const append = document.querySelector('#root');
const root = createRoot(append);

root.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
);