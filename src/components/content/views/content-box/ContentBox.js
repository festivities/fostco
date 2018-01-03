import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentBox extends Component {

    render() {
        return (
            <div className="ContentBox" key={'cb-div-0-' + this.props.boxKey}>
                <div className="box-title" key={'cb-div-1-' + this.props.boxKey}>
                    {this.props.boxTitle}
                </div>
                <div className="box-content" key={'cb-div-2-' + this.props.boxKey}>
                    {this.props.boxContent}
                </div>
            </div>
        )
    }
}

ContentBox.propTypes = {
    boxKey: PropTypes.string,
    boxTitle: PropTypes.string,
    boxContent: PropTypes.array
}

export default ContentBox;

/* Used to construct an immutable object to be used with the ContentBox component */
export class Content {
    constructor(id, title, content) {
        this.id = id;
        this.title = title;
        this.content = content;
    }
}