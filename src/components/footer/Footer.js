import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Footer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            footerLinks: this.props.navigationLinks
        }
    }

    render() {
        return (
            <footer className="Footer">
                <div className="footer-content">
                    <div className="footer-title-container">
                        <div className="footer-title">Jordan Foster</div>
                    </div>
                    <div className="nav-links">
                        <ul>
                            {
                                this.state.footerLinks.map((link, index) => {
                                    return <li className={link.footerClass} key={index} onClick={() => this.props.setNavLink(link.name)}>{link.value}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="site-map"></div>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    navigationLinks: PropTypes.array,
    setNavLink: PropTypes.func
};

export default Footer;