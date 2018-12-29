import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderFullScreenPage.css';
import HomeButton from '../HomeButton.jsx';

const HeaderFullScreenPage = () => {
    return (
        <div className="nav-full-screen">
            <HomeButton />
            <h3 className="home-button-title"><Link to="/">На Главную</Link></h3>
        </div>
    );
}

export default HeaderFullScreenPage;