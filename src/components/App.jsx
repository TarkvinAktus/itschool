import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
//import history from './history.jsx';

import MainPage from './MainPage/MainPage.jsx';
import NewsBlog from './NewsBlog/NewsBlog.jsx';
import Login from './Login/Login.jsx';
import Page404 from './Page404.jsx';
import CoursePage from './Courses/CoursePage.jsx';

class App extends Component {
    render() {
        return(
            <Router history={history} >
                <div>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/news" component={NewsBlog} />
                        <Route path="/courses" component={CoursePage} />
                        <Route path="/login" component={Login} />
                        <Route path="*" component={Page404} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;