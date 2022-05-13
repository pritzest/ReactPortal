import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import Registration from './components/Registration';
import HomePage from './components/Homepage';

export default function App() {
    
    return(
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LoginForm/> }/>
                    <Route exact path="/register" element={ <Registration/> }/>
                    <Route exact path="/homepage" element={ <HomePage/> }/>
                </Routes>
            </div>
        </Router>
    )
}


