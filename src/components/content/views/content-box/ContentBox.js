import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './ContentBox.scss';

class ContentBox extends Component {

    render() {
        return (
            <div className="ContentBox">
                <div className="box-title">
                    { this.props.boxTitle }
                </div>
                <div className="box-content">
                    { this.props.boxContent }
                </div>
            </div>
        )
    }
}

ContentBox.propTypes = {
    boxTitle: PropTypes.string,
    boxContent: PropTypes.array
}

export default ContentBox;

/* Used to construct an immutable object to be used with the ContentBox component */
export class Content {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }
}