import React from 'react';
import PropTypes from 'prop-types';

const InlineLink = (props) => {
    let name = props.linkValue.toLowerCase();
    let path = name === 'home' ? '/' : '/' + name;

    return (
        <span className="InlineLink" onClick={() => props.navigate(name, path)}>{props.linkValue}</span>
    )
}

InlineLink.propTypes = {
    linkValue: PropTypes.string,
    navigate: PropTypes.func
};

export default InlineLink;