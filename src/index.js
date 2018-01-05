import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './sass/Index.scss';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        {/* <App /> */}
        <Route path="/" component={App}/>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
