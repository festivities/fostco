import React from 'react';

const InlineLink = (props) => {
    let name = props.linkValue.toLowerCase();
    let path = name === 'home' ? '/' : '/' + name;

    return (
        <span className="InlineLink" onClick={() => props.navFunc(name, path)}>{props.linkValue}</span>
    )
}

export default InlineLink;