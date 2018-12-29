import React, { Component } from 'react';
import './SmallScreen.css';

class SmallScreen extends Component {
    render() {
        return (
            <div>
                <h2 className="min-width-message">Экран вашего устройства имеет очень маленькое разрешение.<br />
                    Поверните ваше устройство горизонтально, чтобы комфортно пользоваться сайтом:)</h2>
                <div className="rotate-image">
                    <i className="material-icons">rotate_right</i>
                </div>
            </div>
        );
    }
}

export default SmallScreen;
