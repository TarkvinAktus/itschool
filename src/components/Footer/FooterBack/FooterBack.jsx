import React, { Component } from 'react';
import './FooterBack.css'

function FooterBack(props) {
    return (
        <div className="footer-back" >{props.children}</div>
    );
}

export default FooterBack;