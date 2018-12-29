import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeButton.css';

const HomeButton = () => {
    return (
        <div className="home-button" title="На Главную">
            <Link to="/"><i className="material-icons">brightness_1</i></Link>
        </div>
    );
}

export default HomeButton;