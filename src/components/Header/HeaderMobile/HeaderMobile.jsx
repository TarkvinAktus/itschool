import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderMobile.jsx';

class HeaderMobile extends Component {
    constructor(props) {
        super(props);
        this.state = { chatVisible: false, techBack: false };
    }

    componentDidMount() {
        this.setState({ chatVisible: false , techBack: false}); //флаг видимости чата в зависимости от авторизации
    }

    render() {
        return (
            <div className="dropdown-menu" id="mobile">
                <Link to="/news">Новости</Link>
                <Link to="/courses">Курсы</Link>
                <Link to="/schools">Школы</Link>
                <Link to="/resources">Ресурсы</Link>
                {this.state.chatVisible && <Link to="/chat">Чат</Link>}
                <Link to="/about">О нас</Link>
            </div>
        );
    }
}

export default HeaderMobile;