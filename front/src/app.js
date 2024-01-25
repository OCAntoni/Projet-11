import React from 'react'
import "./styles/main.scss"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'
import UserNameChange from './pages/userNameChange'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/user" element={<User />} />
                <Route path="/userNameChange" element={<UserNameChange />} />
            </Routes>
        </Router>
    )
}

export default App