import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppContainer from './components/AppContainer';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <AppContainer>
        <Navbar />
        <App />
        <Footer />
      </AppContainer>
    </React.StrictMode>
  </BrowserRouter>,
);
