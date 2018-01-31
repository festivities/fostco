import React from 'react';
import PropTypes from 'prop-types';

const InlineLink = (props) => {
    let pathName = props.linkValue.toLowerCase();
    return (
        <span className="InlineLink" onClick={() => props.onNavigate(pathName)}>{props.linkValue}</span>
    );
}

export default InlineLink;