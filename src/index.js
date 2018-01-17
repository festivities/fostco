import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/sass/index.scss';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <Route path="/fostco/" component={App}/>
    </BrowserRouter>, 
    document.getElementById('root')
);
registerServiceWorker();
