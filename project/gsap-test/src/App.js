import React from 'react';
import './public/css/style.css';
import App from './component/App.js';
import { BrowserRouter as Router } from 'react-router-dom';

function Index() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default Index;
