import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history'

import './styles/sass/index.scss';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Route path={process.env.PUBLIC_URL + '/'} component={App}/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
