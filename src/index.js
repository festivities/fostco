import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router-dom';

import './styles/sass/index.scss';

import App from './components/App';
import configureHistory from './configureHistory';
import registerServiceWorker from './registerServiceWorker';

const history = configureHistory();

ReactDOM.render(
    <Router history={history}>
        <Route path={process.env.PUBLIC_URL + '/'} component={App}/>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
