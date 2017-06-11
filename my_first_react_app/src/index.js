import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import registerServiceWorker from './JS/registerServiceWorker';
import './CSS/index.css';

let name = "AppName"

ReactDOM.render(
    <App name={name}/>,
    document.getElementById('root')
);
registerServiceWorker();
