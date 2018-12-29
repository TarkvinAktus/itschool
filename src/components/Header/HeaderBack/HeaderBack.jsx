import React, { Component } from 'react';
import './HeaderBack.css'

const HeaderBack = (props) => {
    return (
        <div className="header-back" >{props.children}</div>
    );
}

export default HeaderBack;