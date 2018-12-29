import React, { Component } from 'react';
import './Login.css';
import '../Header/HeaderFullScreenPage/HeaderFullScreenPage.jsx';
import HeaderFullScreenPage from '../Header/HeaderFullScreenPage/HeaderFullScreenPage.jsx';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('form has submitted');
        fetch('/LoginS', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: {
             "email": this.email,
             "pass": this.password
            }
           });
    }

    handleEmailChange(event) {
        console.log('email was changed', event.target.value);
        this.setState({email: event.target.value});
    }

    handlePassChange(event) {
        console.log('pass was changed', event.target.value);
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="login-background">
                <HeaderFullScreenPage />
                <div className="login-card">
                    <h1 className="login">Войдите</h1>
                    <div className="user-avatar"></div>
                    <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Электронная почта"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        />
                    <input type="password" placeholder="Пароль" onChange={this.handlePassChange}/>
                    <button className="enter-login">Войти</button>
                    </form>                
                    <a href="" className="registration">Регистрация</a>
                </div>
            </div>
        );

    }
}

export default Login;