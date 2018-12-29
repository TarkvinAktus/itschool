import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import HeaderBack from './HeaderBack/HeaderBack.jsx';
import Page from '../Page/Page.jsx';
import HeaderMobile from './HeaderMobile/HeaderMobile.jsx';
import HomeButtom from './HomeButton.jsx';

function openMenu (event) {
    var nav = document.getElementById("mobile");
    var openButton = document.getElementById("openNavButton");

    if (event.target == openButton && nav.className == "dropdown-menu") {
        nav.className += " mobile";
    }
    else {
        nav.className = "dropdown-menu";
    }
 }

//  window.onload= function () {
//     var nav = document.getElementById("mobile");
//     var openButton = document.getElementById("openNavButton");

//     window.addEventListener('click', function (event) {
//         if (event.target != openButton && nav.className == "dropdown-menu mobile") {
//             nav.className = "dropdown-menu";
//         }
//     })
//  }

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { chatVisible: false, techBack: false };
    }

    componentDidMount() {
        this.setState({ chatVisible: true }); //флаг видимости чата в зависимости от авторизации
    }

    render() {
        return (
            <HeaderBack>
                <Page>
                    <nav>
                        <HomeButtom />
                        <a onClick={openMenu} className="header-menu-button" id="openNavButton">Меню</a>
                        <div className="header-menu">
                            <Link to="/news">Новости</Link>
                            <Link to="/courses">Курсы</Link>
                            <Link to="/schools">Школы</Link>
                            <Link to="/resources">Ресурсы</Link>
                            {this.state.chatVisible && <Link to="/chat">Чат</Link>}
                            <Link to="/about">О нас</Link>
                        </div>
                        <div className="authorization" title="Войти"><Link to="/login"><i className="material-icons">person</i></Link></div>
                        <HeaderMobile />
                    </nav>
                </Page>
            </HeaderBack>
        );
    }
}

export default Header;