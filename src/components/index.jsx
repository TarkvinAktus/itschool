import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import App from './App.jsx';
import TestComponent from './TestComponent.jsx';
import SmallScreen from './SmallScreen/SmallScreen.jsx';

//ReactDOM.render(<App/>, document.getElementById("main"));
ReactDOM.render(<TestComponent/>, document.getElementById("root"));


if (window.innerWidth < "310") {
    ReactDOM.render(
        <div>
            <SmallScreen />
        </div>, document.getElementById('root')
    );

    window.addEventListener('orientationchange', function (){
        ReactDOM.render(
            <div>
                <App />
            </div>, document.getElementById('root')
        );
    })
}

else {
    ReactDOM.render(
        <div>
            <App />
        </div>, document.getElementById('root')
    );
}


