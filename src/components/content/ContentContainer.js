import React, { Component } from 'react';
import Home from './views/home/Home';

class ContentContainer extends Component {

    render() {
        return (
            <div className="Content-container">
                <div className="content">
                    <div className="view">
                        <Home />
                    </div>
                </div>
            </div>
        );
    }
}

export default ContentContainer;