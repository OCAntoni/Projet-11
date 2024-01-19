import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/user" element={<User />} />
  </Routes>
</Router>
);