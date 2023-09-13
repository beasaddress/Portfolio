import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <Router>
        <div className="home-page">
            <Home />
        </div>
        </Router>
    );
}