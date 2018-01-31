import React from 'react';
import PropTypes from 'prop-types';

const Footer = (props) => {
    return (
        <footer className="Footer">
            <div className="footer-content">
                <div className="footer-title-container">
                    <div className="footer-title">Jordan Foster</div>
                </div>
                <div className="nav-links">
                    <ul>
                        {props.footerLinks.map((link, index) => {
                                return (<li className="footer-nav-item" key={index} onClick={() => props.setNavLink(link.name, link.path)}>{link.value}</li>);
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

Footer.propTypes = {
    navigationLinks: PropTypes.array,
    setNavLink: PropTypes.func
};

export default Footer;