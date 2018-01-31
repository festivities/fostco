import React from 'react';

const InlineLink = (props) => {
    let pathName = props.linkValue.toLowerCase();
    return (
        <span className="InlineLink" onClick={() => props.onNavigate(pathName)}>{props.linkValue}</span>
    );
}

export default InlineLink;