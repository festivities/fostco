import React, { Component } from 'react';

import Home from './views/home/Home';
import About from './views/about/About';

class ContentContainer extends Component {

    render() {
        return (
            <div className="ContentContainer">
                <div className="content">
                    {/* <Home /> */}
                    <About />
                </div>
            </div>
        );
    }
}

export default ContentContainer;