import React from 'react';
import ReactDOM from 'react-dom';

import './sass/Index.scss';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />, 
    document.getElementById('root')
);
registerServiceWorker();
