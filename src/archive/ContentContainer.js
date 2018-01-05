import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './views/home/Home';
import About from './views/about/About';

class ContentContainer extends Component {

    render() {
        return (
            <div className="ContentContainer">
                <div className="content">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default ContentContainer;