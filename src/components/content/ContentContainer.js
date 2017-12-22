import React, { Component } from 'react';
import Home from './views/home/Home';

class ContentContainer extends Component {

    render() {
        return (
            <div className="Content-container">
                <div className="content">
                    <Home />
                </div>
            </div>
        );
    }
}

export default ContentContainer;