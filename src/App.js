import './App.css';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home'
import Resumer from './components/Resumer'

function App() {
    return ( <
        div className = "" >
        <
        Router >





        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        /> <
        Route path = "/resumer"
        element = { < Resumer / > }
        />   < /
        Routes >
        <
        /Router>

        <
        /div>
    );
}

export default App;