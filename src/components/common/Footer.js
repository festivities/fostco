import React from 'react';

const Footer = (props) => {
    return (
        <footer className="Footer">
            <div className="footer-content">
                <div className="footer-title-container">
                    <div className="footer-title">Jordan Foster</div>
                </div>
                <div className="nav-links">
                    <ul>
                        {props.navigationLinks.map((link, index) => {
                                return (
                                    link.isPublic &&
                                    <li className="footer-nav-item" key={index} onClick={() => props.onNavigate(link)}>{link.value}</li>
                                );
                        })}
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;